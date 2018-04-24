<template>
    <header>
        <div class="swiper-container Head">
            <div class="swiper-wrapper">
                <!--<div class="swiper-slide">-->
                    <!--<img src="img/index-banner1.jpg"/>-->
                <!--</div>-->
                <!--<div class="swiper-slide">-->
                    <!--<img src="img/index-banner2.jpg"/>-->
                <!--</div>-->
                <!--<div class="swiper-slide">-->
                    <!--<img src="img/index-banner3.jpg"/>-->
                <!--</div>-->
                <!--<div class="swiper-slide">-->
                    <!--<img src="img/index-banner4.jpg"/>-->
                <!--</div>-->
                <!--<div class="swiper-slide">-->
                    <!--<img src="img/index-banner5.jpg"/>-->
                <!--</div>-->
                <!--<div class="swiper-slide">-->
                    <!--<img src="img/index-banner6.jpg"/>-->
                <!--</div>-->
                <!--<div class="swiper-slide">-->
                    <!--<img src="img/index-banner7.jpg"/>-->
                <!--</div>-->
                <cqhk-header-banner-img key="i" :img="n" v-for="(n,i) in imgList"></cqhk-header-banner-img>
            </div>
            <!-- Add Pagination -->
            <div class="swiper-pagination Btn"></div>
        </div>
    </header>
</template>

<script type='text/ecmascript-6'>
    import CqhkHeaderBannerImg from "./CqhkHeaderBannerImg.vue";
    export default {
        props:["imgList"],
        components:{
            CqhkHeaderBannerImg,
        }
    }
</script>

<style scoped>

</style>