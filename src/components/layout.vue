<template>
  <el-container class="dark:bg-gray-800 dark:text-white">
    <el-aside width="200px">
      <el-scrollbar>
        <side-bar></side-bar>
      </el-scrollbar>
    </el-aside>

    <el-container>
      <el-header class="font-md">
        <div class="flex justify-end items-center">
          <div>
            <span>Change Color</span>
            <el-color-picker v-model="color" @change="changeColor" />
          </div>
          <div class="ml-2 flex items-center">
            <span>Change Mode</span>

            <el-switch
              @change="changeMode"
              v-model="mode"
              active-value="light"
              inactive-value="dark"
              active-color="#d0d1d2"
              inactive-color="#141414"
              inline-prompt
              :active-icon="Sunny"
              :inactive-icon="Moon"
            />
          </div>
        </div>
      </el-header>
      <el-main>
        <el-scrollbar> <router-view /></el-scrollbar>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { useMediaQuery } from "utils/index";
import { styleStore } from "@/store";
import SideBar from "components/common/Aside/AsideIndex.vue";
import {
  Menu as IconMenu,
  Message,
  Setting,
  Sunny,
  Moon,
} from "@element-plus/icons-vue";

const store = styleStore();

const item = {
  date: "2016-05-02",
  name: "Tom",
  address: "No. 189, Grove St, Los Angeles",
};

type Mode = "light" | "dark";
const mode = ref<Mode>("light");

onMounted(() => {
  const isLight = useMediaQuery("(prefers-color-scheme: light)");
  mode.value = isLight.matches ? "light" : "dark";
  store.$patch({
    mode: mode.value,
  });
});

const color = ref("");
const changeMode = (mode: Mode) => {
  store.$patch({
    mode,
  });
};

const changeColor = (elColor: string) => {
  store.$patch({
    elColor,
  });
};
</script>

<style scoped>
.layout-container-demo .el-header {
  position: relative;
  background-color: var(--el-color-primary-light-7);
  color: var(--el-text-color-primary);
}
.layout-container-demo .el-aside {
  color: var(--el-text-color-primary);
  background: var(--el-color-primary-light-8);
}
.layout-container-demo .el-menu {
  border-right: none;
}
.layout-container-demo .el-main {
  padding: 0;
}
.layout-container-demo .toolbar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  right: 20px;
}
</style>
