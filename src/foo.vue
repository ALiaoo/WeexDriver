<template>
  <div class="wrapper" @click="update">

    <slider class="slider-class" @change="onchange">
      <div class="frame" v-for="item in classLists">
        <image class="class-image" :src="item.src"></image>
        <text>{{ item.name }}</text>
      </div>
      <indicator class="indicator"></indicator>
    </slider>

    <slider class="slider-ad" interval="3000" auto-play="true" @change="onchange">
      <div class="frame" v-for="img in imageList">
        <image class="image" :src="img.src"></image>
      </div>
      <indicator class="indicator"></indicator>
    </slider>

    <list class="list">
      <cell class="cell" v-for="item in lists">
        <div class="panel">
          <text class="item-title">{{item.title}}</text>
          <biz-item></biz-item>
        </div>
      </cell>
    </list>
    <tabbar></tabbar>

  </div>

</template>

<style>
  @import "./style/main.scss";
  .wrapper {
    align-items: center;
  }

  .slider-class {
    width: 100%;
    height: 200px;
  }

  .class-image {
    width: 80px;
    height: 80px;
  }

  .slider-ad {
    width: 100%;
    height: 700px;
  }
  .frame {
    width: 100%;
    height: 700px;
    position: relative;
    justify-content: center;
  }
  .image {
    width: 700px;
    height: 700px;
  }

  .indicator {
    width: 700px;
    height: 700px;
    item-color: green;
    item-selected-color: red;
    item-size: 50px;
    top: 620px;
    left: 640px;
  }

  .list {
    width: 100%;
  }

  .panel {
    width: 100%;
    height: 300px;
    margin-bottom: 20px;
    background-color: rgba(162, 217, 192, 0.2);
  }

  .item-title {
    font-style: oblique;
    font-size: 60px;
    text-align: center;
  }

</style>

<script>
  import bizItem from './biz-item.vue'
  import narbar from './narbar.vue'
  import tabbar from './tabbar.vue'

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
    },
    components: {
      'biz-item': bizItem,
      'nav-bar' : narbar,
      'tabbar' : tabbar,
    }
  }
</script>
