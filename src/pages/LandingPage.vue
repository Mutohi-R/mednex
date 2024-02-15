<template>
  <main>
    <Toast></Toast>
    <section
      class="hero | content-grid | bg-clr-primary-500 text-clr-neutral-100"
    >
      <div class="flow breakout">
        <h1 class="h1 ff-accent fw-bold">Discover healthcare near you</h1>
        <p class="h3">
          <span class="">Search</span>, <span class="">export</span>, and
          <span class="">share</span> hospitals in your region
        </p>
      </div>
      <div class="filter | text-clr-neutral-400">
        <div class="search">
          <input type="text" placeholder="Have an hospital in mind?" />
        </div>
        <div class="location | flex items-center">
          <location-select :options="options" v-model="parentSelectedOption" />
        </div>
      </div>
    </section>
    <section></section>
  </main>
</template>

<script setup lang="ts">
import { ref } from "vue";
import LocationSelect from "@/components/LocationSelect.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

const options = ref<string[]>(["Lagos", "Abuja", "Kano", "Ogun"]);
const parentSelectedOption = ref<string | null>(null);
</script>

<style scoped lang="scss">
.hero {
  padding-block: 4.6rem;
  /* background-image: linear-gradient(
    var(--clr-primary-400) 50%,
    var(--clr-secondary-100) 50%
  ); */
}

.filter {
  display: grid;
  align-items: center;
  grid-template-columns: 2fr 1fr;
  column-gap: var(--space-2xs);
  padding: 0.2rem;
  background: var(--clr-neutral-100);
  border: 2px solid var(--clr-accent-200);
  border-radius: 100vw;

  .search {
    border-radius: 100vw;

    input {
      width: 100%;
      padding: 0.5rem;
      /* background: var(--clr-neutral-200); */
      background: color-mix(
        in srgb,
        var(--clr-primary-200) 60%,
        var(--clr-neutral-100) 40%
      );
      border-radius: 100vw;
    }
  }
}
.h3 {
  span {
    color: var(--clr-neutral-600);
  }
}
</style>
