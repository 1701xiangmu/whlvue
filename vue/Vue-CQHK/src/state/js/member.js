
var memberP= document.querySelector("#member-banner2-p");
var Right=100;
window.onload = function () {
    function autoPlay(){
        setInterval(function(){
            Right--;
            if(Right==-100){
                Right=100;
            }else{
                memberP.style.left=Right+"%";
            }
        },50)
    }
    autoPlay();
}

var memberhead  = document.getElementById("member-header");
var memberHeight = memberhead .offsetHeight;
window.onscroll = function(){
    var _top = document.body.scrollTop || document.documentElement.scrollTop;
    if(_top>memberHeight){
        memberhead.style.position="fixed";
        memberhead.style.top=0+"px";
    }else{
        document.getElementById("member-banner").style.marginTop=1.2+"rem";
        memberhead.style.position="absolute";
    }
}