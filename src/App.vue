<script>
import vHeader from "@/components/vHeader.vue";

export default {
  name: "App",
  data() {
    return {
      reduceMotion: true,
    }
  },
  methods: {
    setReduceMotions(value) {
      this.reduceMotion = value;
    }
  },
  components: {
    vHeader,
  }
}
</script>

<template>
  <div class="master" :class="{ 'background-pane-anim': !reduceMotion }">
    <vHeader />
    <router-view />
  </div>
</template>

<style>
:root {
  --header-padding: 25px;
  --header-height: 65px;
  --header-total-size: clac(var(--header-padding) + var(--header-height));
}

:root {
  --title-size: 6rem;
  --secondary-title-size: 3rem;
  --main-text-size: 2rem;
  --secondary-text-size: 1.8;
}

:root {
  --main-color: #EB5E28;

  --clear-color: #FCFCFC;
  --clear-secondary-color: #CCC5B9;

  --dark-color: #252422;
  --dark-secondary-color: #403D39;
}

html {
  font-size: 62.5%;
}

body {
  font-size: 1.6rem;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  font-family: "Libre Caslon Text", serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #0f0f0f;
}

.master {
  width: 100vw;
  height: 100vh;
  max-width: 100vw;
  max-height: 100vh;
  overflow: hidden;
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3% 5%;
  background-color: white;
  background: url("/src/assets/Partiture.png");
  background-repeat: repeat;
  background-size: 600px;
}

.background-pane-anim {
  animation: pane 30s infinite linear;
}

@keyframes pane {
  from {
    background-position: 0 0;
  }

  to {
    background-position: 600px 600px;
  }
}

.main-button {
  border: none;
  padding: 10px 20px;
  font-weight: bold;
  cursor: pointer;
  border-radius: 3px;
  box-shadow: 7px 7px 7px 0px rgba(0, 0, 0, 0.24);
  -webkit-box-shadow: 7px 7px 7px 0px rgba(0, 0, 0, 0.24);
  -moz-box-shadow: 7px 7px 7px 0px rgba(0, 0, 0, 0.24);

  background-color: var(--main-color);
  color: var(--clear-color);
}

.secondary-button {
  font-weight: bold;
  border-radius: 3px;
  cursor: pointer;
  text-decoration: underline;
  box-shadow: 7px 7px 7px 0px rgba(0, 0, 0, 0.24);
  -webkit-box-shadow: 7px 7px 7px 0px rgba(0, 0, 0, 0.24);
  -moz-box-shadow: 7px 7px 7px 0px rgba(0, 0, 0, 0.24);

  border: 2px solid var(--dark-color);
  background-color: var(--clear-color);
  color: var(--dark-color);
}

.secondary-button:hover {
  border: 2px solid var(--main-color);
  color: var(--main-color);
}

strong {
  color: var(--main-color);
}
</style>
