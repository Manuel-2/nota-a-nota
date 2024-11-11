<script>
import ExerciseHelp from "@/components/ExerciseHelp.vue";

const notes = "Do,Re,Mi,Fa,Sol,La,Si".split(",");

export default {
  name: "Notes",
  props: ["exercisesData"],
  components: {
    ExerciseHelp,
  },
  data() {
    return {
      currentPosition: 0,
      // displayNotes: [],
    };
  },
  methods: {
    computePosition(note) {
      let rotation = note.index * (360 / 7);
      return { transform: `rotate(${rotation}deg)` };
    },
    counterRotation(index) {
      let rotation = index * (360 / 7);
      return { transform: `rotate(${-rotation}deg)` };
    },
    increasePosition() {
      this.currentPosition = (this.currentPosition + 1);
    }
  },
  computed: {
    displayNotes() {
      let notesDisplayContainer = [];
      for (let i = 0; i < 7; i++) {
        let nodeDisplay = {
          value: notes[i],
          index: i,
          style: {
            backgroundColor: "gray",
          }
        }

        if (this.currentExerciseData.notes.includes(notes[i].toLowerCase())) {
          nodeDisplay.value = "__";
          nodeDisplay.style = {
            // textDecoration: "underline",
          };
        } else {
        }

        notesDisplayContainer.push(nodeDisplay);
      }
      return notesDisplayContainer;
    },
    currentExerciseData() {
      if (this.exercisesData) {
        let exerciseName = this.$route.query.exercise;
        let current = this.exercisesData["Las-Notas"].exercises[exerciseName];
        return current;
      }
      return false;
    },
    displayRotation() {
      let rotation = this.currentPosition * (360 / 7);
      return { transform: `rotate(${rotation}deg)` };
    },
    keyboardNotes() {
      let mixNotes = this.currentExerciseData.notes.split(',').slice();
      for (let i = mixNotes.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [mixNotes[i], mixNotes[j]] = [mixNotes[j], mixNotes[i]];
      }
      return mixNotes;
    },
  },
  mounted() {
    // this.setUpDisplayNotes();
  },
}
</script>

<template>
  <main class="notes-main">
    <ExerciseHelp class="instructions" />
    <div v-if="currentExerciseData" class="exercise">
      <div  class="exercise__display" :style="displayRotation">
        <div :style="computePosition(note)" v-for="note in displayNotes" :key="note.index"
          class="display__note-container">
          <div class="display__note" :style="note.style">
            <span :style="counterRotation(note.index)">{{ note.value }}</span>
          </div>
        </div>
      </div>
      <div class="exercise__input">
        <input v-for="note in keyboardNotes" class="input__note" type="button" :value="note">
      </div>
    </div>
  </main>
</template>

<style scoped>
main.notes-main {
  width: 100%;
  height: 100%;
  display: flex;
  padding-top: 50px;
  flex-direction: column;
  position: relative;
}

.instructions {
  position: absolute;
  left: 0;
}

.exercise {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
  justify-content: space-between;
  height: 100%;
}

.exercise__display {
  height: 400px;
  width: 400px;
  border-radius: 50%;
  border: 3px solid var(--dark-color);
  position: relative;
  transition: transform 0.5s;
}

.display__note-container {
  width: 100%;
  height: 100%;
  position: absolute;
}

.display__note {
  width: 100px;
  height: 100px;
  background-color: var(--clear-color);
  border-radius: 50%;
  border: 3px solid var(--dark-color);
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0%;
  left: 50%;
  transform: translate(-50%, -50%);

  user-select: none;

  span {
    font-size: 3rem;
    color: var(--dark-color);
  }
}

.exercise__input {
  margin: 100px;
  display: flex;
  background-color: rgba(0, 0, 0, 0.2);
  border-bottom: none;
  /* border-radius: 10px 10px 0px 0px; */
  border-radius: 10px;
  padding: 20px;
  /* padding-bottom: 30px; */
}

.input__note {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin: 0 15px;
  outline: none;
  border: none;
  font-size: 3rem;
  font-family: "Libre Caslon Text", serif;
  cursor: pointer;

  background-color: var(--clear-color);
  border: 3px solid var(--dark-color);
  color: var(--dark-color);

  box-shadow: rgba(0, 0, 0, 0.1) 0px 6px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  transition: transform 0.25s;
}

.input__note:hover {
  transform: scale(1.15);
}
</style>
