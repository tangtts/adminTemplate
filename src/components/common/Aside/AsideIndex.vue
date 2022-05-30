<template>
  <div>
    <el-menu
      unique-opened
      :default-active="defaultActive"
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
      background-color="#3E464E"
      text-color="#fff"
      active-text-color="#67C23A"
      router
    >
      <menu-item
        v-for="(item, index) in DynamicRoutes"
        :key="index"
        :menuList="item"
      ></menu-item>
    </el-menu>
  </div>
</template>

<script lang="ts" setup>
import { routes } from "../../../router/index";
import { defineComponent, computed, ref, readonly } from "vue";
import MenuItem from "./MenuItem.vue";
import {
  Document,
  Menu as IconMenu,
  Location,
  Menu,
} from "@element-plus/icons-vue";
import { useRouter, useRoute } from "vue-router";
import { styleStore } from "@/store";
import { storeToRefs } from "pinia";
const router = useRouter();
const route = useRoute();
const defaultActive = computed(() => route.path);
const NAME = import.meta.env.VITE_ADMIN_NAME;
const getAllRouters = router.getRoutes();
const store = styleStore();
// TODO 并非动态路由
const DynamicRoutes = computed(() =>
  getAllRouters.filter((item) => !item.redirect)
);

const isCollapse = computed(() =>
  store.asideFoldStatus == "Fold" ? true : false
);
</script>

<style scoped lang="scss">
.el-menu-vertical-demo {
  height: 100vh;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
}
</style>
