<template>
  <div>
    <p class="title">{{title}}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent ({
  setup () {
    const title = ref('渐进式JavaScript框架');
  
    return {
      title
    }
  }
})
</script>

<style>
#app {
  background-color: antiquewhite;
}
</style>