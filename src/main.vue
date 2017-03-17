<template>
  <div class="wrapper" @click="update">
    <slider class="slider" interval="4500">
      <div class="frame" v-for="img in imageList">
        <image class="image" :src="img.src"></image>
      </div>
    </slider>
    <image :src="logoUrl" class="logo"></image>
    <text class="title">Hello {{target}}</text>
  </div>
</template>

<style>
  .wrapper { align-items: center; margin-top: 120px; }
  .title { font-size: 48px; }
  .logo { width: 360px; height: 82px; }
</style>

<script>
  export default {
    data: {
      logoUrl: 'https://alibaba.github.io/weex/img/weex_logo_blue@3x.png',
      target: 'World',
      imageList: [{src: 'https://gd2.alicdn.com/bao/uploaded/i2/T14H1LFwBcXXXXXXXX_!!0-item_pic.jpg'}]
    },
    methods: {
      update: function (e) {
        this.target = 'Weex'
        console.log('target:', this.target)
      }
    }
  }
</script>
