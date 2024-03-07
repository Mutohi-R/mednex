<template>
  <main class="dashboard"></main>
  <div>
    <button v-if="isAdmin" class="button" data-type="primary">
      <router-link to="/dashboard/add-hospital"> Add Hospital </router-link>
    </button>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useAuthStore } from '@/stores/AuthStore';

const authStore = useAuthStore();
const { isAdmin } = storeToRefs(authStore)
</script>

<style scoped lang="scss">
.dashboard {
  padding-block: 4rem;
}
</style>
