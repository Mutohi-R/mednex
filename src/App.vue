<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
</script>

<template>
  <div class="content-grid">
    <h1 class="text-center breakout fw-semibold ff-base fs-700 text-clr-accent-500 bg-clr-secondary-500">statinhg yhe padfs</h1>
  </div>
  <FontAwesomeIcon class="envelope" :icon="faEnvelope" />
<div class="flex gap-space-s">
  
    <p>hello</p>
    <p>hello</p>
    <p>hello</p>
    <p>hello</p>
</div>
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
