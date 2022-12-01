<template>
  <div class="mainBox">
    <NuxtLink to="/" class="homeLink">
      <span>
        <slot />
      </span>
    </NuxtLink>
    <div class="pageLinks">
      <NuxtLink class="links" to="/projects">
        <button class="button">Projets</button>
      </NuxtLink>
      <NuxtLink class="links" to="/contact">
        <button class="button">Contact</button>
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped>
  .mainBox {
      display: flex;
      position: fixed;
      justify-content: space-between;
      align-items: center;
      width: 100vw;
      height: 5vh;
      background-color: #1a1a1a;
      color: white;
  }
  .homeLink {
      margin-left: 2vw;
      font-size: 1.5rem;
      font-weight: 600;
  }
  .pageLinks {
      display: flex;
      justify-content: space-around;
      align-items: center;
      margin-right: 2vw;
    }
    .links {
      padding: 5px 10px 5px 10px;
      border-left: 1px solid white;
      border-right: 1px solid white;
      font-size: 1.1rem;
      background-color: #1a1a1a;
      font-weight: 600;
  }
  .links:hover {
      height: 40px;
      margin-top: 15px;
      transition: all 0.5s;
  }
</style>