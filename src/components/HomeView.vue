<script setup>
import TextContent from './TextContent.vue';
import Intro from './Intro.vue';
import Work from './Work.vue';
import Education from './Education.vue';
import Project from './Project.vue';
import Speak from './Speak.vue';
</script>
<template>
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
</template>