<template>
  <div>
    <div class="flex items-center justify-evenly">
      <div>
        <span>&nbsp;</span>
        <el-button type="primary" @click="doClick">Click Me</el-button>
      </div>
      <div class="ml-2">
        <span class="text-md"> 更改动画时长</span>
        <el-input-number v-model="duration" :step="100" step-strictly />
      </div>
      <div>
        <span class="font-md"> 更改动画方向</span>
        <el-radio-group v-model="direct">
          <el-radio
            v-for="directive in Diretives"
            :key="directive"
            :label="directive"
          ></el-radio>
        </el-radio-group>
      </div>
    </div>
    <div class="flex mt-2 h-20 bg-slate-400">
      <transition :name="`el-zoom-in-${direct}`" :duration="duration">
        <el-card v-show="show">zoom-in-{{ direct }}</el-card>
      </transition>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
type Directives = "top" | "bottom" | "center";
const duration = ref(500);

const direct = ref<Directives>("top");
const Diretives = ref<Directives[]>(["top", "center", "bottom"]);

const show = ref(true);
const doClick = () => {
  setTimeout(() => {
    show.value = !show.value;
  }, duration.value);
};
</script>
