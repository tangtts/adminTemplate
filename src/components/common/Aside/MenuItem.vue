<template>
  <el-sub-menu
    v-if="menuList.children && menuList.children.length > 0"
    :key="menuList.path"
    :index="menuList.path"
  >
    <template #title>
      <span>{{ menuList.meta && menuList.meta.title }}</span>
    </template>

    <el-menu-item
      v-for="v in menuList.children"
      :key="v.path"
      :index="v.path"
      :menu-list="v"
    />
  </el-sub-menu>

  <el-menu-item v-else :index="menuList.path">
    <template #title>
      {{ menuList.meta && menuList.meta.title }}
    </template>
  </el-menu-item>
</template>

<script lang="ts" setup>
import { DefineSetupStoreOptions } from "pinia";
import { defineComponent, PropType, defineProps, toRefs } from "vue";
import { RouteRecordRaw } from "vue-router";

const { menuList } = defineProps<{
  menuList: RouteRecordRaw;
}>();
</script>
