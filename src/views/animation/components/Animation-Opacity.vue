<template>
  <div>
    <div class="flex items-center justify-evenly">
      <RunButton @click="doClick">Click Me</RunButton>
      <input-number v-model="duration" />
    </div>
    <div class="flex mt-2 h-20 bg-slate-400">
      <transition name="el-fade-in-linear" :duration="duration">
        <el-card v-show="show" class="darkBg">
          <span>fade </span>
        </el-card>
      </transition>
    </div>
  </div>
</template>

<script lang="ts" setup>
import RunButton from "./AnimationButtonRun.vue";
import InputNumber from "./AnimationChangeDuration.vue";
import { ref } from "vue";
const duration = ref(500);

const show = ref(true);
const doClick = () => {
  show.value = !show.value;
};
</script>
