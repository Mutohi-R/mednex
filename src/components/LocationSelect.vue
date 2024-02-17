<template>
    <div class="dropdown__wrapper | relative" ref="dropdown">
        <div class="dropdown__selected-option | flex justify-between items-center" @click="isDropDownVisible = !isDropDownVisible">
            <p>{{ selectedLocation || 'Select a location' }}</p>
            <i-mingcute-down-fill width="32" height="32"/>
        </div>
        <Transition name="slide">
            <div
              class="options__wrapper"
              v-if="isDropDownVisible"
            >
                <div
                  class="option"
                  v-for="(location, index) in locations"
                  :key="index"
                  @click="toggleOptionSelect(location)"
                >
                    <p>{{ location }}</p>
                </div>
            </div>
        </Transition>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';
import useHospitalStore from '@/stores/HospitalStore';
import { storeToRefs } from 'pinia';

const props = defineProps(['options', 'modelValue'])
const hospitalStore = useHospitalStore();
const { locations } = storeToRefs(hospitalStore)


const selectedLocation = ref<string | null>(null)
const isDropDownVisible = ref<boolean>(false)
const dropdown = ref<HTMLElement | null>(null)

const emit = defineEmits(['update:modelValue'])

const toggleOptionSelect = (location: string): void => {
    selectedLocation.value = location
    emit('update:modelValue', location)
    isDropDownVisible.value = false
}

const closeDropDown = (e: MouseEvent) => {
    if (dropdown.value && e.target instanceof Node) {
        if (!dropdown.value.contains(e.target)) {
            isDropDownVisible.value = false
        }
    }
}

onMounted(() => {
    window.addEventListener('click', closeDropDown)
})

onBeforeUnmount(() => {
    window.removeEventListener('click', closeDropDown)
})
</script>

<style lang="scss" scoped>
.dropdown__wrapper {
    width: 100%;

    .dropdown__selected-option {
        width: 100%;
    }

    .options__wrapper {
        position: absolute;
        top: 3rem;
        width: 100%;
        max-height: 20rem;
        background: var(--clr-neutral-100);
        border-radius: .5rem;
        overflow-y: scroll;

        div {
            padding: .5rem;

            &:hover {
                color: var(--clr-neutral-100);
                background-color: var(--clr-neutral-300);
                cursor: pointer;
            }
        }

        div + div {
            border-top: 1px solid var(--clr-neutral-500);
        }
    }
}

.slide-enter-from,
.slide-leave-to {
    translate: 0 -100%;
}

.slide-enter-active {
    transition: 1s ease-in;
}
</style>