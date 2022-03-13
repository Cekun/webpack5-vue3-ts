<template>
  <div :class="['control-card', disabled ? 'control-disabled':'', isTrigger?'isTrigger':'']">
    <span class="label">
    {{label}}
    </span>
    <div class="operation-select" v-if="optType==='select'">
      <div class="select-left" />
      自动
      <div class="select-left select-right" />
    </div>
    <div class="operation-switch" v-else>
      <van-switch v-model="checked" active-color="#53BC91" :disabled="disabled" @change="switchChange" />
    </div>
  </div>
</template>

<script setup>
import { Switch as VanSwitch } from 'vant';
import { ref } from 'vue';
defineProps({
  label: String,
  optType: String, // 操作类型：switch开关（默认），选择
  disabled: Boolean,
  isTrigger: {
    type: Boolean,
    default: false
  }
})
const emit = defineEmits(['change'])
const checked = ref(false)
const switchChange = val => {
  emit('change', val)
}


</script>

<style lang="scss">
.control-disabled {
  opacity: .7;
}
.control-card {
  font-family: NotoSansCJKsc-Regular;
  width: 630px;
  height: 35px;
  padding: 40px 60px;
  background: rgba(241,241,241,0.10);;
  // background-image: linear-gradient(135deg, #D55143 0%, #E2353D 100%);
  border-radius: 9px; 
  font-size: 36px;
  line-height: 36px;
  color: #FFFFFF;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .operation-select {
    display: flex;
    margin-right: -50px;
  }
  .select-left {
    width: 0;
    height: 0;
    border: 20px solid transparent;
    border-right: 20px solid #000;
    opacity: 0.3;
    margin-right: 30px;
  }
  .select-right {
    transform: rotate(180deg);
    margin-left: 30px;
  }
}
.isTrigger {
  background-image: linear-gradient(135deg, #D55143 0%, #E2353D 100%);
}
</style>