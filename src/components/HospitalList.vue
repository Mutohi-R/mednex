<template>
    <ul class="hospital__list" role="list">
        <li class="card" v-for="(hospital, index) in hospitals" :key="index">
            <div>
                <!-- logo goes here -->
            </div>
            <div>
                <div class="heading | flex items-center">
                    <h3>{{ hospital.name }}</h3>
                    <FontAwesomeIcon :icon="faHeart" />
                </div>
                <p>{{ hospital.website }}</p>
                <p><span>Emergency Care: </span>{{ hospital.emergencyCareDetails || 'N/A'  }}</p>
                <div class="departments">
                    <p>{{ hospital.departments }}</p>
                </div>
            </div>
            <div>
                <div class="location">
                    <i-ep-location />
                    <!-- <p>{{ hospital.location }}</p> -->
                </div>
                <div class="telephone">
                    <i-lucide-phone-call />
                    <p>{{ hospital.telephone }}</p>
                </div>
                <div class="booking">
                    <FontAwesomeIcon :icon="faCalendar" />
                    <p>{{ hospital.appointment }}</p>
                </div>
                <div class="operation">
                    <FontAwesomeIcon :icon="faClock" />
                    <p>{{ hospital.operatingFrom }} - {{ hospital.operatingTo }}</p>
                </div>
            </div>
        </li>
    </ul>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import useHospitalStore from '@/stores/HospitalStore';
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { faHeart, faCalendar, faClock } from '@fortawesome/free-regular-svg-icons';

const hospitalStore = useHospitalStore()
const { hospitals } = storeToRefs(hospitalStore)

</script>

<style lang="scss" scoped>

</style>