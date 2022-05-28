<template>
  <div>
    <div class="flex items-center justify-evenly">
      <el-button type="primary" @click="doClick">Click Me</el-button>
      <div>
        更改动画时长
        <el-input-number v-model="duration" :step="100" step-strictly />
      </div>
    </div>
    <div class="flex mt-2 h-20 bg-slate-400">
      <el-collapse-transition name="el-fade-in-linear" :duration="duration">
        <el-card v-show="show">collapse</el-card>
      </el-collapse-transition>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ElCollapseTransition } from "element-plus";
import { ref } from "vue";
const duration = ref(500);

const show = ref(true);
const doClick = () => {
  setTimeout(() => {
    show.value = !show.value;
  }, duration.value);
};
</script>
