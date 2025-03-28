<script setup>
import Header from './components/Header.vue';
import TextContent from './components/TextContent.vue';
import Footer from './components/Footer.vue';
import Intro from './components/intro.vue';
import Work from './components/Work.vue';
import Education from './components/Education.vue';
import Project from './components/Project.vue';
import Speak from './components/Speak.vue';
</script>

<template>
  <Header>
  </Header>
  <main>
    <!-- 个人简介 -->
    <TextContent id="about" title="个人简介">
      <Intro></Intro>
    </TextContent>
    <!-- 职业经历 -->
    <TextContent id="work" title="职业经历">
      <Work></Work>
    </TextContent>
   <!-- 教育背景 --> 
    <TextContent id="education" title="教育背景">
      <Education></Education>
    </TextContent>
    <!-- 项目 -->
    <TextContent id="project" title="项目">
      <Project></Project>
    </TextContent>
    <!-- 演讲 -->
    <TextContent id="speak" title="演讲">
      <Speak></Speak>
    </TextContent>
  </main>
  <Footer></Footer>
</template>

<style scoped>
</style>
