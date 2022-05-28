<template>
  <el-tabs type="border-card" v-model="defaultCompId" @tab-click="tabClick">
    <el-tab-pane
      v-for="pane in TabsComponents"
      :name="pane.id"
      :label="pane.label"
      :key="pane.id"
    >
      <keep-alive>
        <component
          :is="pane.component"
          v-if="pane.id == defaultCompId"
        ></component>
      </keep-alive>
    </el-tab-pane>
  </el-tabs>
</template>

<script lang="ts" setup>
import { TabsPaneContext } from "element-plus/lib/tokens/tabs";
import { ref } from "vue";
import AnimationOpacity from "./components/Animation-Opacity.vue";
import AnimationZoom from "./components/Animation-Zoom.vue";
import AnimationCollapse from "./components/Animation-Collapse.vue";
import AnimationTranslate from "./components/Animation-Translate.vue";
import AnimationTurn from "./components/Animation-Turn.vue";
const defaultCompId = ref(1);
interface ITabPanel {
  id: number;
  label: string;
  component: any;
}
const TabsComponents: ITabPanel[] = [
  { id: 1, label: "渐隐渐出", component: AnimationOpacity },
  { id: 2, label: "扩大缩小", component: AnimationZoom },
  { id: 3, label: "折叠面板", component: AnimationCollapse },
  { id: 4, label: "上下位移", component: AnimationTranslate },
];
const tabClick = (e: TabsPaneContext) => {
  defaultCompId.value = Number(e.paneName);
};
</script>

<style lang="scss">
.el-card {
  width: 100%;
}
</style>
