var swiper = new Swiper('.Head', {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    slidesPerView: 1,
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: 4000,
    autoplayDisableOnInteraction: false,
    //循环播放
    loop: true
});

var swiper = new Swiper('.Nav', {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    slidesPerView: 1,
    spaceBetween: 20,
    centeredSlides: true,
    // autoplay: 3000,
    autoplayDisableOnInteraction: false,
    //循环播放
    //loop: true
});

var p =  document.getElementById("main4-dd1-p");
var b =  document.getElementById("main4-dd1-b");
var i =  document.getElementById("main4-dd1-i");
var em =  document.getElementById("main4-dd1-em");
var s = 1;
function autoPlay(){
    var timer1 = setInterval(function(){
        b.innerHTML=b.innerHTML-1;
        if(b.innerHTML<=0){
            b.innerHTML=59;
            i.innerHTML= i.innerHTML-s;
            if(i.innerHTML<=0){
                i.innerHTML=59;
                em.innerHTML= em.innerHTML-s;
            }
            if(em.innerHTML<=0){
                clearInterval(timer1);
                b.innerHTML=00;
                i.innerHTML=00;
                em.innerHTML=00;

            }
        }
    },1000);
}
autoPlay();