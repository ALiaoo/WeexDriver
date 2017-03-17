<template>
  <div class="biz-item">
    <image class="biz-logo" src="https://gd2.alicdn.com/bao/uploaded/i2/T14H1LFwBcXXXXXXXX_!!0-item_pic.jpg"></image>
    <div class="item-right">
      <text class="biz-title">吉野家d</text>
      <text>¥20起送 | 配送费¥4 | ¥23/人</text>
    </div>
  </div>
</template>

<style>
  
  text {
    color: #f3f3f3;
    font-size: 10px;
  }

  .biz-item {
    flex-direction: row;
  }

  .biz-logo {
    width: 200px;
    height: 200px;
  }
  .item-right {
    margin-left: 20px;
  }
</style>

<script>
  export default {
    data: {
      target: 'World',
    },
    methods: {
      update: function (e) {

      },
      onchange: function (e) {

      }
    }
  }
</script>
