<template>
  <div>
    <span class="dark:text-white">更改动画时长</span>
    <el-input-number
      v-model="duration"
      @change="change"
      :step="100"
      step-strictly
    />
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";
interface IDuration {
  modelValue: number;
}

const props = withDefaults(defineProps<IDuration>(), {
  modelValue: 500,
});
const duration = props.modelValue;

const emit = defineEmits<{
  (e: "update:modelValue", data: number): void;
}>();

const change = (e: number | undefined, _: number | undefined) => {
  if (e) {
    emit("update:modelValue", e);
  }
};
</script>
