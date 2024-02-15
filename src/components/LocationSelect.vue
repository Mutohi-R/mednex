<template>
    <div class="dropdown__wrapper | relative" ref="dropdown">
        <div class="dropdown__selected-option | flex justify-between items-center" @click="isDropDownVisible = !isDropDownVisible">
            <p>{{ selectedOption || 'Select a location' }}</p>
            <i-mingcute-down-fill width="32" height="32"/>
        </div>
        <div 
          class="options__wrapper | flow"
          v-if="isDropDownVisible"
        >
            <div 
              class="option"
              v-for="(option, index) in options"
              :key="index"
              @click="toggleOptionSelect(option)"
            >
                <p>{{ option }}</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faSquareCaretDown } from '@fortawesome/free-regular-svg-icons';

const props = defineProps(['options', 'modelValue'])

const selectedOption = ref<string | null>(null)
const isDropDownVisible = ref<boolean>(false)
const dropdown = ref<HTMLElement | null>(null)

const emit = defineEmits(['update:modelValue'])

const toggleOptionSelect = (option: string): void => {
    selectedOption.value = option
    emit('update:modelValue', option)
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
        padding: 1rem;
        background: var(--clr-neutral-200);
        border-radius: .5rem;

        p {
            padding: .5rem;
            background-color: var(--clr-neutral-100);
            border-radius: .5rem;

            &:hover {
                color: var(--clr-neutral-100);
                background-color: var(--clr-neutral-300);
                cursor: pointer;
            }
        }
    }
}
</style>