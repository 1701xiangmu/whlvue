"use stirct";
import callApi from "../utils/fetchApi";
import common from "../contants/Common";

module.exports = {
    getImgMain:function(cb){
        let url = common.MAIN;
        fetch(url).then((response)=>{
            response.json().then((data)=>{
                cb(data);
            })
        })
    }
}
