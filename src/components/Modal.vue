<script setup>
import { useModalStore } from '@/stores/modal';

const modalStore = useModalStore();

const headings = {
  shareWithDoctor: 'Share with doctor',
  csvReports: 'CSV Reports',
  contactDoctor: 'Contact Doctor',
  settings: 'Settings',
};
</script>

<template>
  <div v-if="modalStore.activeModal" @click.self="modalStore.changeModal(null)" class="modal-overlay">
    <div class="modal">
      <div class="modal__top">
        <h2 v-html="headings[modalStore.activeModal]"></h2>
        <button @click="modalStore.changeModal(null)">&times;</button>
      </div>
      <template v-if="modalStore.activeModal === 'shareWithDoctor'">
        <img src="/modal-share-with-doctor.png" :alt="headings[modalStore.activeModal]">
      </template>
      <template v-else-if="modalStore.activeModal === 'csvReports'">
        <img src="/modal-csv.png" :alt="headings[modalStore.activeModal]">
      </template>
      <template v-else-if="modalStore.activeModal === 'contactDoctor'">
        <img src="/modal-contact-doctor.png" :alt="headings[modalStore.activeModal]">
      </template>
      <template v-else-if="modalStore.activeModal === 'settings'">
        <p style="width: 700px;">Patient settings can be edited here.</p>
      </template>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.modal-overlay {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 1rem;
  background: rgba(0,0,0,.7);
}

.modal {
  max-height: 100vh;
  // max-width: 100%;
  // width: 700px;
  padding: 2rem;
  background: var(--white);
  border-radius: 1rem;
  overflow: auto;

  &__top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 60px;

    h2 {
      margin: 0;
      font-size: 1rem;
      font-weight: 700;
      font-family: var(--font-body);
    }

    button {
      width: 1.5rem;
      height: 1.5rem;
      margin: 0;
      padding: 0;
      background: url(/icon-close.svg) 50% 50% no-repeat var(--white);
      border: 0;
    }
  }
}
</style>