<script setup>
import { RouterLink } from "vue-router";

import SidebarLinkList from "../components/SidebarLinkList.vue";

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
      <SidebarLinkList
        status="Needs to be contacted"
        heading="Needs to be contacted"
        :patients="patients"
      />
      <hr />
      <SidebarLinkList
        status="Contacted"
        heading="Contacted"
        :patients="patients"
      />
      <hr />
      <SidebarLinkList
        status="Good"
        heading="Doing good"
        :patients="patients"
      />
    </div>
    <RouterLink to="/doctors-settings" class="btn btn--settings">Settings</RouterLink>
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

  .btn--settings {
    padding: 12px;
  }
}
</style>