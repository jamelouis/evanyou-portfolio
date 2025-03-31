<script setup>
import Header from './components/Header.vue';
import TextContent from './components/TextContent.vue';
import Footer from './components/Footer.vue';
import Intro from './components/Intro.vue';
import Work from './components/Work.vue';
import Education from './components/Education.vue';
import Project from './components/Project.vue';
import Speak from './components/Speak.vue';
</script>

<template>
  <Header>
  </Header>
  <main>
    <RouterView />
  </main>
  <Footer></Footer>
</template>

<style scoped>
</style>
