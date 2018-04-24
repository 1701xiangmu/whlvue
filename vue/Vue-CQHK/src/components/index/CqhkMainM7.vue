<template>
    <div id="main7">
        <ul class="main7-ul">
<cqhk-main7-img :pro="n" key="index" v-for="(n,index) in list.img01"></cqhk-main7-img>
        </ul>
    </div>
</template>

<script type='text/ecmascript-6'>
    import CqhkMain7Img from "./CqhkMain7Img.vue";
    export default {
        props:["list"],
        components:{
            CqhkMain7Img
        }
    }
</script>

<style scoped>

</style>