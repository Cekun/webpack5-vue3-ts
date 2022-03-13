<template>
  <div class="tv-container">
    <div class="container curtain-detail">
      <div class="col group-btn">
        <tv-button class="item-btn" text="全开" :status="1" :active="curSelectedStatus" @change="getButtonValue"></tv-button>
        <tv-button class="item-btn" text="暂停" :status="2" :active="curSelectedStatus" @change="getButtonValue"></tv-button>
        <tv-button class="item-btn" text="全关" :status="0" :active="curSelectedStatus" @change="getButtonValue"></tv-button>
      </div>
      <div class="col product-img">
        <img class="img" src="~img/curtain_img.png" alt="窗帘">
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import tvButton from '@/components/tvButton.vue'
const curSelectedStatus = ref(1)
const getButtonValue = (data:any) => {
  console.log('data',data)
  curSelectedStatus.value = data
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 72px;
  .col {
    flex: 1;
  }
  .group-btn {
    display: flex;
    flex: 1;
    .item-btn {
      margin-right: 45px;
    }
  }
  .product-img {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    .img {
      width: 500px;
      height: 500px;
    }
  }
}
.curtain-detail {
  padding-top: 139px;
}
</style>
