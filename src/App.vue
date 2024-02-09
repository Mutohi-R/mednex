<template>
  <nav-bar></nav-bar>
  <main>
    <section class="hero | bg-clr-primary-400 text-clr-neutral-100">
      <div>
        <h1 class="h1 fw-semibold">Discover healthcare near you</h1>
        <p class="h3">Search, export, and share hospitals in your region</p>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
  import NavBar from './components/NavBar.vue';
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
  import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
  import { faHouse } from '@fortawesome/free-solid-svg-icons';
  import { faBell } from '@fortawesome/free-regular-svg-icons';
</script>

<style scoped>
.hero {
  padding-block: 8rem 4.6rem;
  /* background-image: linear-gradient(
    var(--clr-primary-400) 50%,
    var(--clr-secondary-100) 50%
  ); */
}
</style>
