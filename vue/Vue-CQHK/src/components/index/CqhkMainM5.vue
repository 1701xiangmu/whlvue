<template>
    <div id="main5">
        <cqhk-main5-img key="index" :listimg="n" v-for="(n,index) in lists.img02"></cqhk-main5-img>
    </div>
</template>

<script type='text/ecmascript-6'>
    import CqhkMain5Img from "./CqhkMain5Img.vue";
    export default {
        props:["lists"],
        components:{
            CqhkMain5Img
        }
    }
</script>

<style scoped>

</style>