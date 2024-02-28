<script setup>
import TopSection from "../components/TopSection.vue";
import PatientDetails from "../components/PatientDetails.vue";
import Modal from "../components/Modal.vue";
</script>
<script>
export default {
  data() {
    return {
      activePatient: {
          id: 3,
          name: "Tobias Gerhardsson",
          gender: "Male",
          age: "7",
          status: "Good",
          image: "/Profile.png",
          latestGlucoseValue: "123",
          latestGlucoseTime: "3 min ago",
          latestGlucoseTrend: "same",
          latestInsulinDose: "3 weeks ago",
          timeInRange: {
            last24Hours: "67",
            week: "72",
            month: "70",
          },
          steps: {
            last24Hours: "4,480",
            week: "7,389",
            month: "8,711",
          },
          mood: {
            last24Hours: "66",
            week: "82",
            month: "80",
          },
          moodAverage: {
            last24Hours: "Positive",
            week: "Positive",
            month: "Positive",
          },
          daysWithGcmData: '84%',
          avgCalibrationsPerDay: 3.70,
        },
    };
  },
};
</script>

<template>
  <main>
    <TopSection />
    <PatientDetails :activePatient="activePatient" />
    <Modal />
  </main>
</template>

<style lang="scss" scoped>
main {
  max-width: var(--container-width);
  padding: 32px 32px 45px;
}
</style>