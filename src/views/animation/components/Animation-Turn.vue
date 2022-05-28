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

    <div class="flex mt-2 h-20 bg-slate-400 overflow-hidden">
      <transition :name="`translate${direct}`" :duration="duration">
        <el-card v-show="show">transform</el-card>
      </transition>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
const duration = ref(500);
type Directives = "Top" | "Bottom";
const direct = ref<Directives>("Top");
const Diretives = ref<Directives[]>(["Top", "Bottom"]);
const show = ref(true);
const doClick = () => {
  show.value = !show.value;
};
</script>

<style lang="scss">
.translateTop-enter-from,
.translateTop-leave-to {
  transform: translateX(-100%);
}
.translateBottom-enter-from,
.translateBottom-leave-to {
  transform: translateY(-100%);
}
</style>
