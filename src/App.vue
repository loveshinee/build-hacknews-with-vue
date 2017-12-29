<template>
  <div id="app">
    <header class="header">
      <nav>
        <router-link to="/">
          <img src="./assets/logo.png" alt="" class="logo">
        </router-link>
        <router-link to="/"> Top</router-link>
        <router-link to="/"> New</router-link>
        <router-link to="/"> Show</router-link>
        <router-link to="/"> Ask</router-link>
        <router-link to="/"> Jobs</router-link>
        <a href="" target="_blank" class="gitPage">Build with Vue.js</a>
      </nav>
    </header>

    <transition name="fade" mode="out-in">
      <router-view class="view"></router-view>
    </transition>  
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="stylus">
body 
  font-family -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif
  font-size 15px
  background-color #f2f3f5
  margin 0
  padding-top 55px
  color #34495e
  overflow-y scroll

header 
  position fixed
  top 0
  left 0
  background-color #f60
  width 100%
  height 55px
  z-index 100
  nav 
    max-width 800px
    margin 0 auto
    padding 15px 5px
    a
      vertical-align middle
      margin-right 1.8em
      display inline-block
      color rgba(255, 255, 255, 0.8)
      line-height 24px
      text-decoration none
    .logo 
      width 24px
      height 24px
      vertical-align middle
    .gitPage 
      float right

.view 
  position relative
  max-width 800px 
  margin 0 auto
</style>
