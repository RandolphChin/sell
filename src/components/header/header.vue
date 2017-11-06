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
          <span class="icon" :class="classMap[seller.supports[0].type]"></span>
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
    },
    created () {
      this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee']
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin"

  .header
    color: #fff
    background-color: rgba(7, 17 ,27, 0.5)
    .content-wrapper
      padding: 24px 12px 18px 24px
      font-size: 0            // avatar 和 content 两个 DIV的父 DIV 的 font-size 为 0 ，可以消除两个 inline-block DIV 之间的空隙
      .avatar
        display: inline-block       // 设置同行，让 avatar 和 content 两个 DIV 同行
        vertical-align: top
        img
          border-radius: 2px
      .content
        display: inline-block // 设置同行,让 avatar 和 content 两个 DIV 同行
        margin-left: 16px
        .title
          margin: 2px 0 8px 0
          .brand
            display: inline-block // span 标签设置 width height 如果不设置 inline-block 则，宽高不起作用
            vertical-align:top
            width: 30px
            height: 18px
            bg-image('brand')
            background-size: 30px 18px
            background-repeat: no-repeat
          .name
            margin-left: 6px
            font-size: 16px
            line-height: 18px
            font-weight: bold
        .description
          margin-bottom: 10px
          line-height: 12px
          font-size: 12px
        .support
          .icon
            display: inline-block
            vertical-align: top
            width: 12px
            height: 12px
            margin-right: 4px
            background-size: 12px 12px
            background-repeat: no-repeat
            &.decrease                  // 这里由于后台传来的数据不定，应用不同的 class 来改变图片的背景，需要定义多个 class
              bg-image('decrease_1')
            &.discount
              bg-image('discount_1')
            &.guarantee
              bg-image('guarantee_1')
            &.invoice
              bg-image('invoice_1')
            &.special
              bg-image('special_1')
          .text
            line-height: 12px
            font-size: 12px
</style>
