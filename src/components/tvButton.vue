<template>
    <div :class="['tv-button',active==status?'is-active':'']" @click="clickHander(status)">
        <slot></slot>
        {{text}}
    </div>
</template>

<script setup lang="ts" >
    import { ref } from 'vue'
    defineProps<{
        active: Number, // 激活状态样式
        text: String,
        status: Number
        // color: {
        //     type: String,
        //     required: false,
        //     default: ' '
        // },
    }>()
    const btnRef = ref()
    const emit = defineEmits(['change'])
    const clickHander = (status:Number) => {
        emit('change',status)
    }
</script>

<style lang="scss" scoped>
.tv-button {
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 196px;
    height: 115px;
    padding: 30px 58px;
    background: rgba(241,241,241,0.10);
    border-radius: 9px;
    box-sizing: border-box;
    opacity: 0.7;
    line-height: 36px;
    font-family: NotoSansCJKsc-Regular;
    font-size: 36px;
    color: #F1F1F1;
    text-align: center;
}
.is-active {
    background: rgba(241,241,241,0.10);
    background-image: linear-gradient(135deg, #D55143 0%, #E2353D 100%);
    border-radius: 9px;
    opacity:1;
}
</style>