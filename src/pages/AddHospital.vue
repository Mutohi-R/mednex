<template>
    <article class="add-hospital | content-grid">
        <div class="mx-auto | grid gap-3">
            <div class="form__header | grid gap-3">
                <h1 class="ff-accent fs-700 fw-semibold text-clr-neutral-800">Hospital Entry Form</h1>
                <p class="fs-300">Please fill in the form below with the necessary information</p>
            </div>
            <form @submit.prevent="" ref="form" class="hospital__form | grid gap-3">
                <div class="general | flow">
                    <h3 class="">General Information</h3>
                    <div class="group">
                        <div class="form__group">
                            <label for="name">Name</label>
                            <input v-model="hospitalInfo.name" type="text" name="name" id="name" placeholder="Enter hospital name">
                        </div>
                        <div class="form__group">
                            <label for="email">Email</label>
                            <input v-model="hospitalInfo.email" type="email" name="email" id="email" placeholder="Enter hospital email">
                        </div>
                    </div>
                    <div class="group">
                        <div class="form__group">
                            <label for="address">Address</label>
                            <input v-model="hospitalInfo.address" type="text" name="address" id="address" placeholder="Enter hospital address">
                        </div>
                        <div class="form__group">
                            <label for="location">Location</label>
                            <!-- <input v-model="hospitalInfo.location" type="text" name="location" id="location" placeholder="Enter hospital location"> -->
                            <select v-model="hospitalInfo.location" name="location" id="location">
                                <option disabled value="">Select hospital state</option>
                                <option v-for="state in locations" :value="state">{{ state }}</option>
                            </select>
                        </div>
                    </div>
                    <div class="group">
                        <div class="form__group">
                            <label for="phone">Hospital Number</label>
                            <input v-model="hospitalInfo.telephone" type="tel" name="phone" id="phone">
                        </div>
                        <div class="form__group">
                            <label for="website">Website</label>
                            <input v-model="hospitalInfo.website" name="website" id="website" placeholder="www.example.com">
                        </div>
                    </div>
                </div>
                <div class="services | flow">
                    <div>
                        <h3 class="">Medical Services</h3>
                        <p class="fs-300 text-clr-info-400">Only a maximum of 4 departments, click on a department to remove it</p>
                    </div>
                    <div class="form__group">
                        <div class="add__array">
                            <label for="department">Departments:</label>
                            <input v-model="department" type="text" name="department" id="department">
                            <button class="add" @click="addDepartment">
                                <FontAwesomeIcon :icon="faPlus" />
                            </button>
                        </div>
                        <ul role="list" class="array__list">
                            <li class="array__item" @click="removeDepartment(index)" v-for="(item, index) in hospitalInfo.departments" :key="index">
                                {{ item }}
                            </li>
                        </ul>
                    </div>
                    <div class="form__group">
                        <div class="flex items-center gap-space-xs">
                            <label for="emergency">Emergency Care Availability</label>
                            <input v-model="hospitalInfo.emergencyCare" type="checkbox" name="emergency" id="emergency">
                        </div>
                        <div class="flex items-center gap-space-xs">
                            <label for="emergencyDetails">Details:</label>
                            <input class="w-full" :disabled="!hospitalInfo.emergencyCare" v-model="hospitalInfo.emergencyCareDetails" type="text" name="emergencyDetails" id="emergencyDetails">
                        </div>
                    </div>
                    <div class="form__group">
                        <div class="flex items-center gap-space-xs">
                            <label for="accommodation">Accommodation Availability</label>
                            <input v-model="hospitalInfo.accommodation" type="checkbox" name="accommodation" id="accommodation">
                        </div>
                        <div class="flex items-center gap-space-xs">
                            <label for="accommodationDetails">Details:</label>
                            <input class="w-full" :disabled="!hospitalInfo.accommodation" v-model="hospitalInfo.accommodationDetails" type="text" name="accommodationDetails" id="accommodationDetails">
                        </div>
                    </div>
                </div>
                <div class="operation | flow">
                    <h3 class="">Operating Hours</h3>
                    <div class="form__group">
                        <div class="flex items-center gap-space-3xs">
                            <label for="from">From</label>
                            <VueDatePicker placeholder="Select time" v-model="hospitalInfo.operatingFrom" :time-picker="true" ></VueDatePicker>
                        </div>
                        <div class="flex items-center gap-space-3xs">
                            <label for="to">To</label>
                            <VueDatePicker placeholder="Select time" v-model="hospitalInfo.operatingTo" :time-picker="true" ></VueDatePicker>
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
                        <div>
                            <div class="add__array">
                            <label for="providers">Providers:</label>
                            <input @keyup.enter="addProvider" :disabled="!hospitalInfo.insurance" v-model="provider" type="text" name="providers" id="providers">
                            <button class="add" @click="addProvider">
                                <FontAwesomeIcon :icon="faPlus" />
                            </button>
                        </div>
                        <ul role="list" class="array__list">
                            <li class="array__item" @click="removeProvider(index)" v-for="(item, index) in hospitalInfo.insuranceProviders" :key="index">
                                {{ item }}
                            </li>
                        </ul>
                        </div>
                    </div>
                    <div class="form__group">
                        <div class="add__array">
                            <label for="payment">Payment Methods:</label>
                            <input @keyup.enter="addPayment" v-model="payment" type="text" name="payment" id="payment">
                            <button class="add" @click="addPayment">
                                <FontAwesomeIcon :icon="faPlus" />
                            </button>
                        </div>
                        <ul role="list" class="array__list">
                            <li class="array__item" @click="removePayment(index)" v-for="(item, index) in hospitalInfo.paymentMethods" :key="index">
                                {{ item }}
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="facilities | flow">
                    <h3 class="">Facilities and Amenities</h3>
                    <div class="form__group">
                        <div class="flex items-center gap-space-xs">
                            <label for="facilities">Facilities Availability</label>
                            <input v-model="hospitalInfo.facilities" type="checkbox" name="facilities" id="facilities">
                        </div>
                        <div>
                            <div class="add__array">
                            <label for="facilitiesDetails">Details:</label>
                            <input @keyup.enter="addFacility" :disabled="!hospitalInfo.facilities" v-model="facility" type="text" name="facilitiesDetails" id="facilitiesDetails">
                            <button class="add" @click="addFacility">
                                <FontAwesomeIcon :icon="faPlus" />
                            </button>
                        </div>
                        <ul role="list" class="array__list">
                            <li class="array__item" @click="removeFacility(index)" v-for="(item, index) in hospitalInfo.facilitiesDetails" :key="index">
                                {{ item }}
                            </li>
                        </ul>
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
                        <!-- <div class="flex items-center gap-space-xs">
                            <label for="accessibilityDetails">Details:</label>
                            <input :disabled="!hospitalInfo.accessibility" v-model="hospitalInfo.accessibilityFeatures" type="text" name="accessibilityDetails" id="accessibilityDetails">
                        </div> -->
                        <div>
                            <div class="add__array">
                            <label for="accessibilityDetails">Details:</label>
                            <input @keyup.enter="addAccess" :disabled="!hospitalInfo.accessibility" v-model="access" type="text" name="accessibilityDetails" id="accessibilityDetails">
                            <button class="add" @click="addAccess">
                                <FontAwesomeIcon :icon="faPlus" />
                            </button>
                        </div>
                        <ul role="list" class="array__list">
                            <li class="array__item" @click="removeAccess(index)" v-for="(item, index) in hospitalInfo.accessibilityFeatures" :key="index">
                                {{ item }}
                            </li>
                        </ul>
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
                            <VueDatePicker placeholder="Select time" v-model="hospitalInfo.visitFrom" :time-picker="true" ></VueDatePicker>
                        </div>
                        <div class="flex items-center gap-space-3xs">
                            <label for="to">To</label>
                            <VueDatePicker placeholder="Select time" v-model="hospitalInfo.visitTo" :time-picker="true" ></VueDatePicker>
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
                <button @click="submitHospitalEntry($event)" class="button" data-type="secondary">Submit Form</button>
            </form>
        </div>
    </article>
