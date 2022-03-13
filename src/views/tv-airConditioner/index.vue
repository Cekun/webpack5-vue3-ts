<template>
  <div class="container">
    <div class="operators">
      <div class="row">
        <controller label="变频空调" @change="triggerHandler" isTrigger/>
      </div>
      <div class="row">
        <controller label="睡眠模式" :disabled="!isOn" />
      </div>
      <div class="row">
        <controller label="工作模式" :disabled="!isOn" optType="select" :data="['自动', '半自动']" />
      </div>
      <div class="row">
        <controller label="温度调节" :disabled="!isOn" optType="select" />
      </div>
      <div class="row">
        <controller label="风速" :disabled="!isOn" optType="select" />
      </div>
      <div class="row">
        <controller label="上下摆风" :disabled="!isOn" />
      </div>
      <div class="row">
        <controller label="左右摆风" :disabled="!isOn" />
      </div>
    </div>
    <div class="display-info">
      <img src="~img/konka_airconditor.png" />
      <div class="desc">
        <div class="temperature">室内温度</div>
        <div class="val">22℃</div>
      </div>
    </div>
  </div>
</template>


<script setup>
import controller from '@/components/TV-AirContditor/controller.vue';
import { ref } from 'vue';

var isOn = ref(false)

const triggerHandler = val => {
  isOn.value = val
}


</script>


<style lang="scss">
.container {
  display: flex;
  .operators {
    margin-left: 20px;
    .row {
      margin: 12px 0;
      &:first-child {
        margin: 0;
      }
    }
  }
  .display-info {
    width: 100%;
    .desc {
      opacity: 0.5;
      font-family: NotoSansCJKsc-Regular;
      font-size: 36px;
      color: #FFFFFF;
      text-align: center;
      line-height: 36px;
      .val {
        opacity: 0.8;
        font-size: 42px;
        line-height: 42px;
        margin-top: 24px;
      }
    }
  }
}
.row {
  margin: 12px 0;
  &:first-child {
    margin: 0;
  }
}
</style>

