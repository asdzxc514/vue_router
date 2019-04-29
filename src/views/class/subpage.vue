<template>
  <div class="class_wrapper clear">
    <div class="inner">
      <classTop></classTop>
      <div class="class_content">
        <ul class="tab_menu">
          <li class="active"><a href="#">tab menu</a></li>
          <li><a href="#">tab menu</a></li>
          <li><a href="#">tab menu</a></li>
          <li><a href="#">tab menu</a></li>
        </ul>
        <div>fdfd</div>
      </div>
    </div>
  </div>
</template>

<script>
import classTop from '../../components/classTop'

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

<style lang="scss" scoped>
@import '../../assets/scss/_variables';
@import '../../assets/scss/_mixins';
@import '../../assets/scss/_global';
@import '../../assets/scss/class';

</style>
