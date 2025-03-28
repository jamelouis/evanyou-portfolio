<script setup>
import { ref } from 'vue'

defineProps({
  title: String,
})

</script>

<template>
  <article>
    <h1>{{ title }}</h1>
    <slot></slot>
  </article>
</template>

<style scoped>
</style>
