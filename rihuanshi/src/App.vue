<template>
  <div id="app">
<!--      <div class="nav">-->
<!--          <router-link class="" to="/all">css</router-link>-->
<!--          <router-link class="" to="/js">js</router-link>-->
          <div class="show">
              <router-link class="a" to="/home">𝓗𝓸𝓶𝓮</router-link>
              <router-link class="a" to="/rihuanshi">𝓻𝓲𝓗𝓾𝓪𝓷𝓢𝓱𝓲</router-link>
              <router-link class="a" to="/count">计时器</router-link>
              <router-link class="a" to="/about">𝓐𝓫𝓸𝓾𝓵</router-link>
              <router-link class="a" to="/guessNumCss">猜数字</router-link>
              <router-link class="a" to="/">时钟</router-link>
              <router-link class="a" to="/signal">爱心时钟</router-link>

              <div class="view">
                  <router-view/>
              </div>
<!--          </div>-->
      </div>
  </div>
</template>

<style>
#app {
      font-family: Avenir, Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: center;
      color: #2c3e50;
      position: relative;
}

#nav {
    padding: 30px;
    font-family: 华文行楷;
    font-size: 60px;
}

#nav a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
}
.show{
    position: absolute;
    display: none;
    /*height: 500px;*/
    /*width: 300px;*/
    background-color: pink;
    float: left;
}
.view{
    /*position: absolute;*/
    /*display: none;*/
    height: 900px;
    width: 900px;
    background-color: green;
    float: right;
    position: absolute;
    display: none;
}
/*.nav {*/
/*    background-color: yellow;*/
/*    !*width: 50px;*!*/
/*    !*height: 50px;*!*/
/*    float: left;*/

/*}*/
.nav:hover .show{
    /*clear: both;*/
    display: block;
    position: absolute;
}
.show:hover .view{
    /*clear: both;*/
    display: block;
    position: absolute;
}
/*#nav a.router-link-exact-active {*/
/*  color: #42b983;*/
/*}*/
</style>
