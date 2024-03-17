<template>
  <section class="hospital__wrapper | content-grid">
    <ul class="hospital__list | partial | grid gap-3" role="list">
      <hospital-card-skeleton></hospital-card-skeleton>
      <hospital-card-skeleton></hospital-card-skeleton>
      <hospital-card-skeleton></hospital-card-skeleton>
    </ul>
  </section>
</template>

<script setup lang="ts">
import HospitalCardSkeleton from './HospitalCardSkeleton.vue';
</script>

<style scoped lang="scss">

</style>
