<template>
  <div id="app">
    <v-header :seller="seller"></v-header>
    <div class="tab">
      <div class="tab-item"><router-link to='/seller'>商品</router-link></div>
      <div class="tab-item"><router-link to='/ratings'>评价</router-link></div>
      <div class="tab-item"><router-link to='/goods'>商家</router-link></div>
    </div>
    <router-view :seller="seller"></router-view>
  </div>
</template>

<script>
import header from 'components/header/header.vue'
// import {urlParse} from 'common/js/util.js'
const ERR_OK = 0
export default {
  components: {
    'v-header': header
  },
  data () {
    return {
      seller: {}
    }
  },
  created () {
    this.$http.get('/api/seller').then(response => {
      response = response.body
      if (response.errno === ERR_OK) {
        this.seller = response.data
      }
    })
  }
}
</script>

<style>
.tab {
  display: flex;
  width: 100%;
  height: 40px;
  line-height: 40px;
}
.tab .tab-item {
  text-align: center;
  flex: 1;
}
.tab .tab-item a {
  display: block;
  font-size: 14px;
  color: rgb(77, 85, 93);
}
.tab .tab-item a.active {
  color: rgb(240, 20, 20);
}
</style>
