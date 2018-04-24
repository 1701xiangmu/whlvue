<template>
    <div class="swiper-container Nav">
        <div class="swiper-wrapper">
            <div class="swiper-slide">
                <div class="nav">
                    <ul class="nav-ul1">
                        <!--<li class="nav-ul1-li1"><img src="img/index-nav1.png"/><br><span>机票</span></li>-->
                        <!--<li class="nav-ul1-li2"><img src="img/index-nav2.png"/><br><span>酒店</span></li>-->
                        <!--<li class="nav-ul1-li3"><img src="img/index-nav3.png"/><br><span>机+酒</span></li>-->
                        <!--<li class="nav-ul1-li4"><img src="img/index-nav4.png"/><br><span>全球购</span></li>-->
                   <cqhk-nav-banner-img key="index" :pro="n" v-for="(n,index) in imgNa.img01"></cqhk-nav-banner-img>
                    </ul>
                </div>
            </div>
            <div class="swiper-slide">
                <div class="nav">
                    <ul class="nav-ul1">
                        <!--<li class="nav-ul1-li2"><img src="img/index-nav10.png"/><br><span>行程规划</span></li>-->
                        <!--<li class="nav-ul1-li6"><img src="img/index-nav11.png"/><br><span>包车游</span></li>-->
                        <!--<li></li>-->
                        <!--<li></li>-->
                        <!--<li></li>-->
                        <!--<li></li>-->
                        <!--<li></li>-->
                        <!--<li></li>-->
                        <cqhk-nav-banner-img key="index" :pro="n" v-for="(n,index) in imgNa.img02"></cqhk-nav-banner-img>
                    </ul>
                </div>
            </div>
        </div>
        <div class="swiper-pagination"></div>
    </div>
</template>
<!--imgNa 与 前面page下的CqhkIndex.js的 imgNa对应-->
<script type='text/ecmascript-6'>
    import CqhkNavBannerImg from "./CqhkNavBannerImg.vue";
    export default {
        props :["imgNa"],
        components:{
            CqhkNavBannerImg,
        }
    }
</script>

<style scoped>

</style>