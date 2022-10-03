<template>
  <div id="app">
    <div class="mainpage"><the-header /> <router-view /></div>
  </div>
</template>

<script>
import TheHeader from './layouts/TheHeader.vue';

export default {
  name: 'App',
  components: {
    TheHeader,
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;

  z-index: 1;
}
#app {
  font-family: Roboto, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  letter-spacing: 0.01em;
}
body {
  background: white;
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
.slide-fade-enter-active {
  transition: all 0.8s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(100%);
  /* opacity: 0; */
}
.slide-fade1-enter-active {
  transition: all 0.8s ease-out;
}

.slide-fade1-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade1-enter-from,
.slide-fade1-leave-to {
  transform: translateX(-100%);
  /* opacity: 0; */
}
</style>
