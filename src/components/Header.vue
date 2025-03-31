<script setup>
</script>

<template>
    <header>
        <h1><RouterLink to="/">尤雨溪</RouterLink></h1>
        <nav>
            <a href="#about">关于我</a>
            <a href="#work">职业经历</a>
            <a href="#education">教育经历</a>
            <a href="#project">项目</a>
            <a href="#speak">演讲</a>
            <RouterLink to="/chat">聊天</RouterLink>
        </nav>
    </header>
</template>

<style scoped>
header {
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 0rem 2rem;
    position: sticky;
    top: 0;
    z-index: 100;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

nav a {
    margin-left: 1.5rem;
}
</style>