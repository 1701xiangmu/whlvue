"use strict";
module.exports={
    //获取Banner
    getBanner : function(){
        var imgList = ["./src/state/img/index-banner1.jpg","./src/state/img/index-banner2.jpg","./src/state/img/index-banner3.jpg","./src/state/img/index-banner4.jpg","./src/state/img/index-banner5.jpg","./src/state/img/index-banner6.jpg","./src/state/img/index-banner7.jpg"]
        return imgList
    },
    getNav : function(){
        var imgNav = {
            "img01":[
                {Picimg:"./src/state/img/index-nav1.png","ClassName":"nav-ul1-li1","title":"机票"},
                {Picimg:"./src/state/img/index-nav2.png","ClassName":"nav-ul1-li2","title":"酒店"},
                {Picimg:"./src/state/img/index-nav3.png","ClassName":"nav-ul1-li3","title":"机+酒"},
                {Picimg:"./src/state/img/index-nav4.png","ClassName":"nav-ul1-li4","title":"全球购"},
                {Picimg:"./src/state/img/index-nav5.png","ClassName":"nav-ul1-li5","title":"出境游"},
                {Picimg:"./src/state/img/index-nav6.png","ClassName":"nav-ul2-li6","title":"国内游"},
                {Picimg:"./src/state/img/index-nav7.png","ClassName":"nav-ul2-li7","title":"周边游"},
                {Picimg:"./src/state/img/index-nav9.png","ClassName":"nav-ul2-li8","title":"门票"}
            ],
            "img02":[
                {Picimg:"./src/state/img/index-nav10.png","ClassName":"nav-ul1-li2","title":"行程规划"},
                {Picimg:"./src/state/img/index-nav11.png","ClassName":"nav-ul1-li6","title":"包车游"},

            ]
        }
        return imgNav
    }
}

