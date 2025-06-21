---
layout: post
title: "Game Vượt Chướng Ngại Vật – Dự án nhỏ, ý tưởng lớn"
date: 2025-06-25
tags: [game, javascript, html, lập trình, dự án]
---

## Giới thiệu

Đây là một dự án nhỏ mang tính thực hành cao, mình đã thực hiện trong thời gian rảnh để rèn luyện khả năng lập trình với HTML, CSS và JavaScript thuần. Trò chơi có lối chơi đơn giản: người chơi điều khiển nhân vật vượt qua các chướng ngại vật đang lao tới. Tuy đơn giản nhưng khi hoàn thiện lại mang đến cảm giác rất thú vị và có thể mở rộng theo nhiều hướng khác nhau.

## Ý tưởng

Mình muốn tạo một trò chơi mà bất kỳ ai cũng có thể chơi trực tiếp trên trình duyệt, không cần cài đặt, dễ hiểu và có tính giải trí. Do vậy mình bắt đầu với khung cảnh đơn giản: một nhân vật chạy không ngừng, và người chơi nhấn phím để nhảy. Nếu chạm vào vật cản thì trò chơi kết thúc.

## Công nghệ sử dụng

- HTML5 để xây dựng khung giao diện
- CSS để tạo hiệu ứng nền chuyển động và nhân vật
- JavaScript để điều khiển logic game như phát hiện va chạm, tăng điểm, tốc độ…

Tất cả mã nguồn đều thuần túy, không sử dụng thư viện ngoài nên bạn có thể hiểu và tùy biến dễ dàng.

## Tính năng

- Nhân vật có thể nhảy khi nhấn phím cách (space)
- Có hệ thống điểm tăng dần theo thời gian sống sót
- Chướng ngại vật xuất hiện ngẫu nhiên
- Nếu chạm vào vật cản → kết thúc game và hiển thị điểm

## Mã nguồn

Mình đã public toàn bộ mã trên GitHub tại địa chỉ:  
[https://github.com/Hhuynam/GameVuotChuongNgaiVat](https://github.com/Hhuynam/GameVuotChuongNgaiVat)

Bạn có thể tải về, thử chơi, tùy chỉnh hoặc thậm chí góp ý để cùng cải tiến.

## Cách chơi

1. Truy cập trang hoặc mở file `index.html`
2. Nhấn phím cách để nhảy
3. Tránh các vật thể đang lao tới từ bên phải
4. Càng sống lâu, điểm càng cao

Đây là dạng game theo kiểu "infinite runner", tương tự như game khủng long của Google Chrome nhưng được viết theo cách riêng.

## Những bài học mình rút ra

- Quản lý thời gian cập nhật `setInterval` và `requestAnimationFrame`
- Cách phát hiện va chạm hình chữ nhật trong canvas
- Tổ chức các thành phần logic của game một cách tối giản, dễ hiểu
- Tối ưu hiệu suất trong khi vẫn đảm bảo mượt mà
- Thêm hiệu ứng hoạt ảnh đơn giản giúp giao diện sinh động

## Hướng mở rộng

- Thêm nhiều loại chướng ngại vật
- Âm thanh và hiệu ứng khi va chạm
- Bảng xếp hạng điểm cao nhất
- Phiên bản dành cho di động với điều khiển cảm ứng

Mình cũng đang nghĩ tới việc dùng LocalStorage để lưu điểm cao trên trình duyệt hoặc thậm chí dùng Firebase nếu cần lưu dữ liệu real-time.

## Lời kết

Dự án này là ví dụ điển hình cho việc bạn có thể bắt đầu từ những ý tưởng rất đơn giản, rồi dần dần học thêm, cải tiến, mở rộng và hoàn thiện. Quan trọng nhất vẫn là bắt đầu. Nếu bạn cũng đang muốn làm một dự án nho nhỏ để luyện tay nghề thì cứ mạnh dạn triển khai nhé.

Nếu bạn thích game này hoặc có ý tưởng gì hay hơn, hãy để lại bình luận, góp ý hoặc fork repo và tạo phiên bản của riêng bạn. Cảm ơn bạn đã đọc bài viết này.