</template>

<script setup lang="ts">
import { ref, type Ref, reactive } from 'vue';
import { storeToRefs } from 'pinia';
import useHospitalStore from '@/stores/HospitalStore';
import type { HospitalForm, Time } from '@/interfacesTypes/hospitalForm'
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
import { MdEditor } from 'md-editor-v3'
import 'md-editor-v3/lib/style.css';
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const hospitalStore = useHospitalStore()
const { locations } = storeToRefs(hospitalStore)

const form: Ref<null | HTMLFormElement> = ref(null)
const department = ref('')
const provider = ref('')
const payment = ref('')
const facility = ref('')
const access = ref('')

const hospitalInfo: HospitalForm = reactive({
    name: '',
    email: '',
    address: '',
    location: '',
    telephone: '',
    website: '',
    departments: [],
    emergencyCare: false,
    emergencyCareDetails: '',
    accommodation: false,
    accommodationDetails: '',
    operatingFrom: <Time>{},
    operatingTo: <Time>{},
    insurance: false,
    insuranceProviders: [],
    paymentMethods: [],
    facilities: false,
    facilitiesDetails: [],
    appointment: '',
    accessibility: false,
    accessibilityFeatures: [],
    languageServices: '',
    visitFrom: <Time>{},
    visitTo: <Time>{},
    visitGuide: '',
    extraInfo: '',
})

