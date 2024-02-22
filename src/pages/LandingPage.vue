<template>
  <main>
    <Toast></Toast>
    <section
      class="hero | content-grid | bg-clr-primary-500 text-clr-neutral-100"
    >
      <div style="--_flow-space: 1rem" class="flow breakout">
        <h1 class="fs-900 ff-accent fw-bold text-center text-balance">Discover healthcare near you</h1>
        <h2 class="fs-600 text-center">
          <span class="">Search</span>, <span class="">export</span>, and
          <span class="">share</span> hospitals in your region
        </h2>
      </div>
      <div class="filter | text-clr-neutral-400">
        <div class="search">
          <input type="text" placeholder="Have an hospital in mind?" />
        </div>
        <div class="location | flex items-center">
          <location-select v-model="parentSelectedOption" />
        </div>
      </div>
    </section>
    <hospital-list></hospital-list>
  </main>
</template>

<script setup lang="ts">
import { ref } from "vue";
import LocationSelect from "@/components/LocationSelect.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import HospitalList from "@/components/HospitalList.vue";

const parentSelectedOption = ref<string | null>(null);
</script>

<style scoped lang="scss">
.hero {
  position: relative;
  padding-block: 7rem;
  /* background-image: linear-gradient(
    var(--clr-primary-400) 50%,
    var(--clr-secondary-100) 50%
  ); */
}

.filter {
  position: absolute;
  bottom: -1.5rem;
  display: grid;
  align-items: center;
  place-self: center;
  grid-template-columns: 3fr 1fr;
  column-gap: var(--space-2xs);
  width: 100%;

  .search {
    border-radius: 100vw;
    box-shadow: 0px 6px 10px 4px hsla(230, 7%, 68%, 0.3);

    input {
      width: 100%;
      padding: 1rem;
      background: var(--clr-neutral-100);
      // background: color-mix(
      //   in srgb,
      //   var(--clr-primary-200) 60%,
      //   var(--clr-neutral-100) 40%
      // );
      border-radius: .25rem;
    }
  }
}
 h2 {
  span {
    color: var(--clr-neutral-600);
  }
}
</style>


