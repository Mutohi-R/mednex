<template>
  <main class="dashboard | content-grid">
    <div class="content | partial">
      <div class="hospital-count | card">
        <div >
          <div class="flex items-center gap-space-xs">
            <p class="fs-500">Registered hospitals:</p>
            <p class="fw-bold fs-900 text-clr-primary-600">
              {{ hospitalsCount }}
            </p>
          </div>
          <button v-if="isAdmin" class="button" data-type="primary">
            <router-link to="/dashboard/add-hospital"> Add New Hospital </router-link>
          </button>
        </div>
      </div>
      <div>
        <h3 class="fw-semibold fs-600 text-center text-clr-accent-500">
          All registered hospitals
        </h3>
        <ul role="list" class="hospital-list">
          <li v-for="hospital in hospitals" :key="hospital.id">
            {{ hospital.name }}
          </li>
        </ul>
      </div>
      <div>
        
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useAuthStore } from "@/stores/AuthStore";
import useHospitalStore from "@/stores/HospitalStore";

const authStore = useAuthStore();
const hospitalStore = useHospitalStore();
const { isAdmin } = storeToRefs(authStore);
const { hospitals, hospitalsCount } = storeToRefs(hospitalStore);
</script>

<style scoped lang="scss">
.dashboard {
  padding-block: 5rem;

  .content {
    display: grid;
    grid-template-areas: "hospital-count" "hospital-list";
    gap: var(--space-s);

    @media only screen and (min-width: 560px) {
      grid-template-areas:
      "hospital-count hospital-list"
      "something hospital-list";
    }

    .hospital-count {
      grid-area: hospital-count;

      &.card {
        padding: 1.5rem;
        display: flex;
        align-items: center;
        border-radius: 0.25rem;
        box-shadow: 0px 4px 6px 0px var(--clr-neutral-200);
      }
    }

    div:has(> .hospital-list) {
      display: grid;
      gap: var(--space-3xs);
      grid-area: hospital-list;
      padding: 0.5rem;
      // background: var(--clr-secondary-200);
      border-radius: 0.25rem;
      box-shadow: 0px 4px 6px 0px var(--clr-neutral-200);

      .hospital-list {
        display: grid;
        gap: var(--space-3xs);

        li {
          padding: 0.5rem;
          background: color-mix(
            in lab,
            var(--clr-primary-200) 30%,
            var(--clr-neutral-100) 80%
          );
          border-radius: 0.25rem;
          box-shadow: 0px 4px 6px 0px var(--clr-neutral-200);
        }
      }
    }
  }
}
</style>
