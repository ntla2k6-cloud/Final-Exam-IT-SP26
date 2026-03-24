# FPTU FE SP26 — Ôn Tập Lengg

Web ôn tập cho kỳ thi cuối kỳ Spring 2026 — FPT University.

## Môn học

| Môn | Câu hỏi | Nội dung |
|-----|---------|----------|
| CSI106 | 530 câu | Nhập môn Công nghệ thông tin |
| CEA201 | 250 câu | Kiến trúc máy tính |
| MAE101 | — | Tài liệu tham khảo Toán (Đại số + Giải tích) |
| PRF192 | — | Lập trình C (đang cập nhật) |

## Cấu trúc file

```
index.html    — giao diện chính
style.css     — toàn bộ CSS / dark theme
db-csi.js     — 530 câu hỏi CSI106 (kèm giải thích)
db-cea.js     — 250 câu hỏi CEA201 (kèm giải thích)
db-mae.js     — tài liệu MAE101
app.js        — logic quiz, render, state
```

## Tính năng

- Quiz mode & Study mode
- Lọc theo kết quả: Tất cả / Chưa làm / Đúng / Sai
- Lọc theo kỳ thi: FA25, FA24, SU25, SU24, SP25
- Tìm kiếm full-text
- Giải thích chi tiết từng câu bằng tiếng Việt
- Hiển thị song ngữ EN / VI cho câu hỏi và đáp án
- Theo dõi tiến độ real-time

## Dùng local

Mở thẳng `index.html` trong trình duyệt — không cần server.

## Deploy lên GitHub Pages

1. Push toàn bộ folder lên GitHub repo
2. Settings → Pages → Source: `main` branch, root `/`
3. Truy cập `https://<username>.github.io/<repo-name>/`

---
*Nguồn đề: FA25/FA24/SU25/SU24/SP25 — Final Exam & Resit Exam*
