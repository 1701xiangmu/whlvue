<template>
    <div id="main">
       <cqhk-main-img key="index" :item="n" v-for="(n,index) in list.img01"></cqhk-main-img>
    </div>
</template>

<script type='text/ecmascript-6'>
    import CqhkMainImg  from "./CqhkMainImg.vue";
    export default {
        props:["list"],
        components:{
            CqhkMainImg
        },
//        data:function(){
//            return{
//                lists:[]
//            }
//        },
//        created:function () {
//            this.intilDate();
//        },
//        methods:{
//            intilDate:function () {
//                ServiceIndex.getImgMain((data)=>{
//                    this.lists=data;
//                    console.log(data);
//                })
//            }
//        }
    }
</script>

<style scoped>

</style>