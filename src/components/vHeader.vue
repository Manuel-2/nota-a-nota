<template>
  <header class="header">
    <div class="header__group">
      <img src="@/assets/Face.svg" alt="logo" class="header__logo">
      <h2 class="header__app-name">Nota a Nota</h2>
    </div>
    <div class="header__group">
      <nav class="header__nav">
        <ul>
          <li>
            <router-link to="#">Home</router-link>
          </li>
          <li>
            <router-link to="#">exercies</router-link>
          </li>
          <li>
            <router-link to="#">about</router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.header {
  width: 100%;
  /* max-width: 1800px; */
  max-height: var(--header-height);
  display: flex;
  justify-content: space-between;
  padding: 0 2%;

  color: var(--dark-color);
  border-top: solid 4px black;

  background: rgb(255, 255, 255);
  background: linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 50%, rgba(0, 0, 255, 0) 100%);
}

.header__group {
  display: flex;
  align-items: center;
}

.header__logo {
  height: 80px;
  position: relative;
  top: -30%;
  color: red;
}

.header__app-name {
  font-size: 3.8rem;
}

.header__nav {
  ul {
    display: flex;

    li {
      margin: 0 30px;
      list-style: none;

      a {
        text-decoration: none;
        font-size: 2.5rem;
        font-weight: bold;
        color: var(--dark-color);
      }

      a:hover {
        color: var(--main-color);
      }
    }
  }
}
</style>
