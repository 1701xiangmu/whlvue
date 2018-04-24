var header = document.getElementById("service-header");
var headHeight2 = header.offsetHeight;
window.onscroll = function(){
    var _top = document.body.scrollTop || document.documentElement.scrollTop;
    if(_top>headHeight2){
        header.style.position="fixed";
        header.style.top=0+"px";
    }else{
        document.getElementById("service-banner").style.marginTop=1.2+"rem";
        header.style.position="absolute";
    }
}
$(function () {
    $(".service-banner2-p").click(function(){
        $(".service-details").show();
    });
    $(".service-details-Img2").click(function(){
        $(".service-details").hide();
    })
})
