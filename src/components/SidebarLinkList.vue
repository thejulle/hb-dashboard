<script setup>
import { RouterLink } from "vue-router";

defineProps({
  status: {
    type: String,
    required: true,
  },
  heading: {
    type: String,
    required: true,
  },
  patients: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <h3 v-html="heading"></h3>
  <ul>
    <li v-for="patient in patients.filter(i => i.status === this.status)" :key="patient.id">
      <RouterLink
        :to="'/patient/' + patient.id"
        :class="[
          { good: patient.status == 'Good' },
          { 'needs-to-be-contacted': patient.status == 'Needs to be contacted' },
          { contacted: patient.status == 'Contacted' }
        ]"
      >
        <img :src="patient.image" :alt="patient.name" />
        <div>
          <h4>{{ patient.name }}</h4>
          <p>{{ patient.gender }}, {{ patient.age }} years old</p>
        </div>
      </RouterLink>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
h3 {
  margin-bottom: 24px;
  font-size: 16px;
  letter-spacing: 0;
}

ul {
  display: flex;
  flex-direction: column;
  gap: 8px;
  list-style: none;
  // margin: 24px 0 0;
  margin: 0;
  padding: 0;

  a {
    display: flex;
    gap: 12px;
    align-items: center;
    width: 100%;
    padding: 8px;
    font-size: 14px;
    line-height: 1.5;
    color: var(--black);
    border-radius: 32px 8px 8px 32px;
    cursor: pointer;

    &:hover,
    &:focus {
      text-decoration: none;
      background: #dbebfe;
    }

    &.router-link-active {
      background: var(--blue-tint-dark);
    }

    img {
      width: 42px;
      height: 42px;
      border-radius: 100%;
    }

    h4 {
      margin: 0;
      font-size: 14px;
      line-height: 1.5;
      letter-spacing: -0.0014em;
      font-weight: 700;
      font-family: var(--font-body);

      &::before {
        content: "";
        display: inline-block;
        width: 6px;
        height: 6px;
        margin-right: 6px;
        background: var(--green);
        border-radius: 100%;
        transform: translateY(-1px);
      }
    }

    p {
      margin: 0;
    }

    &.needs-to-be-contacted {
      h4::before {
        background: var(--yellow);
      }
    }

    &.contacted {
      h4::before {
        background: var(--purple);
      }
    }
  }
}
</style>