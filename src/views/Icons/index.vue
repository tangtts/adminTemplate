<template>
  <div class="grid grid-cols-4 grid-flow-row gap-4">
    <div
      v-for="(item, index) in Object.keys(Icons)"
      :key="index"
      v-copy="item"
      class="ml-2 rounded-lg flex flex-col items-center hover:scale-105 cursor-pointer py-2 hover:text-red-500 shadow-slate-500 hover:shadow-lg transition-all duration-150"
    >
      <component :is="item" />
      <p>{{ item }}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import * as Icons from "@element-plus/icons-vue";
</script>
<style scoped>
svg {
  width: 2rem;
}
</style>
