<template>
  <div id="app">
    <Header></Header>
    <div class="container">
      <router-view></router-view>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './core/Header'
import Footer from './core/Footer'

export default {
  components: {
    'Header': Header,
    'Footer': Footer
  }
}
</script>

<style lang="scss">
@import './assets/scss/_variables';
@import './assets/scss/_mixins';
@import './assets/scss/_global';

#app {
  padding-top: 70px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
