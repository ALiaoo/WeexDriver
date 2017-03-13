<template>
  <div class="biz-item">
    <image class="biz-logo" src="https://gd2.alicdn.com/bao/uploaded/i2/T14H1LFwBcXXXXXXXX_!!0-item_pic.jpg"></image>
    <div class="item-right">
      <text class="biz-title">吉野家</text>
    </div>
  </div>
</template>

<style>

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
      classLists: [
        {name: "美食", src: 'https://gd2.alicdn.com/bao/uploaded/i2/T14H1LFwBcXXXXXXXX_!!0-item_pic.jpg'},
        {name: "甜品饮品", src: 'https://gd2.alicdn.com/bao/uploaded/i2/T14H1LFwBcXXXXXXXX_!!0-item_pic.jpg'},
        {name: "商店超市", src: 'https://gd2.alicdn.com/bao/uploaded/i2/T14H1LFwBcXXXXXXXX_!!0-item_pic.jpg'},
        {name: "预订早餐", src: 'https://gd2.alicdn.com/bao/uploaded/i2/T14H1LFwBcXXXXXXXX_!!0-item_pic.jpg'},
        {name: "果蔬生鲜", src: 'https://gd2.alicdn.com/bao/uploaded/i2/T14H1LFwBcXXXXXXXX_!!0-item_pic.jpg'},
        {name: "新店特惠", src: 'https://gd2.alicdn.com/bao/uploaded/i2/T14H1LFwBcXXXXXXXX_!!0-item_pic.jpg'},
      ],
      imageList: [
        {src: 'https://gd2.alicdn.com/bao/uploaded/i2/T14H1LFwBcXXXXXXXX_!!0-item_pic.jpg'},
        {src: 'https://gd1.alicdn.com/bao/uploaded/i1/TB1PXJCJFXXXXciXFXXXXXXXXXX_!!0-item_pic.jpg'}
      ],
      lists: [
        {title: "A"},
        {title: "B"},
        {title: "C"},
        {title: "D"},
        {title: "E"},
        {title: "F"},
      ]
    },
    methods: {
      update: function (e) {

      },
      onchange: function (e) {

      }
    }
  }
</script>
