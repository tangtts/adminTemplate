<template>
  <div ref="myEcharts" class="darkBg" style="height: 300px">aa</div>
</template>
<script lang="ts" setup>
import { onMounted, onUnmounted, ref } from "vue";
import * as echarts from "echarts";
import { styleStore } from "store/index";
let echart = echarts;
const myEcharts = ref<HTMLElement | null>(null);

const store = styleStore();

onMounted(() => {
  initChart();
});

onUnmounted(() => {
  // echart.dispose(myEcharts.value!);
});

// 基础配置一下Echarts
function initChart() {
  let chart = echart.init(myEcharts.value!, store.mode);
  // 把配置和数据放这里
  chart.setOption({
    xAxis: {
      type: "category",
      data: [
        "一月",
        "二月",
        "三月",
        "四月",
        "五月",
        "六月",
        "七月",
        "八月",
        "九月",
        "十月",
        "十一月",
        "十二月",
      ],
    },
    tooltip: {
      trigger: "axis",
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: [820, 932, 901, 934, 1290, 1330, 1320, 801, 102, 230, 4321, 4129],
        type: "line",
        smooth: true,
      },
    ],
  });
  window.onresize = function () {
    //自适应大小
    chart.resize();
  };
}
</script>
