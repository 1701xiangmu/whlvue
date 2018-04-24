<template>
    <dl class="main5-dl">
        <dt>
            <span>{{listimg.title}}</span>
            <em>{{listimg.content}}</em>
        </dt>
        <dd>
            <img :src="listimg.imgPic"/>
        </dd>
    </dl>
</template>

<script type='text/ecmascript-6'>
    export default {
        props:["listimg"]
    }
</script>

<style scoped>

</style>