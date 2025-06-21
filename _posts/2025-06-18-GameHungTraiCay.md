---
layout: post
title: "Game hứng trái cây"
date: 2020-06-10
categories: projects
permalink: /game-hung-trai-cay/
---

# Game: Hứng Trái Cây bằng Cử Chỉ Tay (Hand Gesture)

Dự án này là một trò chơi trình duyệt nhẹ nhàng, vui nhộn nhưng tích hợp công nghệ xử lý hình ảnh thời gian thực – cụ thể là sử dụng **MediaPipe của Google** để nhận diện cử chỉ tay từ webcam. Người chơi có thể điều khiển giỏ hứng trái cây bằng bàn phím hoặc chỉ cần… đưa tay ra trước màn hình!

---

## Mục tiêu dự án

Ban đầu mình xây dựng trò chơi này như một cách để:
- Ôn luyện kỹ năng lập trình với **HTML5 Canvas** và **JavaScript**.
- Tìm hiểu và ứng dụng công nghệ **nhận diện hình ảnh thời gian thực** vào một trò chơi tương tác.
- Tạo ra một trải nghiệm thú vị cho người chơi: kết hợp giữa hoạt họa và điều khiển không chạm.

---

## Công nghệ & Thư viện sử dụng

- **HTML5 Canvas**: xử lý phần hiển thị đồ họa và hoạt ảnh trò chơi.
- **JavaScript thuần (Vanilla JS)**: cho phần xử lý game loop, collision detection, tính điểm, v.v.
- **MediaPipe Hands**: thư viện machine learning của Google để nhận diện bàn tay, xác định vị trí và hướng di chuyển tay từ webcam.

📷 *Minh họa: Khung giao diện khi khởi động game*  
![placeholder for intro image](assets/image/intro-placeholder.png)

---

## Cách chơi

Người chơi có thể chọn **1 trong 2 chế độ**:

- **Chế độ phím bấm**: Dùng mũi tên trái/phải để di chuyển giỏ hứng trái cây rơi từ trên xuống.
- **Chế độ Hand Gesture**: Dùng webcam. Khi người chơi giơ tay, hệ thống sẽ xác định lòng bàn tay và chuyển động ngang để điều khiển giỏ.

📷 *Minh họa: Nhận diện lòng bàn tay bằng MediaPipe*  
![placeholder for hand tracking](assets/image/hand-placeholder.png)

---

## Tính năng chính

- **Tương thích trình duyệt**: Hoạt động tốt trên các trình duyệt hiện đại (Chrome, Edge, Firefox).
- **Responsive**: Giao diện tự điều chỉnh cho thiết bị máy tính hoặc tablet.
- **Điều khiển không chạm**: Một cách chơi thú vị giúp học sinh hoặc người dùng mới làm quen với xử lý AI trực quan.
- **Tự động phát hiện khung hình & cử chỉ tay** – không cần phần cứng đặc biệt ngoài webcam.

📷 *Minh họa: Giỏ đang hứng trái cây và điểm số tăng lên*  
![placeholder for gameplay](assets/image/gameplay-placeholder.png)

---

## Hướng dẫn sử dụng

1. Truy cập đường link hoặc mở file `index.html` trong trình duyệt.
2. Bật webcam nếu muốn chơi bằng cử chỉ tay.
3. Chọn chế độ chơi ở màn hình chính.
4. Bắt đầu hứng trái cây và tránh các vật cản.

📷 *Minh họa: Giao diện menu chọn chế độ chơi*  
![placeholder for mode selection](assets/image/mode-placeholder.png)

---

## Link mã nguồn và demo

- GitHub: [https://github.com/Hhuynam/GameHungTraiCay](https://github.com/Hhuynam/GameHungTraiCay)

Nếu bạn muốn cải tiến hoặc mở rộng game này, có thể thử tích hợp thêm:
- Nhạc nền
- Vật phẩm đặc biệt (ví dụ: quả vàng, tăng tốc, v.v.)
- Tùy chỉnh cấp độ khó (tăng tốc độ rơi theo thời gian)
- url: [https://game-hung-trai-cay.web.app/](https://game-hung-trai-cay.web.app/)
---

## Kết luận

Dự án tuy đơn giản nhưng mang lại nhiều trải nghiệm lập trình thú vị, đồng thời giúp mình hiểu rõ hơn về cách tích hợp AI với giao diện người dùng trực tiếp trên web. Mình hy vọng bạn sẽ thử và thích nó như mình đã thích khi làm ra nó.

Nếu bạn có ý tưởng nâng cấp game hay câu hỏi nào về kỹ thuật, cứ tạo issue hoặc gửi góp ý tại GitHub nhé!
