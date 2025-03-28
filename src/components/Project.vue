<template>
    <div class="project">
        <section>
            <div class="card">
                <div class="card-image">
                    <img
                        data-v-962047bb
                        src="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20aria-hidden='true'%20role='img'%20class='iconify%20iconify--logos'%20width='37.07'%20height='36'%20preserveAspectRatio='xMidYMid%20meet'%20viewBox='0%200%20256%20198'%3e%3cpath%20fill='%2341B883'%20d='M204.8%200H256L128%20220.8L0%200h97.92L128%2051.2L157.44%200h47.36Z'%3e%3c/path%3e%3cpath%20fill='%2341B883'%20d='m0%200l128%20220.8L256%200h-51.2L128%20132.48L50.56%200H0Z'%3e%3c/path%3e%3cpath%20fill='%2335495E'%20d='M50.56%200L128%20133.12L204.8%200h-47.36L128%2051.2L97.92%200H50.56Z'%3e%3c/path%3e%3c/svg%3e"
                        class="logo vue"
                        alt="Vue logo"
                    />
                </div>
                <div class="card-content">
                    <h2 class="card-title">Vue.js</h2>
                    <p class="card-text">渐进式JavaScript框架。易学易用，性能出色，适用场景丰富的Web前端框架。</p>
                    <div class="card-meta">
                        <img
                            alt="GitHub top language"
                            src="https://img.shields.io/github/languages/top/vuejs/vue"
                        />
                        <img
                            alt="GitHub Repo stars"
                            src="https://img.shields.io/github/forks/vuejs/vue"
                        />
                        <img
                            alt="GitHub Repo stars"
                            src="https://img.shields.io/github/stars/vuejs/vue"
                        />
                    </div>
                    <div class="card-actions">
                        <a href="https://cn.vuejs.org/">查看更多</a>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div class="card">
                <div class="card-image">
                    <img src="https://cn.vite.dev/logo.svg" alt="Vite logo" />
                </div>
                <div class="card-content">
                    <h2 class="card-title">Vite</h2>
                    <p class="card-text">卓越的Web开发工具。Vite是一个超快的前端构建工具，赋能下一代Web应用的发展。</p>
                    <div class="card-meta">
                        <img
                            alt="GitHub top language"
                            src="https://img.shields.io/github/languages/top/vitejs/vite"
                        />
                        <img
                            alt="GitHub Repo stars"
                            src="https://img.shields.io/github/forks/vitejs/vite"
                        />
                        <img
                            alt="GitHub Repo stars"
                            src="https://img.shields.io/github/stars/vitejs/vite"
                        />
                    </div>
                    <div class="card-actions">
                        <a href="https://cn.vuejs.org/">查看更多</a>
                    </div>
                </div>
            </div>
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