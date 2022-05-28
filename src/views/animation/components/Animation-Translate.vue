<template>
  <div>
    <div class="flex items-center justify-evenly">
      <run-button @click="doClick"></run-button>
      <input-number v-model="duration"></input-number>

      <div>
        <span class="font-md dark:text-white"> 更改动画方向</span>
        <el-radio-group v-model="direct">
          <el-radio
            v-for="directive in Directives"
            :key="directive"
            :label="directive"
          ></el-radio>
        </el-radio-group>
      </div>
    </div>

    <div class="flex mt-2 h-20 bg-slate-400 overflow-hidden">
      <transition :name="`translate${direct}`" :duration="duration">
        <el-card v-show="show" class="darkBg">
          <span>transform </span>
        </el-card>
      </transition>
    </div>
  </div>
</template>
<script lang="ts" setup>
import RunButton from "./AnimationButtonRun.vue";
import InputNumber from "./AnimationChangeDuration.vue";
import { ref, watch } from "vue";
const duration = ref(500);
type DirectivesType = "Left" | "Right" | "Top" | "Bottom";
const direct = ref<DirectivesType>("Top");
const Directives = ref<DirectivesType[]>(["Left", "Right", "Bottom", "Top"]);
watch(direct, () => {
  show.value = true;
});
const show = ref(true);
const doClick = () => {
  show.value = !show.value;
};
</script>

<style lang="scss">
.translateLeft-enter-from,
.translateLeft-leave-to {
  transform: translateX(-100%);
}
.translateRight-enter-from,
.translateRight-leave-to {
  transform: translateX(100%);
}

.translatTop-enter-from,
.translateTop-leave-to {
  transform: translateY(100%);
}
.translateBottom-enter-from,
.translateBottom-leave-to {
  transform: translateY(-100%);
}
</style>
