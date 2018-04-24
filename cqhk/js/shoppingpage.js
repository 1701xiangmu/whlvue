var head  = document.getElementById("shop-header");
var headeHeight = head.offsetHeight;
window.onscroll = function(){
    var _top = document.body.scrollTop || document.documentElement.scrollTop;
    if(_top>headeHeight){
        head.style.position="fixed";
        head.style.top=0+"px";
    }else{
        document.getElementById("seach").style.marginTop=1.2+"rem";
        head.style.position="absolute";
    }
}
$(function(){
    $(".shopCart").click(function(){
        $("#shop-goodmain").show();
    });
    $(".shop-goodlist2-i").click(function(){
        $("#shop-goodmain").hide();
    });
    var m =1;
    $(".shop-goodlist2-span").click(function(){
        m--;
        if(m<=1){
            m=1
        }else{
            $(".shop-goodlist2-b").text(m);
        }
    })
    $(".shop-goodlist2-strong").click(function(){
        m++;
        if(m<=1){
            m=1
        }else{
            $(".shop-goodlist2-b").text(m);
        }
    })
})


