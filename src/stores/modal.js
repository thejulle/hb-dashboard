import { defineStore } from 'pinia'

export const useModalStore = defineStore('modal', {
  state: () => ({ activeModal: null }),
  actions: {
    changeModal(modal) {
      this.activeModal = modal;
    },
  },
})