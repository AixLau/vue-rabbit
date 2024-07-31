<script setup lang="ts">

const categoryStorm = useCategoryStore();
onMounted(() => categoryStorm.getCategory());
</script>

<template>
  <LayoutFixed/>
  <LayoutHeader/>
  <LayoutNav/>
  <RouterView/>
  <LayoutFooter/>
</template>

<style scoped>

</style>