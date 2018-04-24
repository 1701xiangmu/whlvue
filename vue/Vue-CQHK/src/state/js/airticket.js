$(".airticket-nav2-li2").click(function(){
    $(".bottomline3").animate({left:'100%'});
    $(".airticket-nav2-li2 a").css({"color":"#0bca97"});
    $(".airticket-nav2-li1 a").css({"color":"#333333"});
    $(".airticket-nav-city-ul2-li2").animate({right:"0px"},function () {
        $(".airticket-nav-city-ul2-li2").fadeIn();
    })
})

$(".airticket-nav2-li1").click(function(){
    $(".bottomline3").animate({left:'0'});
    $(".airticket-nav2-li2 a").css({"color":"#333333"});
    $(".airticket-nav2-li1 a").css({"color":"#0bca97"});
    $(".airticket-nav-city-ul2-li2").animate({right:"-25%"},function () {
        $(".airticket-nav-city-ul2-li2").fadeOut();
    })
})

$(".airticket-nav-city-em").click(function(){
    var str1 = $(".airticket-nav-city-li2").html();
    var str2 = $(".airticket-nav-city-li1").html();
    $(".airticket-nav-city-li1").html(str1);
    $(".airticket-nav-city-li2").html(str2);
})

