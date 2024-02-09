<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faHouse } from '@fortawesome/free-solid-svg-icons';
</script>

<template>
  <div class="content-grid">
    <h1 class="text-center breakout fw-semibold ff-base fs-700 text-clr-accent-500 bg-clr-secondary-500">statinhg yhe padfs</h1>
  </div>
  <FontAwesomeIcon class="envelope" :icon="faEnvelope" />
  <FontAwesomeIcon class="house" :icon="faHouse" />
<div class="flex gap-space-s">
  
    <p>hello</p>
    <p>hello</p>
    <p>hello</p>
    <p>hello</p>

  </div>
  <div class="flex items-center gap-space-m">
    <button class="button" data-type="primary">Primary</button>
    <button class="button" data-type="secondary">Secondary</button>
    <button class="button" data-type="tertiary">Tertiary</button>
    <button class="button" disabled data-type="primary">P dis</button>
    <button class="button" disabled data-type="secondary">sec dis</button>
  </div>

  <input class="input" type="text" placeholder="this is an input">
</template>

<style scoped>
h1{
  /* font-family: var(--ff-accent); */
  /* font-size: var(--fs-800); */
  /* color: var(--clr-primary-400); */
}

.envelope {
  color: var(--clr-primary-900);
}
</style>
