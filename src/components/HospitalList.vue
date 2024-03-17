<template>
  <hospital-cards v-if="!isHospitalsLoading"></hospital-cards>
  <hospital-cards-loading v-else></hospital-cards-loading>
</template>

<script setup lang="ts">
import useHospitalStore from "@/stores/HospitalStore";
import { storeToRefs } from "pinia";
import HospitalCards from "./HospitalCards.vue";
import HospitalCardsLoading from "./HospitalCardsLoading.vue";


const hospitalStore = useHospitalStore();
const { isHospitalsLoading } = storeToRefs(hospitalStore);
</script>
