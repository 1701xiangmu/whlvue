var summertravelhead  = document.getElementById("summertravel-header2");
var summertravelHeight = summertravelhead .offsetHeight/2;
window.onscroll = function(){
    var _top = document.body.scrollTop || document.documentElement.scrollTop;
    if(_top>summertravelHeight){
        summertravelhead.style.position="fixed";
        summertravelhead.style.top=0+"px";
    }else{
        document.getElementById("summertravel-main").style.marginTop=12+"vw";
        summertravelhead.style.position="absolute";
    }
}
