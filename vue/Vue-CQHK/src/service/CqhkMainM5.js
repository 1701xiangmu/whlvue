"use stirct";
import callApi from "../utils/fetchApi";
import common from "../contants/Common";
module.exports = {
    getImgMainM5:function(cb){
        let url = common.MAINM5;
        fetch(url).then((response)=>{
            response.json().then((data)=>{
                cb(data);
            })
        })
    }
}