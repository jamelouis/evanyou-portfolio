<script setup>
import { ref } from 'vue'

defineProps({
  title: String,
})

</script>

<template>
  <article>
    <h2>{{ title }}</h2>
    <slot></slot>
  </article>
</template>

<style scoped>

article {
  margin-bottom: 1rem;
  background-color: #fff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

article h2 {
  margin-bottom: 1rem;
  color: #2c3e50;
  border-bottom: 2px solid #f1f1f1;
  padding-bottom: 0.5rem;
}

</style>
