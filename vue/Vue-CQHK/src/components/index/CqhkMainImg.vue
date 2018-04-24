<template>
    <dl :class="item.tit">
        <dt>
        <h5>{{item.title}}</h5>
        <span>{{item.content}}</span>
        </dt>
        <dd>
            <img :src="item.imgPic"/>
        </dd>
    </dl>
</template>

<script type='text/ecmascript-6'>
    export default {
        props:["item"],
    }
</script>

<style scoped>

</style>