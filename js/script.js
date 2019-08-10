(function(){
    const header = document.querySelector('.main-header');
    let images = ['url(img/Img-header1.jpg)', 'url(img/Img-header2.jpg)', 'url(img/Img-header3.jpg)', 'url(img/Img-header4.jpg)'];
    const currentImage = 0;
    const buttonWrap = header.querySelector('.button-wrap');  
    for(let i = 0; i < images.length; i++) {
        buttonWrap.innerHTML += '<button type="button" class="slider-button" aria-label="slider button"></button>';
    }
    let sliderButtons = header.querySelectorAll('.slider-button');
    for(let i = 0; i < sliderButtons.length; i++) {
        sliderButtons[i].addEventListener('click', function() {
            header.style.backgroundImage = images[i]; 
        });
    };
    header.style.backgroundImage = images[currentImage];
})();