const addDepartment = () => {
    if(!department.value) return
    if(hospitalInfo.departments.length !== 4) {
        hospitalInfo.departments.push(department.value.trim())
        department.value = ''
    }
}

const removeDepartment = (index: number) => {
    hospitalInfo.departments.splice(index, 1)
}

const addProvider = () => {
    if(!provider.value) return
    if(hospitalInfo.insuranceProviders.length !== 4) {
        hospitalInfo.insuranceProviders.push(provider.value.trim())
        provider.value = ''
    }
}

const removeProvider = (index: number) => {
    hospitalInfo.insuranceProviders.splice(index, 1)
}

const addPayment = () => {
    if(!payment.value) return
    if(hospitalInfo.paymentMethods.length !== 4) {
        hospitalInfo.paymentMethods.push(payment.value.trim())
        payment.value = ''
    }
}

const removePayment = (index: number) => {
    hospitalInfo.paymentMethods.splice(index, 1)
}

const addFacility = () => {
    if(!facility.value) return
    if(hospitalInfo.facilitiesDetails.length !== 4) {
        hospitalInfo.facilitiesDetails.push(facility.value.trim())
        facility.value = ''
    }
}

const removeFacility = (index: number) => {
    hospitalInfo.facilitiesDetails.splice(index, 1)
}

const addAccess = () => {
    if(!access.value) return
    if(hospitalInfo.accessibilityFeatures.length !== 4) {
        hospitalInfo.accessibilityFeatures.push(access.value.trim())
        access.value = ''
    }
}

const removeAccess = (index: number) => {
    hospitalInfo.accessibilityFeatures.splice(index, 1)
}

const submitHospitalEntry = (e: MouseEvent) => {
    e.preventDefault()
    hospitalStore.addHospital(hospitalInfo)
    if(form.value) {
        form.value.reset()
    }
    hospitalInfo.departments = []
    hospitalInfo.insuranceProviders = []
    hospitalInfo.paymentMethods = []
    hospitalInfo.facilitiesDetails = []
    hospitalInfo.accessibilityFeatures = []
    hospitalInfo.extraInfo = ''
}
</script>

<style scoped lang="scss">
.add-hospital {
    padding-block: 6rem;
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
        .group {
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

        .add__array {
            display: flex;
            align-items: center;
            gap: var(--space-xs);
            
            input {
                border: 1.5px solid var(--clr-neutral-200);
                border-radius: 0.25rem;

                &:is(:focus, :hover, :active) {
                    border-color: var(--clr-neutral-400);
                }

                &:disabled {
                    opacity: 0.5;

                    &:hover {
                        border-color: var(--clr-neutral-200);
                    }
                }
            }

            .add {
                padding: .25rem;
                border: 1.5px solid var(--clr-neutral-200);
                border-radius: 0.25rem;

                &:is(:focus, :hover, :active) {
                    border-color: var(--clr-neutral-400);
                    color: var(--clr-primary-600);
                }
            }
        }

        .array__list {
            display: flex;
            gap: var(--space-3xs);

            .array__item {
                padding: .25rem;
                border: 1.5px solid var(--clr-neutral-200);
                background-color: var(--clr-primary-100);
                border-radius: 0.25rem;
                font-size: var(--fs-300);

                &:hover {
                    cursor: pointer;
                }
            }
        }
    }

    .form__group:has(.add__array) {
        gap: .5rem;
    }
}
</style>