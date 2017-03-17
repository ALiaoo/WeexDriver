<template>
  <div >
    <transition>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
  </div>
</template>

<style>

</style>

<script>

  export default {
    data: {

    },
    methods: {
      back: function () {
        this.$router.back()
      }
    }
  }
</script>
