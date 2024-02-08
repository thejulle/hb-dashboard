<script setup>
import PatientLinkList from "../components/PatientLinkList.vue";

defineProps({
  patients: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="sidebar">
    <div class="sidebar__logo">
      <img src="/logo.svg" alt="Happ Bob logo" />
    </div>
    <div v-if="patients" class="sidebar__patients">
      <h2>Patients</h2>
      <input type="text" placeholder="Search">
      <PatientLinkList
        status="Needs to be contacted"
        heading="Needs to be contacted"
        :patients="patients"
      />
      <hr />
      <PatientLinkList
        status="Contacted"
        heading="Contacted"
        :patients="patients"
      />
      <hr />
      <PatientLinkList
        status="Good"
        heading="Doing good"
        :patients="patients"
      />
    </div>
    <button class="btn btn--settings">Settings</button>
  </div>
</template>

<style lang="scss" scoped>
.sidebar {
  display: flex;
  flex-direction: column;
  row-gap: 60px;
  width: var(--sidebar-width);
  min-height: 100%;
  margin-left: auto;
  padding: 40px 24px 45px;
  // border-left: 1px solid var(--blue-tint-dark);

  &__logo {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 96px;
  }

  h2 {
    font-size: 32px;
    margin-bottom: 24px;
    padding-left: 8px;
  }

  input[type="text"] {
    width: 100%;
    margin-bottom: 60px;
    padding: 10px 16px;
    font-size: 14px;
    border: 1px solid #A6A6A6;
    border-radius: 100px;
  }
}
</style>