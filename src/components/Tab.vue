<template>
  <div class="tab__content" v-show="selectedTitle == title">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { ref, inject, type Ref } from "vue";

const props = defineProps({
  title: String,
});

const selectedTitle: Ref<string | undefined> = ref(inject("selectedTitle"));
</script>

<style scoped></style>
