<script setup>
import NavBar from '@/components/NavBar.vue';
import MainContent from "@/components/MainContent.vue";
import ProductList from "@/components/ProductList.vue";
</script>
<template>
  <header>
    <NavBar/>
  </header>

  <main>
    <MainContent/>

  </main>
  <footer>
    <ProductList/>
  </footer>
</template>

<style scoped>

footer{
  height: 72vh;
  width: 99.5vw;
  overflow-x: auto;
  transform: translate(-17.75vw, 82vh);
}
</style>
