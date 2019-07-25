$(function(){

    $(function(){
        let $sliderButton = $('.main-header .slider-button');
        let images = ['url(../img/Img-header1.jpg)', 'url(../img/Img-header2.jpg)', 'url(../img/Img-header3.jpg)', 'url(../img/Img-header4.jpg)'];
        let currentImage = 0;
        $sliderButton.on('click', function() {
            for(let i = 0; i <= images.length; i++)
        });
        $('.main-header').css(
            'background-image': images[currentImage]
        );
    });
});