<script setup>
import PatientDetails from "../components/PatientDetails.vue";
</script>
<script>
export default {
  data() {
    return {
      activePatient: {
        id: 2,
        name: "Erica Svejderud",
        gender: "Female",
        age: "10",
        status: "Needs to be contacted",
        image: "/Profile-1.png",
        latestGlucoseValue: "278",
        latestGlucoseTime: "5 min ago",
        latestGlucoseTrend: "up",
        latestInsulinDose: "2 weeks ago",
        timeInRange: {
          last24Hours: "30",
          week: "40",
          month: "45",
        },
        steps: {
          last24Hours: "2,215",
          week: "4,322",
          month: "2,956",
        },
        mood: {
          last24Hours: "55",
          week: "52",
          month: "59",
        },
        moodAverage: {
          last24Hours: "Negative",
          week: "Positive",
          month: "Negative",
        },
      },
    };
  },
};
</script>

<template>
  <main>
    <div class="top-section">
      <div>
        <p>Tuesday, 30 Jan 2023</p>
      </div>
      <div>
        <a href="#">Log out</a>
      </div>
    </div>
    <PatientDetails :activePatient="activePatient" />
  </main>
</template>

<style lang="scss" scoped>
main {
  max-width: var(--container-width);
  padding: 32px 32px 45px;
}
</style>