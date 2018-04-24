var express = require("express");
var router = express.Router();

router.get("/getmain",function(req,res){
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers","Origin,X-Requested-With,Content-Type,Accept");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    var mainImg = {
        img01:[
            {tit:"main-dl",title:"商务经济座",content:"十大优势服务", imgPic:"http://localhost:3000/img/index-main1.jpg"},
            {tit:"main-dl2",title:"托运行李",content:"提前购享优惠", imgPic:"http://localhost:3000/img/index-main2.jpg"},
            {tit:"main-dl",title:"特价机票",content:"省钱、省心", imgPic:"http://localhost:3000/img/index-main3.jpg"},
            {tit:"main-dl2",title:"托运行李",content:"提前购享优惠", imgPic:"http://localhost:3000/img/index-main4.jpg"}
        ]

    }
    res.jsonp(mainImg);
})
module.exports=router;