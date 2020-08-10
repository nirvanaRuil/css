<template>
    <div>
        <div id="nav">
            <router-link class="a" to="/home">𝓗𝓸𝓶𝓮</router-link>
            <router-link class="a" to="/rihuanshi">𝓻𝓲𝓗𝓾𝓪𝓷𝓢𝓱𝓲</router-link>
            <router-link class="a" to="/count">计时器</router-link>
            <router-link class="a" to="/about">𝓐𝓫𝓸𝓾𝓵</router-link>
            <router-link class="a" to="/guessNumCss">猜数字</router-link>
            <router-link class="a" to="/">时钟</router-link>
            <router-link class="a" to="/clock">爱心时钟</router-link>
        </div>
        <router-view/>
    </div>
</template>

<script>

    import count from './count.vue'
    import clock from '../../../left/src/views/clock.vue'
    import guessNumCss from './guessNumCss.vue'
    import rihuanshi from './rihuanshi.vue'
    import signal from './signal.vue'
    import Home from './Home.vue'


    export default {
        name: "all",
        components:{
            count,
            clock,
            guessNumCss,
            rihuanshi,
            signal,
            Home,
        },
    }
</script>

<style scoped>
    #nav {
        font-size: 25px;
    }
    #nav a.router-link-exact-active {
        color: #42b983;
    }
    .a{
        float: left;
        clear: both;
    }
</style>