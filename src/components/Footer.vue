<script setup>
import { ref, watch, computed } from 'vue';
const count = ref(0);
const quote = ref("点击更新随机一言");

watch(count, async (newCount) => {
    try {
      const res = await fetch("https://uapis.cn/api/say")
      quote.value = await (res.text());
    } catch (error) {
    } finally {
    }
})

const msg = computed(()=>{
    return count.value + ": " + quote.value;
})

</script>

<template>
    <footer>
        <p class="clickable" @click="count++">
            {{ msg  }}
        </p>
        <p>
            &copy;2025
            <a href="https://evanyou.me/">evanyou</a>. All rights reserved.
        </p>
    </footer>
</template>

<style scoped>
footer {
    text-align: center;
    padding: 2rem;
    background-color: #2c3e50;
    color: #ecf0f1;
    margin-top: 3rem;
}

.clickable {
    cursor: pointer;
}
</style>