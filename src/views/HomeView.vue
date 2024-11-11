<script>
import circleOfNotes from '@/assets/circleOfNotes.svg'
import ClaveDeSolConPentagraDeFondo from '@/assets/ClaveDeSolConPentagraDeFondo.svg'
const icons = [circleOfNotes, ClaveDeSolConPentagraDeFondo];

export default {
  name: 'HomeView',
  props: ["exercisesData"],
  data: () => {
    return {
      icons,
    }
  },
  components: {
  },
  methods: {
    routeOfIcon(iconName) {
      for(let i = 0; i < icons.length; i++){
        if(icons[i].includes(iconName)){
          return icons[i];
        }
      }
      return icons[1];
    }
  },
  mounted() {
  },
  computed: {
    exercisesGeneral() {
      return this.exercisesData ? Object.entries(this.exercisesData) : [];
    },
  },
}
</script>


<template>
  <main class="main-container-1">
    <div v-for="[key, exercise] in exercisesGeneral" class="exercise-group" :key="key">
      <h3 class="exercise-group__title">{{ exercise.title }}</h3>
      <router-link class="exercise-group__content" :to="{ path: '/ejercicios', query: { modulo: key } }">
        <img class="exercise-group__icon" :src="routeOfIcon(exercise.icon)" alt="exercise icon">
        <p class="exercise-group__description">{{ exercise.description }}</p>
        <p class="exercise-group__progress">Progreso: 0/{{ Object.keys(exercise.exercises).length }}</p>
      </router-link>
    </div>
  </main>
</template>

<style scoped>
.main {
  width: 70%;
  height: 100%;
  padding: 30px 50px;
  margin-top: 50px;
  border-radius: 5px;
  background-color: #afafaf;
}

.exercise-group {
  width: 80%;
  margin: 0 0 50px 0;
  text-align: start;
}

.exercise-group__title {
  font-size: var(--secondary-title-size);
  color: var(--dark-color);
  margin-bottom: 10px;
}

.exercise-group__content {
  width: 100%;
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
  font-size: var(--main-text-size);
  cursor: pointer;
  padding: 15px;
  text-decoration: none;
  color: var(--dark-color);

  background-color: var(--clear-color);
  border-radius: 3px;
  border: none;

  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}

.exercise-group__icon {
  width: 100px;
  height: 100px;
  padding: 7px;
  border: solid 2px black;
}

.exercise-group__description {
  text-align: left;
  max-width: 40%;
  margin: 0 20px;
}
</style>
