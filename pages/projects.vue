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
    import axios from 'axios';
    const config = useRuntimeConfig()

    const { data } = await axios({
        method: 'get',
        url: `https://api.github.com/users/ThomyLorenzatti/repos`,
        headers: {
            Authorization: `Bearer ${config.token}`,
            "Content-Type": "application/json"
        },
    })
    console.log("data", data)
</script>
