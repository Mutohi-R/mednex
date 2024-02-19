<template>
    <article class="add-hospital | content-grid">
        <div class="mx-auto | grid gap-3">
            <div class="form__header | grid gap-3">
                <h1 class="ff-accent fs-700 fw-semibold text-clr-neutral-800">Hospital Entry Form</h1>
                <p class="fs-300">Please fill in the form below with the necessary information</p>
            </div>
            <form @submit.prevent="" class="hospital__form | grid gap-3">
                <div class="general | flow">
                    <h3 class="">General Information</h3>
                    <div class="group-1">
                        <div class="form__group">
                            <label for="name">Name</label>
                            <input v-model="hospitalInfo.name" type="text" name="name" id="name" placeholder="Enter hospital name">
                        </div>
                        <div class="form__group">
                            <label for="email">Email</label>
                            <input v-model="hospitalInfo.email" type="email" name="email" id="email" placeholder="Enter hospital email">
                        </div>
                    </div>
                    <div class="group-2">
                        <div class="form__group">
                            <label for="address">Address</label>
                            <input v-model="hospitalInfo.address" type="text" name="address" id="address" placeholder="Enter hospital address">
                        </div>
                    </div>
                    <div class="group-3">
                        <div class="form__group">
                            <label for="phone">Hospital Number</label>
                            <input v-model="hospitalInfo.telephone" type="tel" name="phone" id="phone" pattern="(?:\+?234)?(?:\d{3}|\d{4})[ -]?\d{3}[ -]?\d{4}">
                        </div>
                        <div class="form__group">
                            <label for="website">Website</label>
                            <input v-model="hospitalInfo.website" name="website" id="website" placeholder="www.example.com">
                        </div>
                    </div>
                </div>
                <div class="services | flow">
                    <h3 class="">Medical Services</h3>
                    <div class="form__group">
                        <label for="department">Departments</label>
                        <input v-model="hospitalInfo.departments" type="text" name="department" id="department">
                    </div>
                    <div class="form__group">
                        <div class="flex items-center gap-space-xs">
                            <label for="emergency">Emergency Care Availability</label>
                            <input v-model="hospitalInfo.emergencyCare" type="checkbox" name="emergency" id="emergency">
                        </div>
                        <div class="flex items-center gap-space-xs">
                            <label for="emergencyDetails">Details:</label>
                            <input :disabled="!hospitalInfo.emergencyCare" v-model="hospitalInfo.emergencyCareDetails" type="text" name="emergencyDetails" id="emergencyDetails">
                        </div>
                    </div>
                    <div class="form__group">
                        <div class="flex items-center gap-space-xs">
                            <label for="accommodation">Accommodation Availability</label>
                            <input v-model="hospitalInfo.accommodation" type="checkbox" name="accommodation" id="accommodation">
                        </div>
                        <div class="flex items-center gap-space-xs">
                            <label for="accommodationDetails">Details:</label>
                            <input :disabled="!hospitalInfo.accommodation" v-model="hospitalInfo.accommodationDetails" type="text" name="accommodationDetails" id="accommodationDetails">
                        </div>
                    </div>
                </div>
                <div class="operation | flow">
                    <h3 class="">Operating Hours</h3>
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
                    <h3 class="">Insurance and Payment</h3>
                    <div class="form__group">
                        <div class="flex items-center gap-space-xs">
                            <label for="insurance">Insurance Availability</label>
                            <input v-model="hospitalInfo.insurance" type="checkbox" name="insurance" id="insurance">
                        </div>
                        <div class="flex items-center gap-space-xs">
                            <label for="insuranceDetails">Providers:</label>
                            <input :disabled="!hospitalInfo.insurance" v-model="hospitalInfo.insuranceProviders" type="text" name="insuranceDetails" id="insuranceDetails">
                        </div>
                    </div>
                    <div class="form__group">
                        <label for="payment">Payment Methods</label>
                        <input v-model="hospitalInfo.paymentMethods" type="text" name="payment" id="payment">
                    </div>
                </div>
                <div class="facilities | flow">
                    <h3 class="">Facilities and Amenities</h3>
                    <div class="form__group">
                        <div class="flex items-center gap-space-xs">
                            <label for="facilities">Facilities Availability</label>
                            <input v-model="hospitalInfo.facilities" type="checkbox" name="facilities" id="facilities">
                        </div>
                        <div class="flex items-center gap-space-xs">
                            <label for="facilitiesDetails">Details:</label>
                            <input :disabled="!hospitalInfo.facilities" v-model="hospitalInfo.facilitiesDetails" type="text" name="facilitiesDetails" id="facilitiesDetails">
                        </div>
                    </div>
                </div>
                <div class="appointment | flow">
                    <h3 class="">Appointment and Booking</h3>
                    <div class="form__group">
                        <label for="appointment">Appointment Booking</label>
                        <input v-model="hospitalInfo.appointment" type="text" name="appointment" id="appointment">
                    </div>
                </div>
            
                <div class="accessibility | flow">
                    <h3 class="">Accessibility and Language Services</h3>
                    <div class="form__group">
                        <div class="flex items-center gap-space-xs">
                            <label for="accessibility">Accessibility Availability</label>
                            <input v-model="hospitalInfo.accessibility" type="checkbox" name="accessibility" id="accessibility">
                        </div>
                        <div class="flex items-center gap-space-xs">
                            <label for="accessibilityDetails">Details:</label>
                            <input :disabled="!hospitalInfo.accessibility" v-model="hospitalInfo.accessibilityFeatures" type="text" name="accessibilityDetails" id="accessibilityDetails">
                        </div>
                    </div>
                    <div class="form__group">
                        <label for="language">Language Services</label>
                        <input v-model="hospitalInfo.languageServices" type="text" name="language" id="language">
                    </div>
                </div>
                <div class="visit | flow">
                    <h3 class="">Visiting Information</h3>
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
                        <input v-model="hospitalInfo.visitGuide" type="text" name="guidelines" id="guidelines">
                    </div>
                </div>
                <div class="form__group">
                    <h3 class="">Extra Information</h3>
                    <MdEditor
                      v-model="hospitalInfo.extraInfo"
                      language="en-US"
                      previewTheme="vuepress"
                    />
                </div>
                <button class="button" data-type="secondary" @click="submitHospitalEntry">Submit Form</button>
            </form>
        </div>
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

