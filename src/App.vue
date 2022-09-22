<script setup>
import { RouterLink, RouterView } from "vue-router";
// import HelloWorld from "./components/HelloWorld.vue";
</script>
<script>
export default {
  data() {
    return {
      activePatient: null,
      patients: [
        {
          id: 1,
          name: 'Tobias Gerhardsson',
          gender: 'Male',
          age: '7',
          image: '/Profile.png',
          latestGlucoseValue: '48 seconds ago',
          latestInsulinDose: '3 weeks ago',
          timeInRange: {
            last24Hours: '92%',
            week: '88%',
            month: '75%'
          },
          steps: {
            last24Hours: '4,400',
            week: '36,250',
            month: '85,400'
          },
          mood: {
            last24Hours: '92%',
            week: '88%',
            month: '75%'
          }
        },
        {
          id: 2,
          name: 'Erica Svejderud',
          gender: 'Female',
          age: '10',
          image: '/Profile-1.png',
          latestGlucoseValue: '31 minutes ago',
          latestInsulinDose: '2 weeks ago',
          timeInRange: {
            last24Hours: '81%',
            week: '76%',
            month: '55%'
          },
          steps: {
            last24Hours: '2,400',
            week: '11,250',
            month: '43,400'
          },
          mood: {
            last24Hours: '62%',
            week: '65%',
            month: '70%'
          }
        },
        {
          id: 3,
          name: 'Aarti Shinde',
          gender: 'Female',
          age: '8',
          image: '/Profile-2.png',
          latestGlucoseValue: '1 hour ago',
          latestInsulinDose: '1 week ago',
          timeInRange: {
            last24Hours: '92%',
            week: '88%',
            month: '75%'
          },
          steps: {
            last24Hours: '5,900',
            week: '12,750',
            month: '39,400'
          },
          mood: {
            last24Hours: '99%',
            week: '91%',
            month: '88%'
          }
        }
      ]
    }
  },
  mounted() {
    this.activePatient = this.patients[0];
  },
}
</script>

