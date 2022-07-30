<template>
  <div  :class="store.mode == 'dark' ? 'dark' : 'light'">
    <el-config-provider :locale="locale">
      <div class="darkBg" id="app">
        <router-view></router-view>
        <el-button type="warning" @click="changeMode">切换背景颜色</el-button>
      </div>
    </el-config-provider>
  </div>
</template>
<script lang="ts" setup>
import { defineComponent, onMounted, ref } from "vue";
import zhCn from "element-plus/lib/locale/lang/zh-cn";
import {styleStore} from "../src/store/index";
import axios from "axios";
const locale = ref(zhCn);

const store = styleStore();
const changeMode = ()=>{
  store.changeMode(store.$state.mode == 'light' ? 'dark' :'light')
}
</script>

<style lang="scss">
html,
body,
#app {
  height: 100vh;
  font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB,
    Microsoft YaHei, Arial, sans-serif;
  margin: 0;
  padding: 0;
}

.darkBg {
  @apply dark:bg-slate-900 dark:text-white;
}
</style>
