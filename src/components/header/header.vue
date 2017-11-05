<template>
  <div class="header">
    <div class="content-wrapper">
      <div class="avatar">
        <img :src="seller.avatar" width="64" height="64">
      </div>
      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name">{{seller.name}}</span>
        </div>
        <div class="description">
          {{seller.description}}/{{seller.deliveryTime}}分钟送达
        </div>
        <div class="support" v-if="seller.supports">
          <span class="icon"></span>
          <span class="text">{{seller.supports[0].description}}</span>
        </div>
      </div>
    </div>
    <div class="bulletin-wrapper">

    </div>
  </div>
</template>

<script>
  export default {
    props: {
      seller: {
        type: Object
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin"

  .header
    color: #fff
    background: green
    .content-wrapper
      padding: 24px 12px 18px 24px
      font-size: 0            // avatar 和 content 两个 DIV的父 DIV 的 font-size 为 0 ，可以消除两个 inline-block DIV 之间的空隙
      .avatar
        display: inline-block // 设置同行，让 avatar 和 content 两个 DIV 同行
      .content
        display: inline-block // 设置同行,让 avatar 和 content 两个 DIV 同行
        margin-left: 16px
        font-size: 14px
        .title
          margin: 2px 0 8px 0
          .brand
            display: inline-block // span 标签设置 width height 如果不设置 inline-block 则，宽高不起作用
            width: 30px
            height: 18px
            bg-image('brand')
            background-size: 30px 18px
            background-repeat: no-repeat
</style>
