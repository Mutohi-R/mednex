<template>
    <article class="add-hospital | content-grid flow">
        <h1 class="h1 ff-accent text-center text-clr-neutral-700">Add Hospital</h1>
        <p class="text-center">Please fill in the form below with the necessary information</p>
        <form @submit.prevent="" class="hospital__form | grid gap-space-m">
            <div class="general | flow">
                <h2 class="h2 text-center">General Information</h2>
                <div class="group-1">
                    <div class="form__group">
                        <label for="name">Name</label>
                        <input class="input" v-model="hospitalInfo.name" type="text" name="name" id="name" placeholder="Enter hospital name">
                    </div>
                    <div class="form__group">
                        <label for="email">Email</label>
                        <input class="input" v-model="hospitalInfo.email" type="email" name="email" id="email" placeholder="Enter hospital email">
                    </div>
                </div>
                <div class="group-2">
                    <div class="form__group">
                        <label for="address">Address</label>
                        <input class="input" v-model="hospitalInfo.address" type="text" name="address" id="address" placeholder="Enter hospital address">
                    </div>
                </div>
                <div class="group-3">
                    <div class="form__group">
                        <label for="phone">Hospital Number</label>
                        <input class="input" v-model="hospitalInfo.telephone" type="tel" name="phone" id="phone" pattern="(?:\+?234)?(?:\d{3}|\d{4})[ -]?\d{3}[ -]?\d{4}">
                    </div>
                    <div class="form__group">
                        <label for="website">Website</label>
                        <input class="input" v-model="hospitalInfo.website" name="website" id="website" placeholder="www.example.com">
                    </div>
                </div>
            </div>

            <div class="services | flow">
                <h2 class="h2 text-center">Medical Services</h2>
                <div class="form__group">
                    <label for="department">Departments</label>
                    <input class="input" v-model="hospitalInfo.departments" type="text" name="department" id="department">
                </div>
                <div class="form__group">
                    <div class="flex items-center gap-space-xs">
                        <label for="emergency">Emergency Care Availability</label>
                        <input v-model="hospitalInfo.emergencyCare" type="checkbox" name="emergency" id="emergency">
                    </div>
                    <div class="flex items-center gap-space-xs">
                        <label for="emergencyDetails">Details:</label>
                        <input :disabled="!hospitalInfo.emergencyCare" class="input" v-model="hospitalInfo.emergencyCareDetails" type="text" name="emergencyDetails" id="emergencyDetails">
                    </div>
                </div>
                <div class="form__group">
                    <div class="flex items-center gap-space-xs">
                        <label for="accommodation">Accommodation Availability</label>
                        <input v-model="hospitalInfo.accommodation" type="checkbox" name="accommodation" id="accommodation">
                    </div>
                    <div class="flex items-center gap-space-xs">
                        <label for="accommodationDetails">Details:</label>
                        <input :disabled="!hospitalInfo.accommodation" class="input" v-model="hospitalInfo.accommodationDetails" type="text" name="accommodationDetails" id="accommodationDetails">
                    </div>
                </div>
            </div>

            <div class="operation | flow">
                <h2 class="h2 text-center">Operating Hours</h2>
                <div class="form__group">
                    <div class="flex items-center gap-space-3xs">
                        <label for="from">From</label>
                        <VueDatePicker v-model="hospitalInfo.operatingFrom" :time-picker="true" ></VueDatePicker>
                    </div>
                    <div class="flex items-center gap-space-3xs">
                        <label for="to">To</label>
                        <VueDatePicker v-model="hospitalInfo.operatingTo" :time-picker="true" ></VueDatePicker>
                    </div>
                </div>
            </div>

            <div class="payment | flow">
                <h2 class="h2 text-center">Insurance and Payment</h2>
                <div class="form__group">
                    <div class="flex items-center gap-space-xs">
                        <label for="insurance">Insurance Availability</label>
                        <input v-model="hospitalInfo.insurance" type="checkbox" name="insurance" id="insurance">
                    </div>
                    <div class="flex items-center gap-space-xs">
                        <label for="insuranceDetails">Providers:</label>
                        <input :disabled="!hospitalInfo.insurance" class="input" v-model="hospitalInfo.emergencyCareDetails" type="text" name="insuranceDetails" id="insuranceDetails">
                    </div>
                </div>
                <div class="form__group">
                    <label for="payment">Payment Methods</label>
                    <input class="input" v-model="hospitalInfo.paymentMethods" type="text" name="payment" id="payment">
                </div>
            </div>

            <div class="facilities | flow">
                <h2 class="h2 text-center">Facilities and Amenities</h2>
                <div class="form__group">
                    <div class="flex items-center gap-space-xs">
                        <label for="facilities">Facilities Availability</label>
                        <input v-model="hospitalInfo.facilities" type="checkbox" name="facilities" id="facilities">
                    </div>
                    <div class="flex items-center gap-space-xs">
                        <label for="facilitiesDetails">Details:</label>
                        <input :disabled="!hospitalInfo.facilities" class="input" v-model="hospitalInfo.facilitiesDetails" type="text" name="facilitiesDetails" id="facilitiesDetails">
                    </div>
                </div>
            </div>

            <div class="appointment | flow">
                <h2 class="h2 text-center">Appointment and Booking</h2>
                <div class="form__group">
                    <label for="appointment">Appointment Booking</label>
                    <input class="input" v-model="hospitalInfo.appointment" type="text" name="appointment" id="appointment">
                </div>
            </div>
            
            <div class="accessibility | flow">
                <h2 class="h2 text-center">Accessibility and Language Services</h2>
                <div class="form__group">
                    <div class="flex items-center gap-space-xs">
                        <label for="accessibility">Accessibility Availability</label>
                        <input v-model="hospitalInfo.accessibility" type="checkbox" name="accessibility" id="accessibility">
                    </div>
                    <div class="flex items-center gap-space-xs">
                        <label for="accessibilityDetails">Details:</label>
                        <input :disabled="!hospitalInfo.accessibility" class="input" v-model="hospitalInfo.accessibilityFeatures" type="text" name="accessibilityDetails" id="accessibilityDetails">
                    </div>
                </div>
                <div class="form__group">
                    <label for="language">Language Services</label>
                    <input class="input" v-model="hospitalInfo.languageServices" type="text" name="language" id="language">
                </div>
            </div>

            <div class="visit | flow">
                <h2 class="h2 text-center">Visiting Information</h2>
                <div class="form__group group-1">
                    <div class="flex items-center gap-space-3xs">
                        <label for="from">From</label>
                        <VueDatePicker v-model="hospitalInfo.visitFrom" :time-picker="true" ></VueDatePicker>
                    </div>
                    <div class="flex items-center gap-space-3xs">
                        <label for="to">To</label>
                        <VueDatePicker v-model="hospitalInfo.visitTo" :time-picker="true" ></VueDatePicker>
                    </div>
                </div>
                <div class="form__group">
                    <label for="guidelines">Visitor Guidelines</label>
                    <input class="input" v-model="hospitalInfo.visitGuide" type="text" name="guidelines" id="guidelines">
                </div>
            </div>
            <h2 class="h2 text-center">Extra Information</h2>
            <MdEditor v-model="hospitalInfo.extraInfo" language="en-US" />
            <button class="button" data-type="secondary" @click="hospitalStore.addHospital(hospitalInfo)">Submit Form</button>
        </form>
    </article>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import useHospitalStore from '@/stores/HospitalStore';
