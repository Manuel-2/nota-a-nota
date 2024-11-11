<template>
  <button class="exercise-help">
    <p class="exercise-help__icon">?</p>
    <span class="exercise-help__text">Instrucciones</span>
  </button>
</template>

<style scoped>
.exercise-help {
  outline: none;
  border: none;
  background-color: rgba(0, 0, 0, 0);
  cursor: pointer;
  display: flex;
  align-items: center;
}

.exercise-help__icon {
  background-color: var(--clear-color);
  border: 3px solid var(--dark-color);
  color: var(--dark-color);
  border-radius: 50%;
  width: 5rem;
  height: 5rem;
  font-size: 3.5rem;
  text-align: center;
  margin-right: 15px;
}

.exercise-help__text {
  font-size: 3rem;
  text-decoration: underline;
  color: var(--dark-color);
}
</style>
