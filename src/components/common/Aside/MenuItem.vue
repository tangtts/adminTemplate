<template>
  <div>
    <template v-for="(item, index) in treeData">
      <el-sub-menu
        :index="String(index)"
        v-if="item.children && item.children.length > 0"
      >
        <component :is="item.meta?.icon" />
        <template #title>
          <span>{{ item.meta?.title }}</span>
        </template>
        <TreeMenu :treeData="item.children"></TreeMenu>
      </el-sub-menu>
      <el-menu-item v-else :index="item.path" :key="index">
        <component :is="item.meta?.icon" />
        <template #title>
          <span class="ml-2"> {{ item.meta?.title }}</span>
        </template>
      </el-menu-item>
    </template>
  </div>
</template>
<script lang="ts">
export default {
  name: "TreeMenu",
};
</script>
<script lang="ts" setup>
import { DefineSetupStoreOptions } from "pinia";
import { defineComponent, PropType, toRef, toRefs } from "vue";
import { RouteRecordRaw } from "vue-router";

const { treeData } = defineProps<{
  treeData: RouteRecordRaw[];
}>();
</script>
<style>
svg {
  width: 1rem;
}
</style>
