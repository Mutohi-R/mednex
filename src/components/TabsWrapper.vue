<template>
    <div class="tabs">
        <div class="tabs__container">
          <div class="tabs__header">
            <!-- <download-csv :data="renderedHospitals"> -->
              <div @click="hospitalStore.exportHospitals(renderedHospitals)" class="share | flex items-center gap-space-2xs">
                <p class="fs-300 fw-semibold">Share</p>
                <FontAwesomeIcon @click="" class="icon" :icon="faShare" />
              </div>
            <!-- </download-csv> -->
            <ul>
                <li
                  v-for="(title) in tabTitles"
                  :key="title"
                  @click="selectedTitle = title"
                  :class="{ 'active': selectedTitle == title }"
                >
                    <p>{{ title }}</p>
                </li>
            </ul>
            <FontAwesomeIcon @click="$emit('close')" class="icon cursor-pointer" :icon="faXmark" />
          </div>
        </div>
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
import { ref, provide, useSlots, type Slot, defineEmits } from 'vue';
import { type HospitalForm } from '@/interfacesTypes/hospitalForm';
import useHospitalStore from '@/stores/HospitalStore';
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faShare, faXmark } from '@fortawesome/free-solid-svg-icons';

const hospitalStore = useHospitalStore();

const props = defineProps({
  hospital: {
    type: Object as () => HospitalForm,
    required: true
  },
  renderedHospitals: {
    type: Array as () => HospitalForm[],
    required: true
  }
});

const emit = defineEmits(['close']);

const slots = useSlots(); // Access slots using useSlots composable

const tabTitles = ref(
  slots.default?.().map((tab) => tab.props?.title) ?? [] // Handle potential absence of slots
);
const selectedTitle = ref(tabTitles.value[0]);

provide('selectedTitle', selectedTitle);
</script>

<style lang="scss" scoped>

.tabs__container {
  position: relative;

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 1px;
    background: var(--clr-neutral-200);
  }
}

.tabs__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-inline: 1rem;

  .share {
    padding: .5rem;
    border-radius: .5rem;

    &:hover {
      background: color-mix(in srgb, var(--clr-neutral-200) 40%, var(--clr-neutral-100) 60%);
      color: var(--clr-neutral-600);
      cursor: pointer;
    }
  }

  .icon {
    font-size: 1.5rem;
  }
  
  ul {
    display: flex;
    align-items: center;
    gap: var(--space-2xs);

    li {
      position: relative;
      cursor: pointer;
      font-size: var(--fs-300);
      font-weight: var(--fw-semibold);

      p {
        padding: 1rem .5rem;
      }

      &:hover {
        background-color: color-mix(in srgb, var(--clr-neutral-200) 40%, var(--clr-neutral-100) 60%);
        color: var(--clr-neutral-800);
      }


      &.active {
        color: var(--clr-primary-600);

        &::before {
          content: '';
          position: absolute;
          bottom: 0;
          width: 100%;
          height: 2px;
          background: var(--clr-primary-400);
        }
      }
    }
  }

  
}
</style>