const submitHospitalEntry = () => {
    hospitalStore.addHospital(hospitalInfo)
}
</script>

<style scoped lang="scss">
.add-hospital {
    padding-block: 2rem;
    background: color-mix(in srgb, var(--clr-primary-200) 10%, var(--clr-neutral-100) 90%);

    >div {
        max-width: 50rem;
    }

    .form__header {
        padding: 1rem 1.5rem;
        background: var(--clr-neutral-100);
        border-block-start: .5rem solid var(--clr-primary-600);
        border-radius: .5rem;
        box-shadow: 0px 6px 12px 0px hsla(230, 7%, 78%, 0.3);
    }
}
.hospital__form {
    // padding: 1rem;
    // border: 2px solid var(--clr-neutral-400);
    // border-radius: 0.5rem;

    >* {
        --_flow-space: 1em;
        padding: 1rem 1.5rem;
        background: var(--clr-neutral-100);
        border-radius: .5rem;
        box-shadow: 0px 6px 12px 0px hsla(230, 7%, 78%, 0.3);
    }

    h3 {
        color: var(--clr-neutral-800);
        font-weight: var(--fw-semibold);
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
        gap: .1rem;

        label {
            color: var(--clr-neutral-600);  
        }

        input {
            padding: .25rem;
            background: none;
            border: none;
            border-block-end: 1.5px solid var(--clr-neutral-200);

            &:is(:focus, :hover, :active) {
                border-block-end-color: var(--clr-neutral-400);
                outline: none;
            }

            &::placeholder {
                font-size: var(--fs-300);
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