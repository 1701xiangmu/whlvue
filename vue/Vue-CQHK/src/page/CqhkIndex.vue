<template>
    <div>
        <cquhk-header-banner :imgList="imgList" ></cquhk-header-banner>
        <cqhk-nav-banner :imgNa="imgNa"></cqhk-nav-banner>
        <cqhk-main-m3></cqhk-main-m3>
        <cqhk-main :list="imgMain"></cqhk-main>
        <cqhk-main-m3></cqhk-main-m3>
        <cqhk-main-m2></cqhk-main-m2>
        <cqhk-main-date></cqhk-main-date>
        <cqhk-main-m4></cqhk-main-m4>
        <cqhk-main-m5 :lists="imgMain5"></cqhk-main-m5>
        <cqhk-main-m6></cqhk-main-m6>
        <cqhk-main-m7 :list="imgMain7"></cqhk-main-m7>
    </div>
</template>

<script type='text/ecmascript-6'>
    //引入js/css
    import "../state/css/index.css";
    import "../state/css/swiper.min.css";
    import "../state/js/swiper.min.js";


    //引入插件
    import CquhkHeaderBanner from "../components/index/CqhkHeaderBanner.vue";
    import CqhkNavBanner from "../components/index/CqhkNavBanner.vue";
    import CqhkMain from "../components/index/CqhkMain.vue";
    import CqhkMainM3   from "../components/index/CqhkMainM3.vue";
    import CqhkMainM2 from "../components/index/CqhkMainM2.vue";
    import CqhkMainDate from"../components/index/CqhkMainDate.vue";
    import CqhkMainM4 from "../components/index/CqhkMainM4.vue";
    import CqhkMainM5 from "../components/index/CqhkMainM5.vue";
    import CqhkMainM6 from "../components/index/CqhkMainM6.vue";
    import CqhkMainM7 from "../components/index/CqhkMainM7.vue";
    //引入数据
    import CqhkIndex from "../services/CqhkIndex.js"
    import ServiceIndex from "../service/ServiceIndex.js";
    import CqhkMainServic from "../service/CqhkMainM5.js";
    import CqhkMainM8 from "../service/CqhkMainM7.js";
    export default {
        components:{
            CquhkHeaderBanner,
            CqhkNavBanner,
            CqhkMain,
            CqhkMainM3,
            CqhkMainM2,
            CqhkMainDate,
            CqhkMainM4,
            CqhkMainM5,
            CqhkMainM6,
            CqhkMainM7
        },
        data(){
            return {
                imgList:[],
                imgNa:{},
                imgMain:[],
                imgMain5:[],
                imgMain7:[]
            }
        },
        created : function(){
            this.initData();

        },
        mounted:function(){
            var swiper = new Swiper('.Head', {
                pagination: '.swiper-pagination',
                paginationClickable: true,
                slidesPerView: 1,
                spaceBetween: 20,
                centeredSlides: true,
                autoplay: 4000,
                autoplayDisableOnInteraction: false,
                //循环播放
                loop: true
            });
            var swiper = new Swiper('.Nav', {
                pagination: '.swiper-pagination',
                paginationClickable: true,
                slidesPerView: 1,
                spaceBetween: 20,
                centeredSlides: true,
                // autoplay: 3000,
                autoplayDisableOnInteraction: false,
                //循环播放
                //loop: true
            });

        },
        methods : {
            initData:function(){
                this.imgList = CqhkIndex.getBanner();//头部Banner图
                this.imgNa =  CqhkIndex.getNav();
                 ServiceIndex.getImgMain((data)=>{
                    this.imgMain=data;
                     console.log(data);
                });
                CqhkMainServic.getImgMainM5((data)=>{
                    this.imgMain5=data;
                });
                CqhkMainM8.getImgMainM7((data)=>{
                    this.imgMain7= data;
                })
            }
        }
    }
</script>

<style scoped>

</style>