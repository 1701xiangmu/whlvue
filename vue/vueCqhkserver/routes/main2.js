var express = require ("express");
var router = express.Router();


    router.get("/getMainM5",function(req,res){
        res.header("Access-Control-Allow-Origin","*");
        res.header("Access-Control-Allow-Headers","Origin,X-Requested-With,Content-Type,Accept");
        res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
        res.header("X-Powered-By",' 3.2.1')
        res.header("Content-Type", "application/json;charset=utf-8");
        var ImgMain5 = {
            img02:[
                {tit:"main5-dl",title:"新人尊享礼",content:"400元限时领", imgPic:"http://localhost:3000/img/index-main8.jpg"},
                {tit:"main5-dl",title:"机酒自由行",content:"天天惠不停", imgPic:"http://localhost:3000/img/index-main9.jpg"},
                {tit:"main5-dl",title:"缤纷日本行",content:"最高立减800", imgPic:"http://localhost:3000/img/index-main10.jpg"},

            ]
        }
        res.jsonp(ImgMain5)
    })
    module.exports=router;
