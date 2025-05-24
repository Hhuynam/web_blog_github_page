// Custom JavaScript
// Thêm hiệu ứng smooth scroll cho các liên kết trong trang

document.addEventListener("DOMContentLoaded", function () {
  // Lấy tất cả các thẻ <a> có href bắt đầu bằng #
  var links = document.querySelectorAll('a[href^="#"]');
  
  links.forEach(function(link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      var targetId = this.getAttribute("href");
      var targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});
