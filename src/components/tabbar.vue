<template>
  <div class="wrapper" @click="update">
    <div>
      <image class="tab-icon" src="images/search.png"></image>
      <span>外卖</span>
    </div>
  </div>

</template>

<style>

  .tab-icon {
    width: 40px;
    height: 40px;
  }
  span {
    font-size: 20px;
    color: red;
  }
  .wrapper {
    align-items: center;
  }

  .slider {
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

  .panel{
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
  export default {
    data: {
      target: 'World',
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
