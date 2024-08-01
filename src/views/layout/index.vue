<script setup lang="ts">

const categoryStorm = useCategoryStore();
onMounted(() => categoryStorm.getCategory());
</script>

<template>
  <LayoutNav/>
  <LayoutFixed/>
  <LayoutHeader/>
  <RouterView/>
  <LayoutFooter/>
</template>

<style scoped>

</style>