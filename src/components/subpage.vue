<template>
  <div class="class_wrapper clear">
    <div class="inner">
      <classTop></classTop>
      <div class="class_content">
        <ul class="tab_menu">
          <li class="active"><a href="#">tabMenu1</a></li>
          <li><a href="#">tabMenu2</a></li>
          <li><a href="#">tabMenu3</a></li>
          <li><a href="#">tabMenu4</a></li>
        </ul>
      <div>fdfd</div>
      </div>
    </div>
  </div>
</template>

<script>
import classTop from './classTop'

export default {
  name: 'subpage',
  data () {
    return {
      msg: 'subpagebbb'
    }
  },
  components: {
    'classTop': classTop
  }
}
</script>

<style lang="scss">
@import '../assets/scss/_variables';
@import '../assets/scss/_mixins';
@import '../assets/scss/_global';
@import '../assets/scss/class';

</style>
