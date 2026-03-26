// ═══ ASSEMBLE DB FROM SEPARATE FILES ═══
const DB={
  CSI106: CSI106_DATA,
  CEA201: CEA201_DATA,
  PRF192: PRF192_DATA,
};

const S={tab:'CSI106',mode:'quiz',filter:'all',semFilter:'all',search:'',ans:{},res:{}};

// ═══ BOOT ═══
function boot(){
  ['CSI106','CEA201','PRF192'].forEach(t=>{
    const el=document.getElementById('cnt-'+t);
    if(el) el.textContent=DB[t].length;
  });
  updateSemBtns();
  renderQuiz();
  maeShow('ma1',document.querySelector('.mnb'));
}

// ═══ TAB ═══
function switchTab(btn){
  S.tab=btn.dataset.tab;
  document.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('on'));
  btn.classList.add('on');
  const isM=S.tab==='MAE101';
  document.getElementById('quizPanel').style.display=isM?'none':'block';
  document.getElementById('maePanel').style.display=isM?'block':'none';
  document.getElementById('sidebarEl').style.display=isM?'none':'block';
  if(isM){
    document.getElementById('hdrStat').textContent='Tài liệu tham khảo';
    if(window.MathJax) MathJax.typesetPromise();
  } else {
    document.getElementById('sinp').value='';
    S.search=''; S.filter='all';
    document.querySelectorAll('.fbtn').forEach((b,i)=>b.classList.toggle('on',i===0));
    renderQuiz();
  }
}

// ═══ FILTER ═══
function getFilt(){
  return(DB[S.tab]||[]).filter(q=>{
    const key=S.tab+'-'+q.id,r=S.res[key],a=S.ans[key];
    let p=true;
    if(S.filter==='undo') p=!a||!a.revealed;
    else if(S.filter==='ok') p=r==='ok';
    else if(S.filter==='ng') p=r==='ng';
    if(p&&S.semFilter!=='all')p=(q.topic||'').startsWith(S.semFilter);
    if(p&&S.search){
      const s=S.search.toLowerCase();
      p=q.en.toLowerCase().includes(s)||q.vi.toLowerCase().includes(s)||q.id.includes(s)||q.topic.toLowerCase().includes(s);
    }
    return p;
  });
}

// ═══ RENDER ═══
function renderQuiz(){
  const total=(DB[S.tab]||[]).length;
  document.getElementById('hdrStat').textContent=total+' câu hỏi';
  const filt=getFilt();
  document.getElementById('gInfo').textContent=filt.length+' câu đang hiện';
  const container=document.getElementById('cardList');
  if(!filt.length){
    container.innerHTML='<div class="empty"><div class="ei">[ ]</div><div class="et">Không có câu hỏi</div><div class="es">Thử thay đổi bộ lọc hoặc từ khoá tìm kiếm.</div></div>';
    updateSB(); return;
  }
  container.innerHTML=filt.map(q=>mkCard(q)).join('');
  updateSB();
}

function parseOpt(raw){
  // "A. EN text|VI text" => {lbl:'A', en:'EN text', vi:'VI text'}
  const dot=raw.indexOf('.');
  const lbl=raw.slice(0,dot).trim();
  const rest=raw.slice(dot+1).trim();
  const pipe=rest.indexOf('|');
  if(pipe===-1) return{lbl,en:rest,vi:rest};
  return{lbl,en:rest.slice(0,pipe).trim(),vi:rest.slice(pipe+1).trim()};
}

