<template>
  <header>
    <div>
      <a href="/"><img src="../assets/logo.png"></a>
      <ul class="top_menu clear">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/subpage">subpage</router-link></li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/_variables';
@import '../assets/scss/_mixins';
@import '../assets/scss/_global';

header {
  position: fixed; top: 0; left: 0; width: 100%; background: #f9f9f9; height: 70px; line-height: 70px; z-index: 99;
  div {
    max-width: $width; padding: 0 15px; margin: 0 auto;
    img { width: 40px; margin: 17px 80px 0 0; }
   }
  .top_menu {
    float: right;
    li {
      float: left; margin-left: 30px; font-size: 1.8rem;
      a { padding: 10px; }
    }
  }
}

</style>
