<template>
  <div>
    <el-button type="primary" @click="fetchUser">点击请求Api</el-button>
    <span>{{ isLoading }}</span>
    <el-button type="text" v-for="item in result">
      {{ item }}
    </el-button>
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import { fetchUserList, useApi, DataResponse } from "./hook/useApi";
const isLoading = ref(false);
const result = ref([]);
const fetchUser = async () => {
  isLoading.value = true;
  const { loading, error, result: res, fetchResource } = useApi(fetchUserList);
  await fetchResource();
  isLoading.value = loading.value;
  result.value = res.value.data;
};
</script>