function mkCard(q){
  const key=S.tab+'-'+q.id;
  const a=S.ans[key]||{},r=S.res[key];
  const revealed=a.revealed||S.mode==='study';
  const bc=r==='ok'?'bok':r==='ng'?'bng':'';
  const st=r?`<span class="qst ${r}">${r==='ok'?'✓ ĐÚNG':'✗ SAI'}</span>`:'';

  const optsHtml=q.opts.map(raw=>{
    const o=parseOpt(raw);
    let cls='opt';
    if(revealed){
      cls+=' lk';
      if(o.lbl===q.ans) cls+=' cok';
      else if(o.lbl===a.sel&&o.lbl!==q.ans) cls+=' cng';
    } else if(a.sel===o.lbl) cls+=' sel';
    return `<div class="${cls}" onclick="pick('${q.id}','${o.lbl}')">
      <span class="ol">${o.lbl}</span>
      <div class="opt-txt">
        <div class="oen">${xss(o.en)}</div>
        <div class="ovi">${xss(o.vi)}</div>
      </div>
    </div>`;
  }).join('');

  const expShow=revealed?' show':'';
  const expHtml=`<div class="expbox${expShow}" id="exp-${q.id}">
    <div class="exphd">
      <span class="exphd-lbl">💡 Giải Thích</span>
      <span class="anspill">Đáp án: ${q.ans}</span>
    </div>
    <div class="expbd">
      <div class="exptxt">${renderEx(q.ex)}</div>
    </div>
  </div>`;

  const ft=`<div class="qcft">
    ${!revealed?`<button class="btn bd" onclick="revealOne('${q.id}')">Hiện đáp án</button>`:''}
    <button class="btn bs" onclick="togExp('${q.id}')">Giải thích</button>
    <button class="btn bs" onclick="resetOne('${q.id}')">Làm lại</button>
  </div>`;

  return `<div class="qc ${bc}" id="card-${q.id}">
    <div class="qc-hd">
      <span class="qnb">CÂU ${q.id}</span>
      <span class="qtb" style="border-color:${semColor(q.topic)};color:${semColor(q.topic)}">${xss(q.topic)}</span>
      <div class="qtx">
        <div class="qen">${xss(q.en)}</div>
        <div class="qvi">${xss(q.vi)}</div>
      </div>
      ${st}
    </div>
    <div class="opts">${optsHtml}</div>
    ${expHtml}
    ${ft}
  </div>`;
}

