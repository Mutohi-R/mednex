<template>
  <li v-for="(hospital, index) in hospitals" :key="index">
    {{ hospital.name }}
  </li>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import useHospitalStore from "@/stores/HospitalStore";

const hospitalStore = useHospitalStore();
const { hospitals } = storeToRefs(hospitalStore);
</script>

<style lang="scss" scoped></style>
