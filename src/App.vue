<template>
  <div>
    <v-header :seller="seller"></v-header>
    <div class="tab border-1px">
      <div class="tab-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/sellers">商家</router-link>
      </div>
    </div>
    <keep-alive>
      <router-view :seller="seller" ></router-view>
    </keep-alive>

  </div>
</template>

<script type="text/ecmascript-6">
  import {urlParser} from 'common/js/util.js'
  import header from 'components/header/header.vue'
  const ERR_OK = 0
  export default {
    data () {
      return {
        seller: {
          id: (() => {
            let queryParam = urlParser()
            console.log(queryParam)
            return queryParam.id
          })()
        }
      }
    },
    created () {
      this.$http.get('/api/sellers?id=' + this.seller.id).then(response => {
        response = response.body
        if (response.errno === ERR_OK) {
          this.seller = response.data
          // 响应式 给seller对象添加 属性 id
          console.log(this.seller.id)
          this.seller = Object.assign({}, this.seller, {id: urlParser().id})
          console.log(this.seller.id)
        }
      })
    },
    components: {
      'v-header': header
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  /* CSS 添加边框，即使用伪类加缩放进行添加 */
  @import "common/stylus/mixin.styl"
  .tab
    display: flex
    width: 100%
    height: 40px
    line-height: 40px
    border-1px(rgba(7, 12, 27, 0.1))
    .tab-item
      flex: 1
      text-align: center
      & > a
        display: block
        font-size: 14px
        color: rgb(77, 85, 93)
        &.active
          color: rgb(240, 20, 20)
</style>
