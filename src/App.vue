<template>
  <router-view />
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