<template>
  <aside>
    <div class="sidebar">
      <div v-if="patients" class="sidebar__patients">
        <h2>Patients</h2>
        <input type="text" placeholder="Search">
        <!-- <nav>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">About</RouterLink>
        </nav> -->
        <ul>
          <li v-for="patient in patients">
            <button @click="activePatient = patient" :class="{ active: activePatient === patient }">
              <img :src="patient.image" :alt="patient.name">
              <div>
                <h3>{{ patient.name }}</h3>
                <p>{{ patient.gender }}, {{ patient.age }} years old</p>
              </div>
            </button>
          </li>
        </ul>
      </div>
    </div>
  </aside>
  <main>
    <!-- <RouterView /> -->
    <div v-if="activePatient" class="patient">
      <div class="patient__top">
        <div class="patient__top__info">
          <img :src="activePatient.image" :alt="activePatient.name">
          <div>
            <h1>{{ activePatient.name }}</h1>
            <p>{{ activePatient.gender }}, {{ activePatient.age }} years old</p>
          </div>
        </div>
        <div class="patient__top__buttons">
          <button class="btn btn--outline">{Status}</button>
          <button class="btn">Contact patient</button>
        </div>
      </div>
      <div class="patient__cards">
        <div>
          <h2>Last 24 hrs</h2>
          <h3>Time in range (TIR)</h3>
          <hr>
          <div>
            <div class="icon"></div>
            <div class="value">
              <p>
                <span>{{ activePatient.timeInRange.last24Hours }}</span>
                Target range: <b>4.0–10.0 mmol/L</b>
              </p>
            </div>
          </div>
          <h3>Steps</h3>
          <hr>
          <div>
            <div class="icon"></div>
            <div class="value">
              <p>
                <span>{{ activePatient.steps.last24Hours }}</span>
                Steps in total
              </p>
            </div>
          </div>
          <h3>Mood</h3>
          <hr>
          <div>
            <div class="icon"></div>
            <div class="value">
              <p>
                <span>{{ activePatient.mood.last24Hours }}</span>
                Positive on average
              </p>
            </div>
          </div>
        </div>
        <div>
          <h2>Week</h2>
          <h3>Time in range (TIR)</h3>
          <hr>
          <div>
            <div class="icon"></div>
            <div class="value">
              <p>
                <span>{{ activePatient.timeInRange.week }}</span>
                Target range: <b>4.0–10.0 mmol/L</b>
              </p>
            </div>
          </div>
          <h3>Steps</h3>
          <hr>
          <div>
            <div class="icon"></div>
            <div class="value">
              <p>
                <span>{{ activePatient.steps.week }}</span>
                Steps/day in average
              </p>
            </div>
          </div>
          <h3>Mood</h3>
          <hr>
          <div>
            <div class="icon"></div>
            <div class="value">
              <p>
                <span>{{ activePatient.mood.week }}</span>
                Negative on average
              </p>
            </div>
          </div>
        </div>
        <div>
          <h2>Month</h2>
          <h3>Time in range (TIR)</h3>
          <hr>
          <div>
            <div class="icon"></div>
            <div class="value">
              <p>
                <span>{{ activePatient.timeInRange.month }}</span>
                Target range: <b>4.0–10.0 mmol/L</b>
              </p>
            </div>
          </div>
          <h3>Steps</h3>
          <hr>
          <div>
            <div class="icon"></div>
            <div class="value">
              <p>
                <span>{{ activePatient.steps.month }}</span>
                Steps/day in average
              </p>
            </div>
          </div>
          <h3>Mood</h3>
          <hr>
          <div>
            <div class="icon"></div>
            <div class="value">
              <p>
                <span>{{ activePatient.mood.month }}</span>
                Negative on average
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="patient__overview">
        <h2>Overview</h2>
        <div class="patient__overview__grid">
          <div class="patient__overview__grid__latest-glucose">
            <h3>Latest glucose value</h3>
            <img src="/latest-glucose.svg" alt="Latest glucose value">
            <p>{{ activePatient.latestGlucoseValue }}</p>
          </div>
          <div class="patient__overview__grid__average-glucose">
            <h3>Average glucose value</h3>
            <img src="/average-glucose.svg" alt="Average glucose value">
          </div>
          <div class="patient__overview__grid__time-in-range">
            <h3>Weekly Time in Range</h3>
            <img src="/weekly-time-in-range.svg" alt="Weekly time in range">
          </div>
          <div class="patient__overview__grid__stars-collected">
            <h3>Stars collected</h3>
            <img src="/stars-collected.svg" alt="Stars collected">
          </div>
          <div class="patient__overview__grid__latest-insulin-dose">
            <h3>Latest insulin dose</h3>
            <img src="/latest-insulin-dose.svg" alt="Latest insulin dose">
            <p>{{ activePatient.latestInsulinDose }}</p>
          </div>
        </div>
      </div>
      <div class="patient__timeline">
        <h2>Timeline view</h2>
        <!--         
          <div>
          </div>
        -->
        <img src="/timeline-placeholder.svg" alt="Timeline">
      </div>
    </div>
  </main>
  <!-- <header>
    <img
      alt="Vue logo"
      class="logo"
      src="@/assets/logo.svg"
      width="125"
      height="125"
    />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header> -->
</template>

<style lang="scss">
main {
  max-width: calc(var(--container-width) + var(--sidebar-width));
  margin: 0 auto;
  padding: 90px 68px 90px calc(68px + var(--sidebar-width));
}

.btn {
  display: inline-block;
  padding: 20px 28px;
  font-size: 16px;
  font-weight: 500;
  color: var(--white);
  background: var(--blue);
  border: 0;
  border-radius: 120px;

  &--outline {
    padding: 19px 27px;
    color: var(--black);
    background: transparent;
    border: 1px solid var(--gray);
  }
}
</style>