function xss(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');}

function renderEx(raw){
  // Convert raw explanation string into structured, readable HTML
  const s = String(raw).trim();
  const esc = t => t.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');

  // Split on real newlines OR on sentence boundaries we can detect
  // Key patterns to detect:
  // - Lines starting with (1) (2)... or step numbers
  // - Lines starting with Bước 1, Bước 2...
  // - "→ Đáp án" conclusion
  // - Công thức / formula lines
  // - "So sánh:", "Ví dụ:", "Nhớ:" etc.

  // First: split text into segments on \n
  let lines = s.split(/\\n|\n/).map(l=>l.trim()).filter(l=>l.length>0);

  // If only 1 long line, try to split on common delimiters intelligently
  if(lines.length === 1 && s.length > 120){
    // Split on ". " before capitals or Vietnamese sentence starters
    let tmp = s
      .replace(/\. (Bước|Ví dụ|Nhớ|So sánh|Ưu điểm|Nhược điểm|Đặc điểm|Phân biệt|Lưu ý|Công thức|Kết quả|Kết luận|Mục đích|Ý nghĩa|Cách|Điều kiện|Quy tắc|Lợi ích|Ứng dụng)/g, '.\n$1')
      .replace(/ (→ Đáp án)/g, '\n$1')
      .replace(/\. (PHÁT BIỂU|ĐÁP ÁN|Đáp án đúng)/g, '.\n$1')
      .replace(/([:]) (\(1\)|\(2\)|\(3\)|\(4\))/g, '$1\n$2')
      .replace(/\. (\(1\)|\(2\)|\(3\)|\(4\))/g, '.\n$1')
      .replace(/([.!]) (Ưu điểm|Nhược điểm|Khác với|Khác|Phân biệt)/g, '$1\n$2')
      .replace(/(; )(\(1\)|\(2\)|\(3\)|\(4\))/g, ';\n$2');
    lines = tmp.split('\n').map(l=>l.trim()).filter(l=>l.length>0);
  }

  // Render each line with appropriate styling
  let html = '';
  for(let i=0; i<lines.length; i++){
    const ln = lines[i];
    const ll = ln.toLowerCase();

    // Conclusion line "→ Đáp án X"
    if(/^→\s*đáp án/i.test(ln)){
      html += `<div class="ex-correct">✓ ${esc(ln)}</div>`;
    }
    // Numbered step (1) (2) (3) (4)
    else if(/^\(\d\)/.test(ln)){
      const num = ln.match(/^\((\d)\)/)[1];
      const rest = ln.replace(/^\(\d\)\s*/,'');
      html += `<div class="ex-step"><span class="ex-step-num">${num}</span><span class="ex-step-txt">${esc(rest)}</span></div>`;
    }
    // Bước 1, Bước 2...
    else if(/^bước\s*\d/i.test(ln)){
      const m = ln.match(/^(bước\s*\d+[^:]*[:—\-]*)\s*(.*)/i);
      const label = m ? m[1].trim() : '';
      const rest  = m ? m[2].trim() : ln;
      html += `<div class="ex-step"><span class="ex-step-num" style="width:auto;padding:0 6px;border-radius:4px;font-size:9px">${esc(label)}</span><span class="ex-step-txt">${esc(rest)}</span></div>`;
    }
    // Formula/calculation line — contains = or × or ÷ or →
    else if(/[=×÷→↔⁰¹²³⁴⁵⁶⁷⁸⁹₀₁₂₃₄₅₆₇₈₉]/.test(ln) && /công thức|nmax|speedup|r =|b ×|s =|\d[\^]|\d×|\d÷|2\^|2^|log₂|\d\s*[÷×]\s*\d|=\s*\d/.test(ll)){
      html += `<div class="ex-formula">${esc(ln)}</div>`;
    }
    // Wrong options section
    else if(/^các đáp án sai|^đáp án sai/i.test(ln)){
      html += `<div class="ex-wrong">✗ ${esc(ln)}</div>`;
    }
    // Warning/note
    else if(/^lưu ý|^nhớ:|^chú ý|^quan trọng/i.test(ln)){
      html += `<div class="ex-note">⚠ ${esc(ln)}</div>`;
    }
    // Header/intro line (short, ends with : or is a definition opener)
    else if(ln.endsWith(':') && ln.length < 80){
      html += `<div class="ex-line" style="font-weight:600;color:var(--tx);padding-top:8px">${esc(ln)}</div>`;
    }
    // Normal line
    else{
      html += `<div class="ex-line">${esc(ln)}</div>`;
    }
  }
  return html || `<div class="ex-line">${esc(s)}</div>`;
}

// ═══ INTERACTIONS ═══
function pick(id,lbl){
  const key=S.tab+'-'+id,a=S.ans[key]||{};
  if(a.revealed||S.mode==='study') return;
  const q=(DB[S.tab]||[]).find(x=>x.id===id);if(!q)return;
  S.ans[key]={sel:lbl,revealed:true};
  S.res[key]=lbl===q.ans?'ok':'ng';
  reCard(q); updateSB();
}
function revealOne(id){
  const key=S.tab+'-'+id;
  S.ans[key]={...(S.ans[key]||{}),revealed:true};
  reCard((DB[S.tab]||[]).find(x=>x.id===id));
  updateSB();
}
function togExp(id){const el=document.getElementById('exp-'+id);if(el)el.classList.toggle('show');}
function resetOne(id){
  const key=S.tab+'-'+id;
  delete S.ans[key];delete S.res[key];
  reCard((DB[S.tab]||[]).find(x=>x.id===id));
  updateSB();
}
function reCard(q){
  const el=document.getElementById('card-'+q.id);if(!el)return;
  const tmp=document.createElement('div');
  tmp.innerHTML=mkCard(q);
  el.replaceWith(tmp.firstChild);
}
function revealAll(){
  (DB[S.tab]||[]).forEach(q=>{
    const key=S.tab+'-'+q.id;
    if(!S.ans[key]||!S.ans[key].revealed)S.ans[key]={...(S.ans[key]||{}),revealed:true};
  });
  renderQuiz();
}
function resetAll(){
  const p=S.tab+'-';
  Object.keys(S.ans).filter(k=>k.startsWith(p)).forEach(k=>delete S.ans[k]);
  Object.keys(S.res).filter(k=>k.startsWith(p)).forEach(k=>delete S.res[k]);
  renderQuiz();
}
function setMode(m){
  S.mode=m;
  document.getElementById('modeQ').classList.toggle('on',m==='quiz');
  document.getElementById('modeS').classList.toggle('on',m==='study');
  renderQuiz();
}
function setFilter(f,btn){
  S.filter=f;
  document.querySelectorAll('.fbtn').forEach(b=>b.classList.remove('on'));
  btn.classList.add('on');
  renderQuiz();
}
function doSearch(v){S.search=v;renderQuiz();}

// ═══ SIDEBAR — cập nhật động ═══
function updateSB(){
  const qs=DB[S.tab]||[];
  let ok=0,ng=0,done=0;
  qs.forEach(q=>{
    const r=S.res[S.tab+'-'+q.id];
    if(r==='ok'){ok++;done++;}
    else if(r==='ng'){ng++;done++;}
  });
  const sk=qs.length-ok-ng;
  const pct=qs.length>0?Math.round(done/qs.length*100):0;

  // update số liệu
  document.getElementById('sTot').textContent=qs.length;
  document.getElementById('sOk').textContent=ok;
  document.getElementById('sNg').textContent=ng;
  document.getElementById('sSk').textContent=sk;
  document.getElementById('sPct').textContent=pct+'%';
  document.getElementById('sFill').style.width=pct+'%';
  document.getElementById('topFill').style.width=pct+'%';

  // dots
  const dots=document.getElementById('dotsList');
  dots.innerHTML='';
  qs.forEach((q,i)=>{
    const r=S.res[S.tab+'-'+q.id];
    const d=document.createElement('div');
    d.className='dot'+(r==='ok'?' d-ok':r==='ng'?' d-ng':'');
    d.textContent=String(i+1).padStart(2,'0');
    d.title='Câu '+(i+1)+': '+(r==='ok'?'Đúng':r==='ng'?'Sai':'Chưa làm');
    d.onclick=()=>{
      const card=document.getElementById('card-'+q.id);
      if(card)card.scrollIntoView({behavior:'smooth',block:'start'});
    };
    dots.appendChild(d);
  });
}

// ═══ MODAL ═══
function openModal(){
  const qs=DB[S.tab]||[];
  let ok=0,done=0;
  qs.forEach(q=>{const r=S.res[S.tab+'-'+q.id];if(r){done++;if(r==='ok')ok++;}});
  const pct=done?Math.round(ok/done*100):0;
  document.getElementById('mScore').textContent=ok+'/'+done;
  const pct2=done?Math.round(ok/done*100):0;
  const mPctEl=document.getElementById('mPct');if(mPctEl)mPctEl.textContent=pct2+'%';
  let msg='';
  if(!done) msg='Chưa làm câu nào!';
  else if(pct>=90) msg='Xuất sắc! Lengg đã nắm vững kiến thức rồi.';
  else if(pct>=70) msg='Tốt! Hãy ôn tập thêm những câu sai nhé.';
  else if(pct>=50) msg='Khá! Cần cố gắng thêm một chút nữa.';
  else msg='Cần ôn tập lại nhiều hơn nhe Lengg!';
  document.getElementById('mMsg').textContent='Tỉ lệ đúng: '+pct+'% ('+done+' câu đã làm) — '+msg;
  document.getElementById('modal').classList.add('show');
}
function closeModal(){document.getElementById('modal').classList.remove('show');}

// ═══ MAE REFERENCE ═══

function maeShow(id,btn){
  document.getElementById('maeBody').innerHTML=MAE[id]||'';
  document.querySelectorAll('.mnb').forEach(b=>b.classList.remove('on'));
  if(btn)btn.classList.add('on');
  if(window.MathJax)MathJax.typesetPromise();
}

// ═══ SEMESTER FILTER ═══
const SEM_COLOR={'FA25':'#06b6d4','FA24':'#8b5cf6','SU25':'#10b981','SU24':'#f59e0b','SP25':'#f97316'};
function semColor(t){for(const k of Object.keys(SEM_COLOR)){if(t&&t.startsWith(k))return SEM_COLOR[k];}return'#64748b';}
const SEM_LISTS={CSI106:['FA25','SU25','FA24','SU24','SP25'],CEA201:['FA25','FA24','SU24'],PRF192:[]};
function setSemFilter(sem,btn){
  S.semFilter=sem;
  document.querySelectorAll('.sfbtn').forEach(b=>b.classList.remove('on'));
  if(btn)btn.classList.add('on');
  renderQuiz();
}
function updateSemBtns(){
  const wrap=document.getElementById('semWrap');if(!wrap)return;
  const sems=SEM_LISTS[S.tab]||[];
  let h='<span class="clbl" style="margin-right:4px">KỲ:</span>';
  h+='<button class="sfbtn fbtn on" onclick="setSemFilter(\'all\',this)">Tất cả</button>';
  sems.forEach(s=>{
    const c=SEM_COLOR[s]||'#64748b';
    h+=`<button class="sfbtn fbtn" style="border-color:${c}44;color:${c}" onclick="setSemFilter('${s}',this)">${s}</button>`;
  });
  wrap.innerHTML=h;S.semFilter='all';
}

boot();
