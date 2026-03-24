/* MAE101 — Tài liệu tham khảo toán */
const MAE={
ma1:`
<div class="ch-hd">
  <div class="ch-num">Algebra — Chương 1</div>
  <h2>Ma Trận (Matrix Algebra)</h2>
  <p>Bảng số sắp xếp thành hàng và cột — nền tảng của đại số tuyến tính.</p>
</div>
<div class="obs-b">Hình dung ma trận như bảng điểm: hàng là sinh viên, cột là môn học. Ô a(i,j) là điểm sinh viên i ở môn j. Mọi phép toán ma trận là cách kết hợp nhiều bảng điểm đó lại.</div>
<div class="mae-g">
  <div class="mc">
    <span class="mtag td">Định nghĩa</span>
    <h3>Ma Trận n×m</h3>
    <p>Tập hợp n×m số thực, xếp thành n hàng và m cột.</p>
    <div class="fm">\\[ A_{n\\times m}=(a_{i,j})\\in\\mathbb{R}^{n\\times m} \\]</div>
    <ul>
      <li><strong>Ma trận vuông:</strong> n = m</li>
      <li><strong>Ma trận đơn vị I<sub>n</sub>:</strong> đường chéo = 1, còn lại = 0</li>
      <li><strong>Ma trận tam giác trên:</strong> a<sub>ij</sub>=0 khi i &gt; j</li>
      <li><strong>Ma trận đối xứng:</strong> A<sup>T</sup> = A</li>
    </ul>
  </div>
  <div class="mc">
    <span class="mtag tf">Công thức</span>
    <h3>Nhân Ma Trận</h3>
    <p>A<sub>m×n</sub> · B<sub>n×p</sub> = C<sub>m×p</sub>. Số cột A phải bằng số hàng B.</p>
    <div class="fm">\\[(AB)_{ij}=\\sum_{k=1}^{n}a_{ik}b_{kj}\\]</div>
    <p style="margin-top:6px">Lưu ý: <strong>AB ≠ BA</strong> — không giao hoán.</p>
    <div class="ex-b"><p>Ví dụ nhanh: A(2×3)·B(3×4) = C(2×4). Mỗi ô c<sub>ij</sub> = tổng tích hàng i của A với cột j của B.</p></div>
  </div>
  <div class="mc">
    <span class="mtag tf">Công thức</span>
    <h3>Chuyển Vị & Tích Vô Hướng</h3>
    <div class="fm">\\[(A^T)_{ij}=a_{ji}\\]</div>
    <ul>
      <li>(AB)<sup>T</sup> = B<sup>T</sup>A<sup>T</sup></li>
      <li>(A<sup>T</sup>)<sup>T</sup> = A</li>
      <li>(A+B)<sup>T</sup> = A<sup>T</sup>+B<sup>T</sup></li>
    </ul>
  </div>
  <div class="mc">
    <span class="mtag tt">Định lý</span>
    <h3>Ma Trận Nghịch Đảo A⁻¹</h3>
    <div class="fm">\\[AA^{-1}=I_n,\\quad A^{-1}=\\frac{1}{\\det A}\\,\\text{adj}(A)\\]</div>
    <p>Cách tìm: lập [A | I], biến đổi hàng đến [I | A⁻¹].</p>
    <ul style="margin-top:6px">
      <li>(AB)⁻¹ = B⁻¹A⁻¹</li>
      <li>(A<sup>T</sup>)⁻¹ = (A⁻¹)<sup>T</sup></li>
      <li>det(A) ≠ 0 ⟺ A khả nghịch</li>
    </ul>
  </div>
  <div class="mc">
    <span class="mtag tr">Quy tắc</span>
    <h3>Biến Đổi Hàng Sơ Cấp (BĐHSC)</h3>
    <ul>
      <li><strong>R<sub>i</sub> ↔ R<sub>j</sub></strong> : Đổi chỗ 2 hàng</li>
      <li><strong>αR<sub>i</sub></strong> : Nhân hàng với α ≠ 0</li>
      <li><strong>R<sub>i</sub> + βR<sub>j</sub></strong> : Cộng bội hàng j vào hàng i</li>
    </ul>
    <p style="margin-top:8px"><strong>rank(A)</strong> = số hàng khác 0 sau khi đưa về dạng bậc thang (REF).</p>
    <div class="ex-b"><p>rank(A) = rank(A<sup>T</sup>). Nếu A là n×n thì A khả nghịch ⟺ rank(A) = n.</p></div>
  </div>
  <div class="mc">
    <span class="mtag td">Định nghĩa</span>
    <h3>Phép Biến Đổi Tuyến Tính</h3>
    <p>T: ℝⁿ → ℝᵐ tuyến tính khi T(u+v)=T(u)+T(v) và T(ku)=kT(u).</p>
    <div class="fm">\\[T(\\mathbf{x})=A\\mathbf{x}\\]</div>
    <p>Mọi phép biến đổi tuyến tính đều biểu diễn được qua nhân ma trận.</p>
  </div>
</div>`,

ma2:`
<div class="ch-hd">
  <div class="ch-num">Algebra — Chương 2</div>
  <h2>Hệ Phương Trình Tuyến Tính</h2>
  <p>Tìm giao điểm của nhiều siêu phẳng trong không gian n chiều.</p>
</div>
<div class="obs-b">Mỗi phương trình là một ràng buộc. Nghiệm là điểm thỏa đồng thời tất cả ràng buộc. Đôi khi không tồn tại nghiệm nào, đôi khi có vô số.</div>
<div class="mae-g">
  <div class="mc">
    <span class="mtag td">Dạng chuẩn</span>
    <h3>Hệ m PT n Ẩn</h3>
    <div class="fm">\\[A\\mathbf{x}=\\mathbf{b}\\quad\\Leftrightarrow\\quad [A\\,|\\,\\mathbf{b}]\\text{ (ma trận mở rộng)}\\]</div>
    <p>Trong đó A là ma trận hệ số (m×n), b là vế phải (m×1).</p>
  </div>
  <div class="mc">
    <span class="mtag tt">Định lý quan trọng</span>
    <h3>Kronecker-Capelli</h3>
    <p>Hệ Ax=b có nghiệm ⟺ rank(A) = rank([A|b]).</p>
    <div class="fm">\\[\\text{rank}(A)=r,\\quad n=\\text{số ẩn}\\]</div>
    <table class="mtbl" style="margin-top:8px">
      <tr><th>Điều kiện</th><th>Kết quả</th></tr>
      <tr><td>rank(A) &lt; rank([A|b])</td><td>Vô nghiệm</td></tr>
      <tr><td>rank(A) = rank([A|b]) = n</td><td>Nghiệm duy nhất</td></tr>
      <tr><td>rank(A) = rank([A|b]) &lt; n</td><td>Vô số nghiệm (n−r ẩn tự do)</td></tr>
    </table>
  </div>
  <div class="mc">
    <span class="mtag tr">Quy trình</span>
    <h3>Phương Pháp Gauss-Jordan</h3>
    <ol>
      <li>Lập ma trận mở rộng [A | b]</li>
      <li>BĐHSC đưa về dạng bậc thang rút gọn (RREF)</li>
      <li>Đọc nghiệm hoặc đặt ẩn tự do, biểu diễn nghiệm tổng quát</li>
    </ol>
    <div class="ex-b">
      <p>Nghiệm tổng quát = <strong>một nghiệm riêng</strong> + <strong>tổ hợp tuyến tính các nghiệm cơ bản</strong> của hệ thuần nhất Ax=0.</p>
    </div>
  </div>
  <div class="mc">
    <span class="mtag td">Đặc biệt</span>
    <h3>Hệ Thuần Nhất Ax = 0</h3>
    <p>Luôn có nghiệm tầm thường <strong>x = 0</strong>. Có nghiệm khác 0 khi rank(A) &lt; n.</p>
    <ul style="margin-top:6px">
      <li>Số nghiệm cơ bản = n − rank(A)</li>
      <li>Không gian null = tập nghiệm của Ax=0</li>
    </ul>
  </div>
</div>`,

ma3:`
<div class="ch-hd">
  <div class="ch-num">Algebra — Chương 3</div>
  <h2>Định Thức & Trị Riêng</h2>
  <p>Định thức đo độ "co giãn thể tích" của phép biến đổi. det=0 nghĩa là ma trận "ép phẳng" không gian.</p>
</div>
<div class="mae-g">
  <div class="mc">
    <span class="mtag tf">Công thức</span>
    <h3>Định Thức 2×2 và 3×3</h3>
    <div class="fm">\\[\\det\\begin{pmatrix}a&b\\\\c&d\\end{pmatrix}=ad-bc\\]</div>
    <p style="margin-top:6px">Ma trận tam giác: det = <strong>tích các phần tử trên đường chéo chính</strong>.</p>
    <div class="fm">\\[\\det(A_{3\\times3})=\\sum_{j=1}^{3}a_{1j}(-1)^{1+j}\\det A(1|j)\\]</div>
  </div>
  <div class="mc">
    <span class="mtag tt">Tính chất</span>
    <h3>Tính Chất Định Thức</h3>
    <ul>
      <li>det(A<sup>T</sup>) = det(A)</li>
      <li>Đổi 2 hàng: det đổi dấu</li>
      <li>Hàng toàn 0 hoặc 2 hàng tỉ lệ: det = 0</li>
      <li>Cộng bội hàng khác: det không đổi</li>
      <li>det(kA) = k<sup>n</sup>·det(A)</li>
      <li>det(AB) = det(A)·det(B)</li>
      <li>det(A⁻¹) = 1/det(A)</li>
      <li>|adj(A)| = |A|<sup>n−1</sup></li>
    </ul>
  </div>
  <div class="mc">
    <span class="mtag td">Định nghĩa</span>
    <h3>Trị Riêng & Véctơ Riêng</h3>
    <p>λ là <strong>trị riêng</strong>, x≠0 là <strong>véctơ riêng</strong> khi Ax = λx.</p>
    <div class="fm">\\[\\det(A-\\lambda I)=0\\quad\\text{(phương trình đặc trưng)}\\]</div>
    <p style="margin-top:6px">Với mỗi λ tìm được, giải (A−λI)x=0 để tìm véctơ riêng.</p>
    <div class="ex-b"><p>Tổng trị riêng = trace(A). Tích trị riêng = det(A).</p></div>
  </div>
  <div class="mc">
    <span class="mtag tt">Định lý</span>
    <h3>Chéo Hóa Ma Trận</h3>
    <p>A chéo hóa được khi có n véctơ riêng độc lập tuyến tính.</p>
    <div class="fm">\\[A=PDP^{-1}\\]</div>
    <ul>
      <li><strong>D</strong>: ma trận đường chéo chứa các λ</li>
      <li><strong>P</strong>: các cột là véctơ riêng tương ứng</li>
      <li>n trị riêng phân biệt → luôn chéo hóa được</li>
      <li>Ứng dụng: A<sup>n</sup> = PD<sup>n</sup>P⁻¹</li>
    </ul>
  </div>
  <div class="mc">
    <span class="mtag tf">Công thức</span>
    <h3>Quy Tắc Cramer</h3>
    <p>Hệ Ax=b với det(A)≠0:</p>
    <div class="fm">\\[x_i=\\frac{\\det A_i}{\\det A}\\]</div>
    <p>A<sub>i</sub>: thay cột thứ i của A bởi vectơ b.</p>
  </div>
  <div class="mc">
    <span class="mtag tf">Công thức</span>
    <h3>Cofactor & Ma Trận Bù Hợp</h3>
    <div class="fm">\\[c_{ij}=(-1)^{i+j}\\det A(i|j)\\]</div>
    <div class="fm">\\[A^{-1}=\\frac{1}{\\det A}\\,\\text{adj}(A),\\quad \\text{adj}(A)=C^T\\]</div>
  </div>
</div>`,

ma4:`
<div class="ch-hd">
  <div class="ch-num">Algebra — Chương 4</div>
  <h2>Không Gian Vector ℝⁿ</h2>
  <p>Cơ sở, chiều, tích vô hướng, trực chuẩn hóa.</p>
</div>
<div class="obs-b">Không gian con giống sàn phẳng bên trong căn phòng 3D. Cơ sở là bộ hướng tối thiểu để đến mọi điểm trong sàn đó.</div>
<div class="mae-g">
  <div class="mc">
    <span class="mtag td">Định nghĩa</span>
    <h3>Độc Lập Tuyến Tính</h3>
    <div class="fm">\\[c_1v_1+\\cdots+c_kv_k=\\mathbf{0}\\Rightarrow c_1=\\cdots=c_k=0\\]</div>
    <p style="margin-top:6px">Kiểm tra: lập ma trận từ các vectơ làm cột, tính rank. Nếu rank = k thì độc lập tuyến tính.</p>
  </div>
  <div class="mc">
    <span class="mtag td">Định nghĩa</span>
    <h3>Cơ Sở & Chiều</h3>
    <ul>
      <li><strong>Cơ sở</strong> = tập độc lập tuyến tính và tạo ra W</li>
      <li><strong>dim(W)</strong> = số véctơ trong cơ sở bất kỳ</li>
      <li>dim(ℝⁿ) = n</li>
    </ul>
    <div class="fm">\\[\\text{rank}(A)+\\text{nullity}(A)=n\\]</div>
    <div class="ex-b"><p>Row(A), Col(A) đều có chiều = rank(A). Null(A) có chiều = nullity(A).</p></div>
  </div>
  <div class="mc">
    <span class="mtag tf">Công thức</span>
    <h3>Tích Vô Hướng & Chuẩn</h3>
    <div class="fm">\\[u\\cdot v=\\sum_{i=1}^n u_iv_i=\\|u\\|\\|v\\|\\cos\\theta\\]</div>
    <div class="fm">\\[\\|v\\|=\\sqrt{v_1^2+\\cdots+v_n^2},\\quad d(u,v)=\\|u-v\\|\\]</div>
    <p style="margin-top:6px">u ⊥ v khi u·v = 0.</p>
  </div>
  <div class="mc">
    <span class="mtag tt">Định lý</span>
    <h3>Gram-Schmidt (Trực Chuẩn Hóa)</h3>
    <p>Từ cơ sở {v₁,...,vₖ} tạo cơ sở trực chuẩn {e₁,...,eₖ}:</p>
    <div class="fm">\\[u_k=v_k-\\sum_{j=1}^{k-1}\\frac{v_k\\cdot u_j}{\\|u_j\\|^2}u_j,\\quad e_k=\\frac{u_k}{\\|u_k\\|}\\]</div>
    <p style="margin-top:6px">Kết quả: các e<sub>k</sub> vuông góc nhau và đều có độ dài 1.</p>
  </div>
  <div class="mc">
    <span class="mtag td">Định nghĩa</span>
    <h3>Đường Thẳng & Mặt Phẳng trong ℝ³</h3>
    <p><strong>Đường thẳng</strong> qua P₀, hướng d:</p>
    <div class="fm">\\[\\mathbf{r}=\\mathbf{p_0}+t\\mathbf{d},\\quad t\\in\\mathbb{R}\\]</div>
    <p><strong>Mặt phẳng</strong> qua P₀, pháp tuyến n:</p>
    <div class="fm">\\[\\mathbf{n}\\cdot(\\mathbf{r}-\\mathbf{p_0})=0\\;\\Leftrightarrow\\; ax+by+cz=d\\]</div>
  </div>
</div>`,

mc1:`
<div class="ch-hd">
  <div class="ch-num">Calculus — Chương 1</div>
  <h2>Hàm Số & Đồ Thị</h2>
  <p>Quy tắc ánh xạ từ tập số này sang tập số khác.</p>
</div>
<div class="mae-g">
  <div class="mc">
    <span class="mtag tf">Công thức</span>
    <h3>Tập Xác Định Các Hàm Cơ Bản</h3>
    <table class="mtbl">
      <tr><th>Hàm f(x)</th><th>Điều kiện</th></tr>
      <tr><td>√g(x)</td><td>g(x) ≥ 0</td></tr>
      <tr><td>∜g(x) (n lẻ)</td><td>ℝ (mọi x)</td></tr>
      <tr><td>ln g(x)</td><td>g(x) &gt; 0</td></tr>
      <tr><td>1/g(x)</td><td>g(x) ≠ 0</td></tr>
      <tr><td>arcsin g(x)</td><td>−1 ≤ g(x) ≤ 1</td></tr>
      <tr><td>arccos g(x)</td><td>−1 ≤ g(x) ≤ 1</td></tr>
    </table>
    <div class="ex-b"><p>Khi nhiều điều kiện cùng lúc: lấy <strong>giao</strong> của tất cả tập xác định.</p></div>
  </div>
  <div class="mc">
    <span class="mtag td">Định nghĩa</span>
    <h3>Phân Loại Hàm Số</h3>
    <ul>
      <li><strong>Chẵn:</strong> f(−x) = f(x) — đối xứng qua trục Oy</li>
      <li><strong>Lẻ:</strong> f(−x) = −f(x) — đối xứng qua gốc O</li>
      <li><strong>Tuần hoàn:</strong> f(x+T) = f(x)</li>
      <li><strong>Tăng:</strong> x₁ &lt; x₂ ⇒ f(x₁) &lt; f(x₂)</li>
    </ul>
    <div class="ex-b"><p>f(x) = x²+cos(x) → f(−x) = (−x)²+cos(−x) = x²+cos(x) = f(x) → <strong>hàm chẵn</strong></p></div>
  </div>
  <div class="mc">
    <span class="mtag tf">Công thức</span>
    <h3>Hàm Hợp & Hàm Nghịch</h3>
    <div class="fm">\\[(f\\circ g)(x)=f(g(x))\\]</div>
    <div class="fm">\\[f(f^{-1}(x))=x,\\quad f^{-1}(f(x))=x\\]</div>
    <p style="margin-top:6px">Đồ thị f⁻¹ là ảnh phản chiếu của f qua đường y = x.</p>
  </div>
  <div class="mc">
    <span class="mtag tr">Quy tắc</span>
    <h3>Biến Đổi Đồ Thị</h3>
    <ul>
      <li>y = f(x) + c : dịch <strong>lên</strong> c đơn vị</li>
      <li>y = f(x+c) : dịch <strong>trái</strong> c đơn vị</li>
      <li>y = −f(x) : lật qua <strong>trục Ox</strong></li>
      <li>y = f(−x) : lật qua <strong>trục Oy</strong></li>
      <li>y = cf(x) : giãn <strong>dọc</strong> hệ số c</li>
      <li>y = f(cx) : nén <strong>ngang</strong> hệ số c</li>
      <li>y = |f(x)| : lật phần âm lên trên</li>
    </ul>
  </div>
</div>`,

mc2:`
<div class="ch-hd">
  <div class="ch-num">Calculus — Chương 2</div>
  <h2>Giới Hạn & Liên Tục</h2>
  <p>Giá trị hàm tiến đến khi đối số tiếp cận một điểm — không phải giá trị tại điểm đó.</p>
</div>
<div class="mae-g">
  <div class="mc">
    <span class="mtag tf">Công thức — phải thuộc lòng</span>
    <h3>Giới Hạn Đặc Biệt Quan Trọng</h3>
    <div class="fm">\\[\\lim_{x\\to0}\\frac{\\sin x}{x}=1,\\qquad\\lim_{x\\to0}\\frac{1-\\cos x}{x^2}=\\frac{1}{2}\\]</div>
    <div class="fm">\\[\\lim_{x\\to0}\\frac{\\tan x}{x}=1,\\qquad\\lim_{x\\to0}\\frac{e^x-1}{x}=1\\]</div>
    <div class="fm">\\[\\lim_{x\\to0}\\frac{\\ln(1+x)}{x}=1,\\qquad\\lim_{x\\to0}\\frac{(1+x)^\\alpha-1}{x}=\\alpha\\]</div>
    <div class="fm">\\[\\lim_{x\\to\\infty}\\!\\left(1+\\frac{1}{x}\\right)^{\\!x}=e\\]</div>
  </div>
  <div class="mc">
    <span class="mtag tt">Định lý</span>
    <h3>Quy Tắc L'Hôpital</h3>
    <p>Dùng khi gặp dạng vô định <strong>0/0</strong> hoặc <strong>∞/∞</strong>:</p>
    <div class="fm">\\[\\lim_{x\\to a}\\frac{f(x)}{g(x)}=\\lim_{x\\to a}\\frac{f'(x)}{g'(x)}\\]</div>
    <div class="ex-b">
      <p>Dạng vô định khác: đưa về 0/0 hoặc ∞/∞ rồi áp dụng.<br>
      0·∞ → 0/(1/∞).<br>
      ∞−∞ → thông mẫu số.<br>
      1<sup>∞</sup>, 0⁰, ∞⁰ → lấy ln rồi áp dụng.</p>
    </div>
  </div>
  <div class="mc">
    <span class="mtag td">Định nghĩa</span>
    <h3>Tiệm Cận</h3>
    <ul>
      <li><strong>Đứng x=a:</strong> lim<sub>x→a</sub> f = ±∞</li>
      <li><strong>Ngang y=L:</strong> lim<sub>x→±∞</sub> f = L</li>
      <li><strong>Xiên y=kx+b:</strong><br>
        k = lim<sub>x→∞</sub> f(x)/x<br>
        b = lim<sub>x→∞</sub> (f(x)−kx)
      </li>
    </ul>
  </div>
  <div class="mc">
    <span class="mtag tt">Định lý</span>
    <h3>Liên Tục & Định Lý IVT</h3>
    <p>f liên tục tại x=a khi:</p>
    <div class="fm">\\[\\lim_{x\\to a}f(x)=f(a)\\]</div>
    <p style="margin-top:6px"><strong>IVT:</strong> f liên tục trên [a,b], f(a)·f(b) &lt; 0 → ∃c∈(a,b): f(c)=0.</p>
    <div class="ex-b"><p>Dùng IVT để chứng minh phương trình có nghiệm trong khoảng cho trước.</p></div>
  </div>
</div>`,

mc3:`
<div class="ch-hd">
  <div class="ch-num">Calculus — Chương 3</div>
  <h2>Đạo Hàm (Derivative)</h2>
  <p>Tốc độ thay đổi tức thời — độ dốc của tiếp tuyến tại một điểm.</p>
</div>
<div class="mae-g">
  <div class="mc">
    <span class="mtag tf">Công thức</span>
    <h3>Bảng Đạo Hàm Cơ Bản</h3>
    <table class="mtbl">
      <tr><th>f(x)</th><th>f'(x)</th></tr>
      <tr><td>x<sup>n</sup></td><td>nx<sup>n−1</sup></td></tr>
      <tr><td>e<sup>x</sup></td><td>e<sup>x</sup></td></tr>
      <tr><td>a<sup>x</sup></td><td>a<sup>x</sup> ln a</td></tr>
      <tr><td>ln x</td><td>1/x</td></tr>
      <tr><td>log<sub>a</sub> x</td><td>1/(x ln a)</td></tr>
      <tr><td>sin x</td><td>cos x</td></tr>
      <tr><td>cos x</td><td>−sin x</td></tr>
      <tr><td>tan x</td><td>1/cos²x = sec²x</td></tr>
      <tr><td>cot x</td><td>−1/sin²x</td></tr>
      <tr><td>arcsin x</td><td>1/√(1−x²)</td></tr>
      <tr><td>arccos x</td><td>−1/√(1−x²)</td></tr>
      <tr><td>arctan x</td><td>1/(1+x²)</td></tr>
    </table>
  </div>
  <div class="mc">
    <span class="mtag tr">Quy tắc</span>
    <h3>Quy Tắc Vi Phân</h3>
    <div class="fm">\\[(u\\pm v)'=u'\\pm v'\\]</div>
    <div class="fm">\\[(uv)'=u'v+uv'\\]</div>
    <div class="fm">\\[\\left(\\frac{u}{v}\\right)'=\\frac{u'v-uv'}{v^2}\\]</div>
    <p style="margin-top:8px;font-weight:600;color:var(--cyan)">Quy Tắc Dây Chuyền (Chain Rule):</p>
    <div class="fm">\\[[f(g(x))]'=f'(g(x))\\cdot g'(x)\\]</div>
    <div class="ex-b"><p>(sin(3x²))' = cos(3x²) · 6x = <strong>6x·cos(3x²)</strong></p></div>
  </div>
  <div class="mc">
    <span class="mtag tf">Công thức</span>
    <h3>Đạo Hàm Cấp Cao</h3>
    <div class="fm">\\[(\\sin x)^{(n)}=\\sin\\!\\left(x+\\frac{n\\pi}{2}\\right)\\]</div>
    <div class="fm">\\[(\\cos x)^{(n)}=\\cos\\!\\left(x+\\frac{n\\pi}{2}\\right)\\]</div>
    <div class="fm">\\[(e^x)^{(n)}=e^x,\\quad(\\ln x)^{(n)}=\\frac{(-1)^{n-1}(n-1)!}{x^n}\\]</div>
    <div class="ex-b"><p>f⁽¹⁰⁰⁾(x) với f(x)=sin x:<br>sin(x + 100π/2) = sin(x + 50π) = <strong>sin x</strong></p></div>
  </div>
  <div class="mc">
    <span class="mtag td">Kỹ thuật</span>
    <h3>Đạo Hàm Hàm Ẩn & Logarithm</h3>
    <p><strong>Hàm ẩn:</strong> đạo hàm 2 vế theo x, dùng chain rule cho y(x), rồi giải y'.</p>
    <p style="margin-top:8px"><strong>Logarithm (y = uᵛ):</strong> lấy ln hai vế rồi đạo hàm.</p>
    <div class="fm">\\[\\ln y = v\\ln u \\Rightarrow \\frac{y'}{y}=v'\\ln u+v\\frac{u'}{u}\\]</div>
    <div class="ex-b"><p>y = x<sup>sin x</sup>: ln y = sin x · ln x → y'/y = cos x · ln x + sin x/x</p></div>
  </div>
</div>`,

mc4:`
<div class="ch-hd">
  <div class="ch-num">Calculus — Chương 4</div>
  <h2>Ứng Dụng Đạo Hàm</h2>
  <p>Phân tích hình dạng đồ thị, cực trị, tối ưu hóa.</p>
</div>
<div class="mae-g">
  <div class="mc">
    <span class="mtag tt">Định lý</span>
    <h3>Định Lý Rolle & Giá Trị Trung Bình (MVT)</h3>
    <p><strong>Rolle:</strong> f liên tục [a,b], khả vi (a,b), f(a)=f(b) → ∃c: f'(c)=0.</p>
    <div class="fm">\\[\\exists\\,c\\in(a,b):\\;f'(c)=\\frac{f(b)-f(a)}{b-a}\\]</div>
    <div class="ex-b"><p>f(0)=−3, f'(x)≤5 với 0≤x≤2 → f(2) ≤ −3 + 5·2 = <strong>7</strong></p></div>
  </div>
  <div class="mc">
    <span class="mtag tr">Quy trình</span>
    <h3>Tìm Cực Trị</h3>
    <ol>
      <li>Tìm điểm tới hạn: f'(c)=0 hoặc f' không tồn tại</li>
      <li><strong>Dấu f':</strong> + → − : cực đại cục bộ; − → + : cực tiểu cục bộ</li>
      <li><strong>Dùng f'':</strong> f''(c)&lt;0 → cực đại; f''(c)&gt;0 → cực tiểu</li>
      <li>Cực trị tuyệt đối trên [a,b]: so sánh f tại điểm tới hạn và 2 đầu</li>
    </ol>
  </div>
  <div class="mc">
    <span class="mtag td">Định nghĩa</span>
    <h3>Lõm/Lồi & Điểm Uốn</h3>
    <ul>
      <li>f'' &gt; 0 trên (a,b): <strong>lõm lên</strong> (concave up) ∪</li>
      <li>f'' &lt; 0 trên (a,b): <strong>lồi xuống</strong> (concave down) ∩</li>
      <li><strong>Điểm uốn:</strong> f'' đổi dấu tại đó</li>
    </ul>
  </div>
  <div class="mc">
    <span class="mtag te">Ứng dụng</span>
    <h3>Bài Toán Tối Ưu Hóa</h3>
    <ol>
      <li>Đặt ẩn, viết hàm mục tiêu f(x)</li>
      <li>Tìm điều kiện ràng buộc</li>
      <li>Dùng ràng buộc để rút gọn về hàm 1 biến</li>
      <li>Tìm cực trị của f trên miền xác định</li>
    </ol>
    <div class="ex-b"><p>Rào hình chữ nhật 500m, một cạnh kề tường: x + 2y = 500, tối đa S = xy → x=250, y=125, S<sub>max</sub>=31250 m²</p></div>
  </div>
</div>`,

mc5:`
<div class="ch-hd">
  <div class="ch-num">Calculus — Chương 5 & 6</div>
  <h2>Tích Phân & Kỹ Thuật Tính</h2>
  <p>Diện tích, tổng tích lũy — nghịch đảo của đạo hàm.</p>
</div>
<div class="obs-b">Tích phân xác định như cộng dồn vô số lát mỏng: đổ nước vào bình theo từng lớp vô cùng mỏng, tổng thể tích chính là tích phân của tiết diện theo chiều cao.</div>
<div class="mae-g">
  <div class="mc">
    <span class="mtag tt">Định lý cơ bản</span>
    <h3>Định Lý Cơ Bản Giải Tích (FTC)</h3>
    <div class="fm">\\[\\int_a^b f(x)\\,dx=F(b)-F(a)\\quad(F'=f)\\]</div>
    <div class="fm">\\[\\frac{d}{dx}\\int_a^x f(t)\\,dt=f(x)\\]</div>
    <p style="margin-top:6px">Leibniz mở rộng:</p>
    <div class="fm">\\[\\left(\\int_{u(x)}^{v(x)}f\\,dt\\right)'=f(v)\\cdot v'-f(u)\\cdot u'\\]</div>
  </div>
  <div class="mc">
    <span class="mtag tr">Kỹ thuật 1</span>
    <h3>Đặt Biến Phụ (Substitution)</h3>
    <div class="fm">\\[\\int f(g(x))g'(x)\\,dx=\\int f(u)\\,du\\]</div>
    <p style="margin-top:6px">Tích phân xác định: <strong>nhớ đổi cận</strong> u(a) và u(b).</p>
    <div class="ex-b"><p>∫x·cos(x²)dx: đặt u=x², du=2x dx → ½∫cos u du = <strong>½sin(x²)+C</strong></p></div>
  </div>
  <div class="mc">
    <span class="mtag tr">Kỹ thuật 2</span>
    <h3>Tích Phân Từng Phần (IBP)</h3>
    <div class="fm">\\[\\int u\\,dv=uv-\\int v\\,du\\]</div>
    <p style="margin-top:6px">Chọn u theo thứ tự <strong>LIATE</strong>:</p>
    <ul>
      <li><strong>L</strong>og: ln x, log x</li>
      <li><strong>I</strong>nverse trig: arcsin, arctan...</li>
      <li><strong>A</strong>lgebraic: x, x², x³...</li>
      <li><strong>T</strong>rig: sin x, cos x...</li>
      <li><strong>E</strong>xponential: eˣ, aˣ...</li>
    </ul>
    <div class="ex-b"><p>∫x·eˣdx: u=x, dv=eˣdx → <strong>xeˣ−eˣ+C</strong></p></div>
  </div>
  <div class="mc">
    <span class="mtag td">Kỹ thuật 3</span>
    <h3>Tích Phân Suy Rộng</h3>
    <div class="fm">\\[\\int_a^{\\infty}f\\,dx=\\lim_{t\\to\\infty}\\int_a^t f\\,dx\\]</div>
    <div class="fm">\\[\\int_a^b f\\,dx=\\lim_{t\\to a^+}\\int_t^b f\\,dx\\quad(f\\text{ bất chặn tại }a)\\]</div>
    <div class="ex-b"><p>∫₁^∞ 1/xᵖ dx: <strong>hội tụ khi p &gt; 1</strong>, giá trị = 1/(p−1).</p></div>
  </div>
</div>
<div class="msep">* * *</div>
<div class="mfull">
  <span class="mtag tf">Bảng Tổng Hợp</span>
  <h3>Bảng Tích Phân Bất Định Đầy Đủ</h3>
  <table class="mtbl">
    <tr><th>f(x)</th><th>∫f(x)dx + C</th></tr>
    <tr><td>xⁿ (n≠−1)</td><td>xⁿ⁺¹/(n+1)</td></tr>
    <tr><td>1/x</td><td>ln|x|</td></tr>
    <tr><td>eˣ</td><td>eˣ</td></tr>
    <tr><td>aˣ</td><td>aˣ/(ln a)</td></tr>
    <tr><td>sin x</td><td>−cos x</td></tr>
    <tr><td>cos x</td><td>sin x</td></tr>
    <tr><td>tan x</td><td>−ln|cos x|</td></tr>
    <tr><td>cot x</td><td>ln|sin x|</td></tr>
    <tr><td>1/cos²x</td><td>tan x</td></tr>
    <tr><td>1/sin²x</td><td>−cot x</td></tr>
    <tr><td>1/√(1−x²)</td><td>arcsin x</td></tr>
    <tr><td>−1/√(1−x²)</td><td>arccos x</td></tr>
    <tr><td>1/(1+x²)</td><td>arctan x</td></tr>
    <tr><td>1/(x²−a²)</td><td>(1/2a)·ln|(x−a)/(x+a)|</td></tr>
    <tr><td>1/(x²+a²)</td><td>(1/a)·arctan(x/a)</td></tr>
    <tr><td>1/√(x²±a²)</td><td>ln|x+√(x²±a²)|</td></tr>
    <tr><td>1/√(a²−x²)</td><td>arcsin(x/a)</td></tr>
    <tr><td>eᵃˣ·sin bx</td><td>eᵃˣ(a·sin bx − b·cos bx)/(a²+b²)</td></tr>
    <tr><td>eᵃˣ·cos bx</td><td>eᵃˣ(a·cos bx + b·sin bx)/(a²+b²)</td></tr>
  </table>
</div>`
};
