const carouselContainer = document.querySelector('.carousel-container');
let currentImageIndex = 0;
const totalImages = carouselContainer.children.length;
let carouselInterval;

function moveCarousel() {
    currentImageIndex++;
    if (currentImageIndex >= totalImages) {
        currentImageIndex = 0;  // 当到达最后一张图片时，返回到第一张
    }
    carouselContainer.style.transform = `translateX(-${currentImageIndex * 33.3333333333333333333}%)`;
}

carouselInterval = setInterval(moveCarousel, 3000); // 每3秒移动一次

// 当鼠标放在轮播上时，暂停轮播
carouselContainer.addEventListener('mouseenter', () => {
    clearInterval(carouselInterval);
});

// 当鼠标移开轮播时，继续轮播
carouselContainer.addEventListener('mouseleave', () => {
    carouselInterval = setInterval(moveCarousel, 3000);
});
