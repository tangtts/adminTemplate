<template>
  <div :class="store.mode == 'dark' ? 'dark' : 'light'">
    <el-config-provider :locale="locale">
      <div class="darkBg">
        <router-view></router-view>
      </div>
    </el-config-provider>
  </div>
</template>
<script lang="ts" setup>
import { defineComponent, onMounted, ref } from "vue";
import zhCn from "element-plus/lib/locale/lang/zh-cn";
import { styleStore } from "store/index";
import axios from "axios";
const locale = ref(zhCn);

const store = styleStore();
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
