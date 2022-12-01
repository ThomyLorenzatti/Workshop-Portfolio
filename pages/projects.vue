<template>
    <div class="mainBox">
        <div v-for="project in gitData" :key="project.id">
            {{project.url.split('/').pop()}}
        </div>
        <div v-for="project in dbData" :key="project.id">
            {{project.name}}
        </div>
    </div>
</template>

<style scoped>
    .mainBox {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100vw;
        height: 100vh;
    }
    a {
        text-decoration: underline;
    }
</style>

<script setup>
    const gitData = await $fetch('/api/repos')
    console.log("gitData", gitData)
    const dbData = await $fetch('/api/projects')
    console.log("dbData", dbData)
</script>
