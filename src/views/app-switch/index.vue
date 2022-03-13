<template>
  <div class="container">
    <img class="goods-img" src="~img/switch_img.png" alt="开关" style="width: 114px">
    <svg-icon name="switch-online" class="switchBtn" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent ({
  setup () {
    const title = ref('app switch');
  
    return {
      title
    }
  }
})
</script>

<style lang="scss">
.container {
  display: flex;
  justify-content: center;
}
.goods-img {
  margin: 0 auto;
}
.switchBtn {
  position: absolute;
  top: 0;
  right: 5%;
}
</style>