import type { HospitalForm } from '@/interfacesTypes/hospitalForm'
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
import { MdEditor } from 'md-editor-v3'
import 'md-editor-v3/lib/style.css';

const hospitalInfo: HospitalForm = reactive({
    name: '',
    email: '',
    address: '',
    telephone: '',
    website: '',
    departments: [],
    emergencyCare: false,
    emergencyCareDetails: '',
    accommodation: false,
    accommodationDetails: '',
    operatingFrom: '',
    operatingTo: '',
    insurance: false,
    insuranceProviders: [],
    paymentMethods: [],
    facilities: false,
    facilitiesDetails: [],
    appointment: '',
    accessibility: false,
    accessibilityFeatures: [],
    languageServices: '',
    visitFrom: '',
    visitTo: '',
    visitGuide: '',
    extraInfo: '',
})

const hospitalStore = useHospitalStore()
console.log(hospitalInfo.name)
console.log(hospitalInfo.operatingFrom)
</script>

<style scoped lang="scss">
.add-hospital {
    padding-block: 2rem;
}
.hospital__form {
    padding: 1rem;
    border: 2px solid var(--clr-neutral-400);
    border-radius: 0.5rem;

    h2 {
        color: var(--clr-neutral-600);
    }

    .general {
        .group-1 {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: var(--space-xs);
        }

        .group-3 {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: var(--space-xs);
        }

    }

    .operation {
        .form__group {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: var(--space-xs);
        }
    }

    .visit {
        .group-1 {
            display: grid;
            grid-template-columns: 1fr 1fr;
        }
    }

    .form__group {

        display: grid;
        align-items: center;
        gap: .5rem;

        label {
          color: var(--clr-neutral-600);  
        }

        input {
            padding: .25rem;

            &::placeholder {
                font-weight: var(--fw-regular);
            }

            &[type="checkbox"] {
                width: 1.2rem;
                height: 1.2rem;
            }
        }
    }
}
</style>