<script setup>
import { useRoute } from 'vue-router';
import { useModalStore } from '@/stores/modal';

const route = useRoute();
const modalStore = useModalStore()

defineProps({
  activePatient: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="patient__header">
    <div class="patient__header__patient-meta">
      <img :src="activePatient.image" :alt="activePatient.name">
      <div>
        <h1>{{ activePatient.name }}</h1>
        <p>{{ activePatient.gender }}, {{ activePatient.age }} years old</p>
      </div>
    </div>
    <div class="patient__header__buttons">
      <div class="btn btn--outline btn--status" :class="[{good: activePatient.status == 'Good'}, {'needs-to-be-contacted': activePatient.status == 'Needs to be contacted'}, {contacted: activePatient.status == 'Contacted'}]">{{ activePatient.status }}</div>
      <button
        v-if="route.name === 'patients-view'"
        @click="modalStore.changeModal('shareWithDoctor')"
        class="btn btn--outline"
      >
        Share with doctor
      </button>
      <button
        @click="modalStore.changeModal('csvReports')"
        class="btn btn--outline"
      >
        CSV Reports
      </button>
      <button
        v-if="route.name === 'patients-view'"
        @click="modalStore.changeModal('contactDoctor')"
        class="btn"
      >
        Contact doctor
      </button>
      <button
        v-if="route.name === 'patients-view'"
        @click="modalStore.changeModal('settings')"
        class="btn btn--settings"
      >
        Settings
      </button>
    </div>
  </div>
</template>

<style lang="scss">
.patient__header {
  display: flex;
  justify-content: space-between;
  align-items: center;

  &__patient-meta {
    display: flex;
    gap: 24px;
    align-items: center;

    img {
      width: 90px;
      height: 90px;
      border-radius: 100%;
    }

    h1 {
      margin: 0;
      font-size: 32px;
      line-height: 1.1;
      letter-spacing: 0;
    }

    p {
      margin: 0;
    }
  }

  &__buttons {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    margin-left: auto;

    .btn--status {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 16px 28px 16px 24px;
      color: var(--black);
      border: 1px solid var(--gray);

      &::before {
        content: "";
        display: inline-block;
        width: 24px;
        height: 24px;
        // background: var(--blue);
        background: var(--green);
        border-radius: 100%;
      }
      &.needs-to-be-contacted::before {
        background: var(--yellow);
      }

      &.contacted::before {
        background: var(--purple);
      }
    }
  }
}
</style>