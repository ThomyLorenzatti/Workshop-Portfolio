<template>
  <Header>
    Thomy Lorenzatti
  </Header>
  <div class="mainBody">
    <div class="circles">
      <div class="circleLarge">
        <div class="circleMedium"></div>
        <div class="circleSmall"></div>
      </div>
    </div>
    <slot />
  </div>
</template>

<style scoped>
  .mainBody {
    height: 95vh;
    overflow: hidden;
    z-index: -1;
    top: 5vh;
    position: absolute;
    background-color: #fff;
    background-image: radial-gradient(#000 3%, transparent 5%),
      radial-gradient(#fff 10%, transparent 5%);
    background-size: 40px 40px;
    background-position: 0 0, 30px 30px;
    background-repeat: repeat;
  }
  .circles {
    width: 100vw;
    height: 100vw;
    position: absolute;
    left: -20vw;
    z-index: -1;
    overflow: hidden;
  }
  .circleLarge {
    width: 60vw;
    height: 60vw;
    top: 20vw;
    overflow: hidden;
    position: absolute;
    border-radius: 50%;
    background: #242424;
    animation: ripple 15s infinite;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: -1;
  }
  .circleMedium {
    width: 40vw;
    height: 40vw;
    overflow: hidden;
    position: absolute;
    border-radius: 50%;
    background: #353535;
    animation: ripple 15s infinite;
    z-index: -1;
  }
  .circleSmall {
    width: 20vw;
    height: 20vw;
    overflow: hidden;
    position: absolute;
    border-radius: 50%;
    background: #4d4d4d;
    animation: ripple 15s infinite;
    z-index: -1;
  }

  @keyframes ripple{
    0%{
      transform: scale(0.8);
    }
    
    50%{
      transform: scale(1.2);
    }
    
    100%{
      transform: scale(0.8);
    }
  }
</style>

<script setup>
</script>