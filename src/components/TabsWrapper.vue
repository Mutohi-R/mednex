<template>
    <div class="tabs">
        <div class="tabs__header">
          <FontAwesomeIcon @click="" class="icon" :icon="faShare" />
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
          <FontAwesomeIcon @click="" class="icon" :icon="faXmark" />
        </div>
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
import { ref, provide, useSlots, type Slot } from 'vue';
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faShare, faXmark } from '@fortawesome/free-solid-svg-icons';

const props = defineProps({
  // No props defined since none are received
});

const slots = useSlots(); // Access slots using useSlots composable

const tabTitles = ref(
  slots.default?.().map((tab) => tab.props?.title) ?? [] // Handle potential absence of slots
);
const selectedTitle = ref(tabTitles.value[0]);

provide('selectedTitle', selectedTitle);
</script>

<style lang="scss" scoped>

.tabs__header {
  display: flex;
  justify-content: space-between;
  
  ul {
    display: flex;
    align-items: center;

    li {
      position: relative;
      cursor: pointer;
      font-weight: var(--fw-semibold);

      p {
        padding: .5rem;
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