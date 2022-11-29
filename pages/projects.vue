<template>
    <div v-for="project in data" :key="project.id">
        {{project.url}}
    </div>
</template>

<style scoped>
a {
    text-decoration: underline;
}
</style>

<script setup>
    const data = await $fetch('/api/repos')
    console.log("data", data)
</script>
