

<template>
  <img class="img" src="~img/curtain_img.png" alt="窗帘" style="width: 114px">
  <div class="controller">
    <div class="control-btn" @click="switchStatus('openAll')">
      <svg-icon :name="openIconName" />
      <div class="controller-name">全开</div>
    </div>
    <div class="control-btn" @click="switchStatus('suspend')">
      <svg-icon :name="motionIconName" />
      <div class="controller-name">暂停</div>
    </div>
    <div class="control-btn" @click="switchStatus('closeAll')">
      <svg-icon :name="closeIconName"/>
      <div class="controller-name">全关</div>
    </div>
  </div>
  <div class="position controller">
    <span class="label">位置</span>
    <div class="slider-container">
      <van-slider v-model="positionVal" @change="onChangePosition"/>
      <!-- <span>全关</span>
      <span>全开</span> -->
    </div>
    <span class="val">{{positionVal}}%</span>
  </div>
</template>


<script setup>
import SvgIcon from '@/components/SvgIcon.vue';
import { Slider as VanSlider} from 'vant'
import { ref } from 'vue';
const positionVal = ref(50)
const openIconName = ref('openAll-default')
const motionIconName = ref('suspend')
const closeIconName = ref('closeAll-default')
const onChangePosition = value => console.log('当前值：' + value);

const switchStatus = (type) => {
  switch (type) {
    case 'openAll':
      openIconName.value = 'openAll-chosed'
      closeIconName.value = 'closeAll-default'
      break;
    case 'closeAll': 
      closeIconName.value = 'closeAll-chosed'
      openIconName.value = 'openAll-default'
      break
    case 'suspend':
      motionIconName.value = 'continue'
      break
    default:
      break;
  }
}
// return {
//       value,
//       onChangePosition,
//     };

</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: #37404d;
  height: 100vh;
}
.controller {
  width: 95%;
  height: 117px;
  border-radius: 8px;
  background-color: #fff;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.controller .controller-name {
  padding-top: 14px;
  font-family: PingFangSC-Regular;
  font-size: 13px;
  color: #222222;
  text-align: left;
  line-height: 13px;
  font-weight: 400;
  text-align: center;
}
.position {
  height: 70px;
  margin-top: 10px;
  justify-content: center;
  font-size: 17px;
}
.position .label {
  margin-right: 5%;
}
.position .val {
  margin-left: 5%;
}
.slider-container {
  width: 50.7%;
  position: relative
}
.slider-container span {
  position: absolute;
  left: 0;
  font-size: 11px;
  color: #666666;
  text-align: right;
  line-height: 36px;
  font-weight: 400;
  
}
.slider-container span:last-child {
  right: 0;
}
</style>

