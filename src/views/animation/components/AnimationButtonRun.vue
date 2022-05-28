<template>
  <el-button type="primary" @click="doClick">
    <slot>Click Me</slot>
  </el-button>
</template>
<script lang="ts" setup>
const emit = defineEmits(["click"]);
const doClick = () => {
  emit("click");
};
</script>
