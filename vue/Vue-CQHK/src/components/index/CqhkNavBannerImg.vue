<template>
    <li :class="pro.ClassName">
        <img :src="pro.Picimg"/><br><span>{{pro.title}}</span>
    </li>
</template>

<script type='text/ecmascript-6'>
    export default {
        props:["pro"]
    }
</script>

<style scoped>

</style>