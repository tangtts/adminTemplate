<template>
  <div>
    <el-button type="primary" @click="fetchUser">点击请求Api</el-button>
    <span>{{ isLoading }}</span>
    <el-button type="text" v-for="item in result">
      {{ item }}
    </el-button>

    <el-form>
      <el-form-item label="hook">
        {{ searchWord }}
        <el-input v-model="keyword"></el-input>
      </el-form-item>
      <el-form-item label="customRef">
        {{ customRef }}
        <el-input v-model="text"></el-input>
      </el-form-item>
    </el-form>
    <div class="area" @mousemove="mousemove">
      clinetX:{{ client.clientX }} clinetY:{{ client.clientY }}
    </div>
  </div>
</template>
<script lang="ts" setup>
import { time } from "console";
import { reactive, ref, watch, customRef } from "vue";
import { fetchUserList, useApi, DataResponse } from "./hook/useApi";
import { useDebounce } from "./hook/useDebounce";
import { useThrottle } from "./hook/useThrottle";
const isLoading = ref(false);
const result = ref([]);
const fetchUser = async () => {
  isLoading.value = true;
  const { loading, error, result: res, fetchResource } = useApi(fetchUserList);
  await fetchResource();
  isLoading.value = loading.value;
  result.value = res.value.data;
};

const keyword = ref("hook");
let searchWord = ref("hook");
const Search = () => {
  searchWord.value = keyword.value;
  console.log();
};
watch(keyword, useDebounce(Search, 2000));
let client = reactive({ clientX: 0, clientY: 0 });
const mousemove = useThrottle((e: MouseEvent) => {
  client.clientX = e.clientX;
  client.clientY = e.clientY;
}, 1000);

function useCustomerDebounce(value: string, delay = 200) {
  let timer: NodeJS.Timeout | null = null;
  return customRef((track, trigger) => {
    return {
      get() {
        track();
        return value;
      },
      set(newValue: string) {
        if (newValue != value) {
          clearTimeout(timer!);
          timer = setTimeout(() => {
            value = newValue;
            trigger();
          }, delay);
        }
      },
    };
  });
}

const text = useCustomerDebounce("text");
</script>
<style lang="scss">
.area {
  height: 100px;
  background-color: red;
}
</style>
