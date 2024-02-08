<script setup>
import PatientSidebar from "../components/PatientSidebar.vue";
import PatientDetails from "../components/PatientDetails.vue";
</script>
<script>
export default {
  data() {
    return {
      activePatient: null,
      patients: [
        {
          id: 1,
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
        {
          id: 2,
          name: "Jakob Smedhagen",
          gender: "Male",
          age: "12",
          status: "Needs to be contacted",
          image: "/Profile.png",
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
        {
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
        },
        {
          id: 4,
          name: "Cecilia Bingert",
          gender: "Female",
          age: "14",
          status: "Good",
          image: "/Profile-2.png",
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
        },
        {
          id: 5,
          name: "Linn Marcusson",
          gender: "Female",
          age: "11",
          status: "Good",
          image: "/Profile-1.png",
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
          }
        },
        {
          id: 6,
          name: "Fredrik Camén",
          gender: "Male",
          age: "13",
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
        },
        {
          id: 7,
          name: "Aarti Shinde",
          gender: "Female",
          age: "8",
          status: "Contacted",
          image: "/Profile-2.png",
          latestGlucoseValue: "202",
          latestGlucoseTime: "5 sec ago",
          latestGlucoseTrend: "down",
          latestInsulinDose: "1 week ago",
          timeInRange: {
            last24Hours: "68",
            week: "42",
            month: "38",
          },
          steps: {
            last24Hours: "5,320",
            week: "2,745",
            month: "3,179",
          },
          mood: {
            last24Hours: "55",
            week: "68",
            month: "75",
          },
          moodAverage: {
            last24Hours: "Positive",
            week: "Negative",
            month: "Negative",
          },
        },
      ],
    };
  },
  mounted() {
    if (this.$route.params.activePatientId) {
      this.patients.find((patient) => {
        if (patient.id == this.$route.params.activePatientId) {
          this.activePatient = patient;
        }
      });
    // } else {
    //   this.activePatient = this.patients[0];
    }
  },
  watch: {
    $route() {
      if (this.$route.params.activePatientId) {
        this.patients.find((patient) => {
          if (patient.id == this.$route.params.activePatientId) {
            this.activePatient = patient;
          }
        });
      }
    },
  },
};
</script>


<template>
  <aside>
    <PatientSidebar :patients="patients" />
  </aside>
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