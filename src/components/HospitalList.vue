<template>
    <section class="hospital__wrapper | content-grid">
        <ul class="hospital__list | partial | grid gap-3" role="list">
            <li class="card" v-for="(hospital, index) in hospitals" :key="index">
                <div class="flex items-center justify-center">
                    <FontAwesomeIcon class="logo" :icon="faImage" />
                </div>
                <div class="mid | grid">
                    <div class="heading | flex items-center justify-between">
                        <h3 class="h3 fw-semibold text-clr-neutral-700">{{ hospital.name }}</h3>
                        <FontAwesomeIcon class="icon" :icon="faHeart" />
                    </div>
                    <p>{{ hospital.website }}</p>
                    <p><span>Emergency Care: </span>{{ hospital.emergencyCareDetails || 'N/A'  }}</p>
                    <div class="departments">
                        <p class="department" v-for="(department, index) in hospital.departments" :key="index">{{ department }}</p>
                    </div>
                </div>
                <div class="side | grid gap-4">
                    <div class="location | flex items-center gap-space-xs">
                        <i-ep-location class="icon" />
                        <p>{{ hospital.location }}, Nigeria <span class="text-clr-neutral-400 ">(43,000 km)</span></p>
                    </div>
                    <div class="telephone | flex items-center gap-space-xs">
                        <i-lucide-phone-call class="icon" />
                        <p>{{ hospital.telephone }}</p>
                    </div>
                    <div class="booking | flex items-center gap-space-xs">
                        <FontAwesomeIcon class="icon" :icon="faCalendar" />
                        <p>{{ hospital.appointment }}</p>
                    </div>
                    <div class="operation | flex items-center gap-space-xs">
                        <FontAwesomeIcon class="icon" :icon="faClock" />
                        <p>{{ `${hospital.operatingFrom.hours}:${hospital.operatingFrom.minutes}0` }} - {{ `${hospital.operatingTo.hours}:${hospital.operatingTo.minutes}0` }}</p>
                    </div>
                </div>
            </li>
        </ul>
    </section>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import useHospitalStore from '@/stores/HospitalStore';
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { faHeart, faCalendar, faClock, faImage } from '@fortawesome/free-regular-svg-icons';

const hospitalStore = useHospitalStore()
const { hospitals } = storeToRefs(hospitalStore)

</script>

<style lang="scss" scoped>

.hospital__wrapper {
    padding-block: 3rem;
    background: color-mix(in srgb, var(--clr-primary-200) 10%, var(--clr-neutral-100) 90%)
}

.hospital__list {

    .icon {
        color: var(--clr-neutral-600);
        font-size: 1.5rem;
        min-width: 1.5rem;
        aspect-ratio: 1;
    }
    
    .card {
        display: grid;
        grid-template-columns: 1fr 2.5fr 2fr;
        gap: var(--space-m);
        padding: 1rem;
        background: var(--clr-neutral-100);
        border-radius: 1rem;
        box-shadow: 0px 6px 12px 4px hsla(230, 7%, 78%, 0.3);

        p {
            color: var(--clr-neutral-600);
            font-size: var(--fs-300);
            font-weight: var(--fw-semibold);
        }

        .logo {
            color: var(--clr-neutral-600);
            font-size: 9rem;
        }

        .mid {
            
            .departments {
                display: flex;
                flex-wrap: wrap;
                gap: var(--space-2xs);
                .department {
                    display: flex;
                    align-self: center;
                    padding: .25rem .5rem;
                    background: color-mix(in srgb, var(--clr-primary-200) 30%, var(--clr-neutral-100) 70%);
                    border-radius: 1rem;
                }
            }
        }

        .side {
            padding: 1rem;
            background: color-mix(in srgb, var(--clr-primary-200) 30%, var(--clr-neutral-100) 70%);
            border-radius: 1rem;
        }
    }
}

</style>