const images = document.querySelectorAll('#div_banner img');
const button_icon = document.querySelectorAll('#button_moving_bottom div');
let currentImageIndex = 0; //Thứ tự ảnh
setInterval(slideImages_check, 5000); //Chuyển động sau mỗi 5 giây
let check_running = true;
function slideImages () {
    images[currentImageIndex].classList.remove('active');
    button_icon[currentImageIndex].classList.remove('button_moving_bottom_icon');
    currentImageIndex = (currentImageIndex + 1) % images.length;
    images[currentImageIndex].classList.add('active');
    button_icon[currentImageIndex].classList.add('button_moving_bottom_icon');
}
function slideImages_check() {
    if(check_running) {
        slideImages();
    }
}
function buttonRightClick() {
    slideImages();
    setTimeout(function() {
        check_running = true;
      }, 3000);
    check_running = false;
} 
function buttonLeftClick() {
    if(currentImageIndex == 0) {
        images[currentImageIndex].classList.remove('active');
        button_icon[currentImageIndex].classList.remove('button_moving_bottom_icon');
        currentImageIndex = images.length-1;
        images[currentImageIndex].classList.add('active');
        button_icon[currentImageIndex].classList.add('button_moving_bottom_icon');
    }
    else {
        images[currentImageIndex].classList.remove('active');
        button_icon[currentImageIndex].classList.remove('button_moving_bottom_icon');
        currentImageIndex--;
        images[currentImageIndex].classList.add('active');
        button_icon[currentImageIndex].classList.add('button_moving_bottom_icon');
    }
    setTimeout(function() {
        check_running = true;
      }, 5000);
    check_running = false;
}