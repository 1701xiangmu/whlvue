<template>
    <div id="main3">
        <dl class="main3-dl">
            <dt><img src="../../state/img/index-main5.jpg"/> </dt>
            <dd>
                <div class="main3-dd1">
                    <em>上海</em>
                    <img src="../../state/img/index-main6.jpg"/>
                    <span>茨城</span>
                </div>
                <p>￥99</p>
                <div class="main4-dd1">
                    <img src="../../state/img/index-main7.jpg"/>
                    <span id="main4-dd1-p">
                        <em id="main4-dd1-em">29</em>
                        <strong>:</strong><i id="main4-dd1-i">26</i><strong>:</strong>
                        <b id="main4-dd1-b">59</b>
                    </span>
                </div>
            </dd>
        </dl>
    </div>
</template>

<script type='text/ecmascript-6'>
    export default {
        mounted :function(){
            var p =  document.getElementById("main4-dd1-p");
            var b =  document.getElementById("main4-dd1-b");
            var i =  document.getElementById("main4-dd1-i");
            var em =  document.getElementById("main4-dd1-em");
            var s = 1;
            function autoPlay(){
                var timer1 = setInterval(function(){
                    b.innerHTML=b.innerHTML-1;
                    if(b.innerHTML<=0){
                        b.innerHTML=59;
                        i.innerHTML= i.innerHTML-s;
                        if(i.innerHTML<=0){
                            i.innerHTML=59;
                            em.innerHTML= em.innerHTML-s;
                        }
                        if(em.innerHTML<=0){
                            clearInterval(timer1);
                            b.innerHTML=0;
                            i.innerHTML=0;
                            em.innerHTML=0;

                        }
                    }
                },1000);
            }
            autoPlay();
        }
    }
</script>

<style scoped>

</style>