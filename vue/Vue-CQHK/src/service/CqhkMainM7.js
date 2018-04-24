"use stirct";
import callApi from "../utils/fetchApi";
import common from "../contants/Common";
module.exports = {
    getImgMainM7:function(cb){
        let url = common.MainM7;
        fetch(url).then((response)=>{
            response.json().then((data)=>{
                cb(data);
            })
        })
    }
}
