const banner_Image = document.getElementsByClassName("banner_Image");
const banner_SlideButton = document.getElementsByClassName(
  "banner_SlideButton"
);
let index = 0;

var carousel = setInterval(function() {
  banner_SlideButton[index].style.backgroundColor = "white";
  banner_Image[index++].style.opacity = 0;
  index = index % 3;
  banner_Image[index].style.opacity = 1;
  banner_SlideButton[index].style.backgroundColor = "black";
}, 2000);