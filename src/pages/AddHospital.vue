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
                        <input v-model="hospitalInfo.number" type="tel" name="phone" id="phone" pattern="(?:\+?234)?(?:\d{3}|\d{4})[ -]?\d{3}[ -]?\d{4}">
                    </div>
                    <div class="form__group">
                        <label for="website">Website</label>
                        <input v-model="hospitalInfo.website" type="url" name="website" id="website" placeholder="www.example.com">
                    </div>
                </div>
            </div>

            <div class="services | flow">
                <h2 class="h2 text-center">Medical Services</h2>
                <div class="form__group">
                    <label for="department">Departments</label>
                    <input v-model="hospitalInfo.departments" type="text" name="department" id="department">
                </div>
                <div class="form__group">
                    <label for="emergency">Emergency Care Availability</label>
                    <input v-model="hospitalInfo.emergencyCare" type="text" name="emergency" id="emergency">
                </div>
                <div class="form__group">
                    <label for="accommodation">Accommodation Availability</label>
                    <input v-model="hospitalInfo.accommodation" type="text" name="accommodation" id="accommodation">
                </div>
            </div>

            <div class="operation | flow">
                <h2 class="h2 text-center">Operating Hours</h2>
                <div class="form__group">
                    <div class="flex items-center gap-space-3xs">
                        <label for="from">From</label>
                        <input v-model="hospitalInfo.operatingFrom" type="text" name="from" id="from">
                    </div>
                    <div class="flex items-center gap-space-3xs">
                        <label for="to">To</label>
                        <input v-model="hospitalInfo.operatingTo" type="text" name="to" id="to">
                    </div>
                </div>
            </div>

            <div class="payment | flow">
                <h2 class="h2 text-center">Insurance and Payment</h2>
                <div class="form__group">
                    <label for="insurance">Health Insurance Providers</label>
                    <input v-model="hospitalInfo.insuranceProviders" type="text" name="insurance" id="insurance">
                </div>
                <div class="form__group">
                    <label for="payment">Payment Methods</label>
                    <input v-model="hospitalInfo.paymentMethods" type="text" name="payment" id="payment">
                </div>
            </div>

            <div class="facilities | flow">
                <h2 class="h2">Facilities and Amenities</h2>
                <div class="form__group">
                    <label for="facilities">Facilities and Amenities</label>
                    <input v-model="hospitalInfo.facilitiesDetails" type="text" name="facilities" id="facilities">
                </div>
            </div>

            <div class="appointment | flow">
                <h2 class="h2">Appointment and Booking</h2>
                <div class="form__group">
                    <label for="appointment">Appointment Booking</label>
                    <input v-model="hospitalInfo.appointment" type="text" name="appointment" id="appointment">
                </div>
            </div>
            
            <div class="accessibility | flow">
                <h2 class="h2">Accessibility and Language Services</h2>
                <div class="form__group">
                    <label for="accessibility">Accessibility Features</label>
                    <input v-model="hospitalInfo.accessibilityFeatures" type="text" name="accessibility" id="accessibility">
                </div>
                <div class="form__group">
                    <label for="language">Language Services</label>
                    <input v-model="hospitalInfo.languageServices" type="text" name="language" id="language">
                </div>
            </div>

            <div class="visit | flow">
                <h2 class="h2">Visiting Information</h2>
                <div class="form__group group-1">
                    <div class="flex items-center gap-space-3xs">
                        <label for="from">From</label>
                        <input v-model="hospitalInfo.visitFrom" type="text" name="from" id="from">
                    </div>
                    <div class="flex items-center gap-space-3xs">
                        <label for="to">To</label>
                        <input v-model="hospitalInfo.visitTo" type="text" name="to" id="to">
                    </div>
                </div>
                <div class="form__group">
                    <label for="guidelines">Visitor Guidelines</label>
                    <input v-model="hospitalInfo.visitGuide" type="text" name="guidelines" id="guidelines">
                </div>
            </div>
            <button class="button" data-type="secondary">Submit Form</button>
        </form>
    </article>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import type { HospitalForm } from '@/interfacesTypes/hospitalForm'

const hospitalInfo: HospitalForm = reactive({
    name: '',
    email: '',
    address: '',
    number: '',
    website: '',
    departments: [],
    emergencyCare: false,
    emergencyCareDetails: '',
    accommodation: false,
    accommodationDetails: '',
    operatingFrom: '',
    operatingTo: '',
    insuranceProviders: [],
    paymentMethods: [],
    facilities: false,
    facilitiesDetails: [],
    appointment: '',
    accessibilityFeatures: [],
    languageServices: '',
    visitFrom: '',
    visitTo: '',
    visitGuide: '',
})
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
            width: 100%;
            padding: .25rem;
            border: 1px solid var(--clr-neutral-400);
            border-radius: .25rem;

            &:focus {
                outline: 1px solid var(--clr-neutral-600);
            }

            &:disabled {
                opacity: .5;
                border: 1px solid var(--clr-neutral-400);
            }
        }
    }
}
</style>@/interfaces&types/hospitalForm