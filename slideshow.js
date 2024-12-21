const images = ['images/image1.jpg', 'images/image2.jpg', 'images/image3.jpg'];
let currentImageIndex = 0;

function changeImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    document.getElementById('slideshow').src = images[currentImageIndex];
}
