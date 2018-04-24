var swiper = new Swiper('.Head', {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    slidesPerView: 1,
    spaceBetween: 20,
    centeredSlides: true,
   // autoplay: 4000,
    autoplayDisableOnInteraction: false,
    //循环播放
    //loop: true
});

$(".travel-nav2-li1").click(function(){
    $("#travel-shop2").hide();
    $("#travel-shop").show();
    $(".bottomline3").animate({width:"50%"});
    $(".bottomline4").animate({width:"50%"});
    $(".travel-nav2-li1 a").css({"color":"#0bca97"});
    $(".bottomline1").animate({width:"0"});
    $(".bottomline2").animate({width:"0"});
    $(".travel-nav2-li2 a").css({"color":"#929292"});
})
$(".travel-nav2-li2").click(function(){
    $("#travel-shop2").show();
    $("#travel-shop").hide();
    $(".travel-nav2-li1").css({"border-bottom":"none"});
    $(".bottomline1").animate({width:"50%"});
    $(".bottomline2").animate({width:"50%"});
    $(".travel-nav2-li2 a").css({"color":"#0bca97"});
    $(".bottomline3").animate({width:"0"});
    $(".bottomline4").animate({width:"0"});
    $(".travel-nav2-li1 a").css({"color":"#929292"});
})


var head6  = document.getElementById("travel-header");
var search6  = document.getElementById("travel-search");
var banner6  = document.getElementById("travel-banner");
var title6  = document.getElementById("travel-title");
var nav6  = document.getElementById("travel-nav");
var box6  = document.getElementsByClassName("travel-box")[0];

var nav62  = document.getElementById("travel-nav2");
var nav62Height = head6.offsetHeight+search6.offsetHeight+banner6.offsetHeight+title6.offsetHeight+nav6.offsetHeight+box6.offsetHeight;
var headeHeight1 = head6.offsetHeight;
window.onscroll = function(){
    var _top = document.body.scrollTop || document.documentElement.scrollTop;
    if(_top>headeHeight1){
        head6.style.position="fixed";
        head6.style.top=0+"px";
        if(_top>nav62Height){
            nav62.style.position="fixed";
            nav62.style.top=1.2+"rem";
        }else{
            document.getElementById("travel-shop").style.marginTop=1.2+"rem";
            document.getElementById("travel-shop2").style.marginTop=1.2+"rem";
            nav62.style.position="absolute";
            nav62.style.top=11.76+"rem";
        }
    }else{
        document.getElementById("travel-search").style.marginTop=1.2+"rem";
        head6.style.position="absolute";

    }
}