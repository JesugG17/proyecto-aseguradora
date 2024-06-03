<script setup>
import { RouterLink, RouterView } from 'vue-router';
import Header from './components/Header.vue'

</script>

<template>
  <Header></Header>
  <RouterLink to="/about">Ir about</RouterLink>
  <RouterView />
</template>

<style scoped>

</style>
