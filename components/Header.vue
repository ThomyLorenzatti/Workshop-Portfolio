<template>
  <div>
    <NuxtLink to="/">
      <span>
        <slot />
      </span>
    </NuxtLink>
    <NuxtLink to="/projects">
        <button class="button">Projets</button>
    </NuxtLink>
  </div>
</template>