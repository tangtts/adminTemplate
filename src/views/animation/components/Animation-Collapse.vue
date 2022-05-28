<template>
  <div>
    <div class="flex items-center justify-evenly">
      <run-button @click="doClick"></run-button>
      <input-number v-model="duration"></input-number>
    </div>
    <div class="flex mt-2 h-20 bg-slate-400">
      <el-collapse-transition name="el-fade-in-linear" :duration="duration">
        <el-card v-show="show" class="darkBg">
          <span>collapse </span>
        </el-card>
      </el-collapse-transition>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ElCollapseTransition } from "element-plus";
import RunButton from "./AnimationButtonRun.vue";
import InputNumber from "./AnimationChangeDuration.vue";
import { ref } from "vue";
const duration = ref(500);

const show = ref(true);
const doClick = () => {
  show.value = !show.value;
};
</script>
