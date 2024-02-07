<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
</script>

<template>
  <h1 class=" fs-700 text-clr-neutral-100 bg-clr-accent-500">statinhg yhe padfs</h1>
  <FontAwesomeIcon class="envelope" :icon="faEnvelope" />
<div class="flex">
  
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
