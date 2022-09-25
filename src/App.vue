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
          id: 2,
          name: 'Erica Svejderud',
          gender: 'Female',
          age: '10',
          status: 'Needs to be contacted',
          image: '/Profile-1.png',
          latestGlucoseValue: '278',
          latestGlucoseTime: '5 min ago',
          latestGlucoseTrend: 'up',
          latestInsulinDose: '2 weeks ago',
          timeInRange: {
            last24Hours: '30',
            week: '40',
            month: '45'
          },
          steps: {
            last24Hours: '2,215',
            week: '4,322',
            month: '2,956'
          },
          mood: {
            last24Hours: '55',
            week: '52',
            month: '59',
          },
          moodAverage: {
            last24Hours: 'Negative',
            week: 'Positive',
            month: 'Negative'
          },
        },
        {
          id: 2,
          name: 'Jakob Smedhagen',
          gender: 'Male',
          age: '12',
          status: 'Needs to be contacted',
          image: '/Profile.png',
          latestGlucoseValue: '278',
          latestGlucoseTime: '5 min ago',
          latestGlucoseTrend: 'up',
          latestInsulinDose: '2 weeks ago',
          timeInRange: {
            last24Hours: '30',
            week: '40',
            month: '45'
          },
          steps: {
            last24Hours: '2,215',
            week: '4,322',
            month: '2,956'
          },
          mood: {
            last24Hours: '55',
            week: '52',
            month: '59',
          },
          moodAverage: {
            last24Hours: 'Negative',
            week: 'Positive',
            month: 'Negative'
          },
        },
        {
          id: 1,
          name: 'Tobias Gerhardsson',
          gender: 'Male',
          age: '7',
          status: 'Good',
          image: '/Profile.png',
          latestGlucoseValue: '123',
          latestGlucoseTime: '3 min ago',
          latestGlucoseTrend: 'same',
          latestInsulinDose: '3 weeks ago',
          timeInRange: {
            last24Hours: '67',
            week: '72',
            month: '70'
          },
          steps: {
            last24Hours: '4,480',
            week: '7,389',
            month: '8,711'
          },
          mood: {
            last24Hours: '66',
            week: '82',
            month: '80'
          },
          moodAverage: {
            last24Hours: 'Positive',
            week: 'Positive',
            month: 'Positive'
          }
        },
        {
          id: 1,
          name: 'Cecilia Bingert',
          gender: 'Female',
          age: '14',
          status: 'Good',
          image: '/Profile-2.png',
          latestGlucoseValue: '123',
          latestGlucoseTime: '3 min ago',
          latestGlucoseTrend: 'same',
          latestInsulinDose: '3 weeks ago',
          timeInRange: {
            last24Hours: '67',
            week: '72',
            month: '70'
          },
          steps: {
            last24Hours: '4,480',
            week: '7,389',
            month: '8,711'
          },
          mood: {
            last24Hours: '66',
            week: '82',
            month: '80'
          },
          moodAverage: {
            last24Hours: 'Positive',
            week: 'Positive',
            month: 'Positive'
          }
        },
        {
          id: 1,
          name: 'Linn Marcusson',
          gender: 'Female',
          age: '11',
          status: 'Good',
          image: '/Profile-1.png',
          latestGlucoseValue: '123',
          latestGlucoseTime: '3 min ago',
          latestGlucoseTrend: 'same',
          latestInsulinDose: '3 weeks ago',
          timeInRange: {
            last24Hours: '67',
            week: '72',
            month: '70'
          },
          steps: {
            last24Hours: '4,480',
            week: '7,389',
            month: '8,711'
          },
          mood: {
            last24Hours: '66',
            week: '82',
            month: '80'
          },
          moodAverage: {
            last24Hours: 'Positive',
            week: 'Positive',
            month: 'Positive'
          }
        },
        {
          id: 1,
          name: 'Fredrik Camén',
          gender: 'Male',
          age: '13',
          status: 'Good',
          image: '/Profile.png',
          latestGlucoseValue: '123',
          latestGlucoseTime: '3 min ago',
          latestGlucoseTrend: 'same',
          latestInsulinDose: '3 weeks ago',
          timeInRange: {
            last24Hours: '67',
            week: '72',
            month: '70'
          },
          steps: {
            last24Hours: '4,480',
            week: '7,389',
            month: '8,711'
          },
          mood: {
            last24Hours: '66',
            week: '82',
            month: '80'
          },
          moodAverage: {
            last24Hours: 'Positive',
            week: 'Positive',
            month: 'Positive'
          }
        },
        {
          id: 3,
          name: 'Aarti Shinde',
          gender: 'Female',
          age: '8',
          status: 'Contacted',
          image: '/Profile-2.png',
          latestGlucoseValue: '202',
          latestGlucoseTime: '5 sec ago',
          latestGlucoseTrend: 'down',
          latestInsulinDose: '1 week ago',
          timeInRange: {
            last24Hours: '68',
            week: '42',
            month: '38'
          },
          steps: {
            last24Hours: '5,320',
            week: '2,745',
            month: '3,179'
          },
          mood: {
            last24Hours: '55',
            week: '68',
            month: '75'
          },
          moodAverage: {
            last24Hours: 'Positive',
            week: 'Negative',
            month: 'Negative',
          },
        },
        /*
        {
          id: 3,
          name: 'Aarti Shinde',
          gender: 'Female',
          age: '8',
          status: 'Contacted',
          image: '/Profile-2.png',
          latest: {
            insulinDose: '',
            insulinDoseTime: '1 week ago',
            glucoseValue: 202,
            glucoseTime: '5 seconds ago',
            glucoseTrend: 'down',
          }
          last24Hours: {
            timeInRange: 68,
            steps: 5320,
            mood: 55,
            moodAverage: 'Positive',
          },
          week: {
            timeInRange: 42,
            steps: 2745,
            mood: 68,
            moodAverage: 'Negative',
          },
          month: {
            timeInRange: 38,
            steps: 3179,
            mood: 75,
            moodAverage: 'Negative',
          },
        }
        */
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
        <h3>Needs to be contacted</h3>
        <ul>
          <li v-for="patient in patients.filter(i => i.status === 'Needs to be contacted')">
            <button @click="activePatient = patient" :class="[{ active: activePatient === patient }, {good: patient.status == 'Good'}, {'needs-to-be-contacted': patient.status == 'Needs to be contacted'}, {contacted: patient.status == 'Contacted'}]">
              <img :src="patient.image" :alt="patient.name">
              <div>
                <h4>{{ patient.name }}</h4>
                <p>{{ patient.gender }}, {{ patient.age }} years old</p>
              </div>
            </button>
          </li>
        </ul>
        <h3>Contacted</h3>
        <ul>
          <li v-for="patient in patients.filter(i => i.status === 'Contacted')">
            <button @click="activePatient = patient" :class="[{ active: activePatient === patient }, {good: patient.status == 'Good'}, {'needs-to-be-contacted': patient.status == 'Needs to be contacted'}, {contacted: patient.status == 'Contacted'}]">
              <img :src="patient.image" :alt="patient.name">
              <div>
                <h4>{{ patient.name }}</h4>
                <p>{{ patient.gender }}, {{ patient.age }} years old</p>
              </div>
            </button>
          </li>
        </ul>
        <h3>Doing good</h3>
        <ul>
          <li v-for="patient in patients.filter(i => i.status === 'Good')">
            <button @click="activePatient = patient" :class="[{ active: activePatient === patient }, {good: patient.status == 'Good'}, {'needs-to-be-contacted': patient.status == 'Needs to be contacted'}, {contacted: patient.status == 'Contacted'}]">
              <img :src="patient.image" :alt="patient.name">
              <div>
                <h4>{{ patient.name }}</h4>
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
        <div class="patient__top__latest-glucose">
          <p>
            <span :class="activePatient.latestGlucoseTrend">{{ activePatient.latestGlucoseValue }}</span><br>
            mg/dL<br>
            {{ activePatient.latestGlucoseTime }}
          </p>
        </div>
        <div class="patient__top__buttons">
          <button class="btn btn--outline" :class="[{good: activePatient.status == 'Good'}, {'needs-to-be-contacted': activePatient.status == 'Needs to be contacted'}, {contacted: activePatient.status == 'Contacted'}]">{{ activePatient.status }}</button>
          <button class="btn">Contact patient</button>
        </div>
      </div>
      <div class="patient__cards">
        <div>
          <h2>Last 24 hrs</h2>
          <h3>Time in range (TIR)</h3>
          <hr>
          <div>
            <div
              class="tir-graph"
              :style="{background: 'radial-gradient( circle closest-side, #fff 0, #fff 77%, transparent 77%, transparent 100%, #fff 0), conic-gradient( from 180deg, #a04cbe 0, #a04cbe ' + ((100 - activePatient.timeInRange.last24Hours) * .25) + '%, #710f95 0, #710f95 ' + ((100 - activePatient.timeInRange.last24Hours) * .5) + '%, #cce0ff 0, #cce0ff ' + ((100 - activePatient.timeInRange.last24Hours) * .5 + +activePatient.timeInRange.last24Hours) + '%, #c79a00 0, #c79a00 ' + ((100 - activePatient.timeInRange.last24Hours) * .75 + +activePatient.timeInRange.last24Hours) + '%, #ffca28 0, #ffca28 100%)'}"
            ></div>
            <div class="value">
              <p>
                <span>{{ activePatient.timeInRange.last24Hours }}%</span>
                Target range: <b>70-180mg/dL</b>
              </p>
            </div>
          </div>
          <h3>Steps</h3>
          <hr>
          <div>
            <img src="/steps.svg" alt="Steps icon">
            <div class="value">
              <p>
                Total
                <span>{{ activePatient.steps.last24Hours }}</span>
                Last 24 hours
              </p>
            </div>
          </div>
          <h3>Mood</h3>
          <hr>
          <div>
            <img v-if="activePatient.moodAverage.last24Hours === 'Positive'" src="/mood-all-good.svg" alt="Mood: Positive">
            <img v-else src="/mood-contacted.svg" alt="Mood: Negative">
            <div class="value">
              <p>
                <span>{{ activePatient.mood.last24Hours }}%</span>
                {{ activePatient.moodAverage.last24Hours }} on average
              </p>
            </div>
          </div>
        </div>
        <div>
          <h2>Week</h2>
          <h3>Time in range (TIR)</h3>
          <hr>
          <div>
            <div
              class="tir-graph"
              :style="{background: 'radial-gradient( circle closest-side, #fff 0, #fff 77%, transparent 77%, transparent 100%, #fff 0), conic-gradient( from 180deg, #a04cbe 0, #a04cbe ' + ((100 - activePatient.timeInRange.week) * .25) + '%, #710f95 0, #710f95 ' + ((100 - activePatient.timeInRange.week) * .5) + '%, #cce0ff 0, #cce0ff ' + ((100 - activePatient.timeInRange.week) * .5 + +activePatient.timeInRange.week) + '%, #c79a00 0, #c79a00 ' + ((100 - activePatient.timeInRange.week) * .75 + +activePatient.timeInRange.week) + '%, #ffca28 0, #ffca28 100%)'}"
            ></div>
            <div class="value">
              <p>
                <span>{{ activePatient.timeInRange.week }}%</span>
                Target range: <b>70-180mg/dL</b>
              </p>
            </div>
          </div>
          <h3>Steps</h3>
          <hr>
          <div>
            <img src="/steps.svg" alt="Steps icon">
            <div class="value">
              <p>
                Average
                <span>{{ activePatient.steps.week }}</span>
                Steps/day
              </p>
            </div>
          </div>
          <h3>Mood</h3>
          <hr>
          <div>
            <img v-if="activePatient.moodAverage.week === 'Positive'" src="/mood-all-good.svg" alt="Mood: Positive">
            <img v-else src="/mood-contacted.svg" alt="Mood: Negative">
            <div class="value">
              <p>
                <span>{{ activePatient.mood.week }}%</span>
                {{ activePatient.moodAverage.week }} on average
              </p>
            </div>
          </div>
        </div>
        <div>
          <h2>Month</h2>
          <h3>Time in range (TIR)</h3>
          <hr>
          <div>
            <div
              class="tir-graph"
              :style="{background: 'radial-gradient( circle closest-side, #fff 0, #fff 77%, transparent 77%, transparent 100%, #fff 0), conic-gradient( from 180deg, #a04cbe 0, #a04cbe ' + ((100 - activePatient.timeInRange.month) * .25) + '%, #710f95 0, #710f95 ' + ((100 - activePatient.timeInRange.month) * .5) + '%, #cce0ff 0, #cce0ff ' + ((100 - activePatient.timeInRange.month) * .5 + +activePatient.timeInRange.month) + '%, #c79a00 0, #c79a00 ' + ((100 - activePatient.timeInRange.month) * .75 + +activePatient.timeInRange.month) + '%, #ffca28 0, #ffca28 100%)'}"
            ></div>
            <div class="value">
              <p>
                <span>{{ activePatient.timeInRange.month }}%</span>
                Target range: <b>70-180mg/dL</b>
              </p>
            </div>
          </div>
          <h3>Steps</h3>
          <hr>
          <div>
            <img src="/steps.svg" alt="Steps icon">
            <div class="value">
              <p>
                Average
                <span>{{ activePatient.steps.month }}</span>
                Steps/day
              </p>
            </div>
          </div>
          <h3>Mood</h3>
          <hr>
          <div>
            <img v-if="activePatient.moodAverage.month === 'Positive'" src="/mood-all-good.svg" alt="Mood: Positive">
            <img v-else src="/mood-contacted.svg" alt="Mood: Negative">
            <div class="value">
              <p>
                <span>{{ activePatient.mood.month }}%</span>
                {{ activePatient.moodAverage.month }} on average
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
            <!-- <img src="/latest-glucose.svg" alt="Latest glucose value"> -->
            <div :class="activePatient.latestGlucoseTrend">
              <p>
                <span>{{ activePatient.latestGlucoseValue }}</span><br>mg/dL
              </p>
            </div>
            <p class="patient__overview__grid__time">{{ activePatient.latestGlucoseTime }}</p>
          </div>
          <div class="patient__overview__grid__average-glucose">
            <h3>Average glucose value</h3>
            <!-- <img src="/average-glucose.svg" alt="Average glucose value"> -->
            <div>
              <div>
                <p>Daily</p>
                <div>
                  <p><span>7.8</span><br>mg/dL</p>
                </div>
              </div>
              <div>
                <p>Weekly</p>
                <div>
                  <p><span>7.8</span><br>mg/dL</p>
                </div>
              </div>
            </div>
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
            <p class="patient__overview__grid__time">{{ activePatient.latestInsulinDose }}</p>
          </div>
        </div>
      </div>
      <div class="patient__timeline">
        <h2>Timeline view</h2>
        <div>
          <img src="/timeline-2.png" alt="Timeline">
        </div>
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
</style>
