<script>
import Blanca from "@/assets/notes/Blanca.svg";
import Corchea from "@/assets/notes/Corchea.svg";
import Negra from "@/assets/notes/Negra.svg";
import Redonda from "@/assets/notes/Redonda.svg";

const particlesNames = [Blanca, Corchea, Negra];
// time in ms
const particleLifeTime = 1500;
const distanceSpawn = 65;

function calcTravelDistance(position, target) {
  let a = Math.pow(position.x - target.x, 2);
  let b = Math.pow(position.y - target.y, 2);
  // yeah quite painful to calc on mouse move
  return Math.sqrt(a + b);
}

export default {
  name: 'LandingPageView',
  data: () => {
    return {
      lastMousePos: {
        x: 0,
        y: 0,
      },
      mousePos: {
        x: 0,
        y: 0,
      },
      travelDistance: 0,
      particles: [],
    }
  },
  beforeRouteLeave(to, from, next) {
    this.$root.setReduceMotions(true);
    next();
  },
  mounted() {
    this.$root.setReduceMotions(false);
  },
  methods: {
    mouseMove(e) {
      this.lastMousePos.x = this.mousePos.x;
      this.lastMousePos.y = this.mousePos.y;
      this.mousePos.x = e.layerX;
      this.mousePos.y = e.layerY;

      let distance = calcTravelDistance(this.mousePos, this.lastMousePos);
      this.travelDistance += distance;
      if (this.travelDistance >= distanceSpawn) {
        this.spawnParticle();
        this.travelDistance = 0;
      }
    },
    spawnParticle() {
      if (!this.mousePos) {
        return
      }
      let particle = {};
      particle.src = particlesNames[Math.floor(Math.random() * particlesNames.length)];
      particle.x = this.mousePos.x;
      particle.y = this.mousePos.y;
      particle.id = particle.y + particle.x * 1080;
      particle.style = {
        top: `${particle.y}px`,
        left: `${particle.x}px`,
      }
      particle.classes = ["particle"];
      particle.classes.push("particle-animation-" + (Math.floor(Math.random() * 3) + 1));

      this.particles.push(particle);
      setTimeout(() => {
        let particleIndex = this.particles.indexOf(particle);
        if (particleIndex != -1) {
          this.particles.splice(particleIndex, 1);
        }
      }, particleLifeTime);
    }
  },
}
</script>


<template>
  <main @mousemove="mouseMove">
    <div class="hero">
      <div class="hero__group hero__group--left">
        <h1>Aprende el <strong>lenguaje</strong> de la <strong>música ♪</strong></h1>
        <p>No importa si no sabes nada sobre partituras, practica con ejercicios interactivos y domina la
          lectura de notación musical.</p>
        <div class="hero__buttons">
          <button class="secondary-button hero__button">Conocer más</button>
          <router-link class="main-button hero__button" to="/">Iniciar</router-link>
        </div>
      </div>
      <div class="hero__group">
        <div></div>
      </div>
    </div>
    <img v-for="(particle, index) in particles" :key="particle.id" :style="particle.style" :src="particle.src"
      :class="particle.classes" />
  </main>
</template>

<style scoped>
main {
  width: 100vw;
  height: 100vh;
  max-width: 100vw;
  max-height: 100vh;
  overflow: hidden;
  position: relative;

  display: flex;
  align-items: center;
  padding: 0% 5%;
  /* background-color: white; */
  /* background: url("/src/assets/Partiture.png"); */
  /* background-repeat: repeat; */
  /* background-size: 600px; */
  /* animation: pane 30s infinite linear; */
}

/* @keyframes pane { */
/*   from { */
/*     background-position: 0 0; */
/*   } */

/*   to { */
/*     background-position: 600px 600px; */
/*   } */
/* } */

.hero {
  height: 100%;
  width: 100%;
  display: flex;
  padding-top: 7%;
  color: var(--dark-color);

  .hero__buttons {
    display: flex;
    justify-content: space-between;
    margin-top: 50px;

    .hero__button {
      width: 250px;
      font-size: var(--main-text-size);
      transition: transform 0.2s;
      text-align: center;
    }

    a {
      text-decoration: none;
    }

    .hero__button:hover {
      transform: scale(1.1);
    }
  }
}

.hero__group--left {
  width: 660px;
  padding: 50px 20px;
  height: fit-content;
  text-align: left;
  box-shadow: 0 0 20px 20px rgba(255, 255, 255, 0.7);
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 50%;

  h1 {
    font-size: var(--title-size);
  }

  p {
    font-size: var(--secondary-title-size);
    margin: 15px 0;
  }
}

.particle {
  position: absolute;
  width: 50px;
  height: 50px;

  pointer-events: none;
  -webkit-user-drag: none;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
}

.particle-animation-1 {
  animation: fall-1 1s ease-in forwards;
}

.particle-animation-2 {
  animation: fall-2 1s ease-in forwards;
}

.particle-animation-3 {
  animation: fall-3 1s ease-in forwards;
}

@keyframes fall-1 {
  from {
    transform: translate(0) rotate3d(0) scale(1);
    opacity: 1;
  }

  to {
    transform: translate(-100px, 200px) rotate3d(3.25, 2.2, 4.1, 400deg) scale(0.8);
    opacity: 0;
  }
}

@keyframes fall-2 {
  from {
    transform: translate(0) rotate3d(0) scale(1);
    opacity: 1;
  }

  to {
    transform: translate(100px, 200px) rotate3d(3.25, 2.2, 4.1, 720deg) scale(0.5);
    opacity: 0;
  }
}

@keyframes fall-3 {
  from {
    transform: translate(0) rotate3d(0) scale(1);
    opacity: 1;
  }

  to {
    transform: translate(0px, 200px) rotate3d(5, 2.5, 1.6, 360deg) scale(0.8);
    opacity: 0;
  }
}
</style>
