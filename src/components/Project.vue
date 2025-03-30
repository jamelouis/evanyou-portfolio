<script setup>
import { reactive } from "vue";
import Card from "./Card.vue";
const projects = reactive([
    {
        "id": 0,
        "title": "Vue.js",
        "description": "渐进式JavaScript框架。易学易用，性能出色，适用场景丰富的Web前端框架。",
        "github_language": "https://img.shields.io/github/languages/top/vuejs/vue",
        "github_forks": "https://img.shields.io/github/forks/vuejs/vue",
        "github_stars": "https://img.shields.io/github/stars/vuejs/vue",
        "cover": "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20aria-hidden='true'%20role='img'%20class='iconify%20iconify--logos'%20width='37.07'%20height='36'%20preserveAspectRatio='xMidYMid%20meet'%20viewBox='0%200%20256%20198'%3e%3cpath%20fill='%2341B883'%20d='M204.8%200H256L128%20220.8L0%200h97.92L128%2051.2L157.44%200h47.36Z'%3e%3c/path%3e%3cpath%20fill='%2341B883'%20d='m0%200l128%20220.8L256%200h-51.2L128%20132.48L50.56%200H0Z'%3e%3c/path%3e%3cpath%20fill='%2335495E'%20d='M50.56%200L128%20133.12L204.8%200h-47.36L128%2051.2L97.92%200H50.56Z'%3e%3c/path%3e%3c/svg%3e"
    },
    {
        "id": 1,
        "title": "Vite",
        "description": "卓越的Web开发工具。Vite是一个超快的前端构建工具，赋能下一代Web应用的发展。",
        "github_language": "https://img.shields.io/github/languages/top/vitejs/vite",
        "github_forks": "https://img.shields.io/github/forks/vitejs/vite",
        "github_stars": "https://img.shields.io/github/stars/vitejs/vite",
        "cover": "https://cn.vite.dev/logo.svg"
    }
]);

</script>
<template>
    <div class="project">
        <section v-for="project in projects" :key="project.id">
            <Card 
                :title="project.title" 
                :description="project.description"
                :github_language="project.github_language"
                :github_forks="project.github_forks"
                :github_stars="project.github_stars"
                :cover="project.cover"
                ></Card>
        </section>
    </div>
</template>


<style scoped>
.project {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 1rem;
}
</style>