<template>
  <div>
    <base-area @changeArea="getArea"></base-area>
  </div>
</template>

<script lang="ts" setup>
const getArea = (data: object) => {
  console.log(data);
};
</script>

<style lang="scss" scoped></style>
