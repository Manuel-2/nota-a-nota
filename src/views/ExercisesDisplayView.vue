<script>
import circleOfNotes from '@/assets/circleOfNotes.svg'
import ClaveDeSolConPentagraDeFondo from '@/assets/ClaveDeSolConPentagraDeFondo.svg'
const icons = [circleOfNotes, ClaveDeSolConPentagraDeFondo];


export default {
  name: "exercises",
  props: ["exercisesData"],
  computed: {
    module() {
      let general = this.exercisesData ? this.exercisesData : {};
      let moduleName = this.$route.query.modulo;
      return general[moduleName];
    },
    moduleTitle() {
      return this.module ? this.module.title : "";
    },
    moduleRoute() {
      return this.module ? this.module.viewRoute : "#";
    },
    exercises() {
      return Object.entries(this.module ? this.module.exercises : [])
    },
    itemIcon() {
      if (this.moduleTitle == "Las notas") {
        return circleOfNotes;
      } else if (this.moduleTitle == "El Pentagrama (clave de sol)") {
        return ClaveDeSolConPentagraDeFondo;
      }
    }
  },
}
</script>

<template>
  <main class="main-container-1">
    <h1 class="exercises-display__title">{{ moduleTitle }}</h1>
    <div class="exercises-display__container">
      <router-link v-for="[key, data] in exercises" class="exercises-display__exercise-item"
        :to="{ path: moduleRoute, query: { exercise: key } }">
        <img :src="itemIcon" alt="exercise icon">
        <p>{{ data.name }}</p>
      </router-link>
    </div>
  </main>
</template>

<style scoped>
.exercises-display__title {
  font-size: var(--title-size);
  color: var(--dark-color);
  border-bottom: 3px solid var(--dark-color);
  margin-bottom: 30px;
}

.exercises-display__container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
}

.exercises-display__exercise-item {
  width: 200px;
  background-color: var(--clear-color);
  border-radius: 5px;
  margin: 30px;
  padding: 20px;
  text-decoration: none;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  img {
    width: 150px;
    height: 150px;
    margin-bottom: 10px;
    /* background-color: gray; */
    border-radius: 3px;
    border: 3px solid gray;
    padding: 10px;
  }

  p {
    font-size: var(--main-text-size);
    color: var(--dark-color);
  }
}
</style>
