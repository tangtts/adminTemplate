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
    <span>{{ chooseProvince }}--{{ chooseCity }}--{{ chooseArea }}</span>
  </div>
</template>

<script lang="ts" setup>
import allArea from "@/assets/json/pca-code.json";
import { ref, computed, watch } from "vue";
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

const chooseProvince = computed(() => {
  return allArea.find((p) => p.code == province.value)?.name;
});
const chooseCity = computed(() => {
  if (cityOptions.value) {
    return cityOptions.value!.find((c) => c.code == city.value)?.name;
  }
});

const chooseArea = computed(() => {
  if (area.value) {
    return areaOptions.value!.find((c) => c.code == area.value)?.name;
  }
});

watch(area, () => {
  emit("changeArea", {
    province: chooseProvince.value,
    city: chooseCity.value,
    area: chooseArea.value,
  });
});
const changeProvince = (e: string) => {
  area.value = city.value = "";
};
const changeCity = (e: string) => {
  area.value = "";
};
</script>

<style lang="scss" scoped></style>
