<template>
  <div>
    <el-select v-model="province" clearable @change="changeProvince">
      <el-option
        v-for="province in allArea"
        :key="province.code"
        :value="province.code"
        :label="province.name"
      ></el-option>
    </el-select>
    <el-select
      v-model="city"
      clearable
      :disabled="!province"
      @change="changeCity"
    >
      <el-option
        v-for="city in cityOptions"
        :key="city.code"
        :value="city.code"
        :label="city.name"
      ></el-option>
    </el-select>

    <el-select v-model="area" clearable :disabled="!province && !city">
      <el-option
        v-for="area in areaOptions"
        :key="area.code"
        :value="area.code"
        :label="area.name"
      ></el-option>
    </el-select>
  </div>
</template>

<script lang="ts" setup>
import allArea from "@/assets/json/pca-code.json";
import { ref, computed } from "vue";
const emit = defineEmits<{
  (e: "changeArea", data: Record<string, any>): void;
}>();
const province = ref("");
const city = ref("");
const area = ref("");
const cityOptions = computed(() => {
  return allArea.find((city) => city.code == province.value)?.children;
});
const areaOptions = computed(() => {
  if (cityOptions.value) {
    return cityOptions.value.find((area) => area.code == city.value)?.children;
  }
});
const changeProvince = (e: string) => {
  area.value = city.value = "";
};
const changeCity = (e: string) => {
  area.value = "";
};
</script>

<style lang="scss" scoped></style>
