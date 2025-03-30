<script setup>
import { ref } from 'vue'

defineProps({
    title: String,
    description: String,
    github_language: String,
    github_forks: String,
    github_stars: String,
    cover: String
})
</script>

<template>
    <div class="card">
        <div class="card-image">
            <img
                data-v-962047bb
                :src="cover"
            />
        </div>
        <div class="card-content">
            <h2 class="card-title">{{ title }}</h2>
            <p class="card-text">{{ description }}</p>
            <div class="card-meta">
                <img alt="GitHub top language" :src="github_language" />
                <img alt="GitHub Repo Forks" :src="github_forks" />
                <img alt="GitHub Repo stars" :src="github_stars" />
            </div>
            <div class="card-actions">
                <a href="https://cn.vuejs.org/">查看更多</a>
            </div>
        </div>
    </div>
</template>

<style scoped>
.card {
    max-width: 320px;
    margin: 0 auto;
    background: white;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

/* Card Image */
.card-image {
    position: relative;
    height: 200px;
    overflow: hidden;
}

.card-image img {
    width: 100%;
    height: 100%;
    object-fit: fit;
}

.card:hover .card-image img {
    transform: scale(1.05);
}

/* Card Content */
.card-content {
    padding: 1.5rem;
}

/* Card Title */
.card-title {
    font-size: 1.8rem;
    margin-bottom: 0.8rem;
    color: #2c3e50;
    font-weight: 600;
}

/* Card Text */
.card-text {
    color: #666;
    margin-bottom: 1rem;
    font-size: 1rem;
}

/* Card Meta */
.card-meta {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    color: #888;
    font-size: 0.9rem;
    margin-bottom: 1.2rem;
}
</style>