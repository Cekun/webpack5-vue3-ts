<template>
  <div>
    <p class="title">{{title}}</p>
    <img src="~/img/bg1.jpg" >
  </div>
  <div>
    呵呵呵a Vue kiss 撒旦法f
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

<style>
#app {
  background-color: antiquewhite;
  font-size: 24px;
}
</style>