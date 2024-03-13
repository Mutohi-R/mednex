<template>
  <main>
    <Toast></Toast>
    <section
      class="hero | content-grid | bg-clr-primary-500 text-clr-neutral-100"
    >
      <div style="--_flow-space: 1rem" class="flow breakout">
        <h1 class="fs-900 ff-accent fw-bold text-center text-balance">
          Discover healthcare near you
        </h1>
        <h2 class="fs-600 text-center">
          <span class="">Search</span>, <span class="">export</span>, and
          <span class="">share</span> hospitals in your region
        </h2>
      </div>
      <div class="filter | text-clr-neutral-400">
        <div class="search">
          <FontAwesomeIcon
            class="icon"
            style="color: var(--clr-neutral-300)"
            :icon="faMagnifyingGlass"
          />
          <input
            v-model="searchQuery"
            name="search"
            id="search"
            @input="getHospitalsBySearch(searchQuery)"
            type="text"
            placeholder="Have an hospital in mind?"
          />
        </div>
        <!-- <div class="filter__choices">
          <p>Filters</p>
          <FontAwesomeIcon :icon="faAngleDown" />
        </div> -->
        <div class="location | flex items-center">
          <location-select v-model="parentSelectedOption" />
        </div>
        <div
          class="share"
          @click="
            hospitalStore.exportHospitals(renderedHospitals);
            shareModalIsOpen = true;
          "
        >
          <FontAwesomeIcon class="icon" :icon="faShare" />
        </div>
      </div>
    </section>
    <teleport to="#share-modal">
      <Transition name="modal">
        <div v-if="shareModalIsOpen" class="root | relative">
          <share-modal ref="shareModal" @close="shareModalIsOpen = false"></share-modal>
        </div>
      </Transition>
    </teleport>
    <hospital-list></hospital-list>
  </main>
</template>

<script setup lang="ts">
import { ref, type Ref } from "vue";
import { storeToRefs } from "pinia";
import { useAuthStore } from "@/stores/AuthStore";
import useHospitalStore from "@/stores/HospitalStore";
import { onClickOutside } from "@vueuse/core";
import LocationSelect from "@/components/LocationSelect.vue";
import ShareModal from "@/components/ShareModal.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faAngleDown,
  faMagnifyingGlass,
  faShare,
} from "@fortawesome/free-solid-svg-icons";

import HospitalList from "@/components/HospitalList.vue";

const hospitalStore = useHospitalStore();
const { renderedHospitals } = storeToRefs(hospitalStore);
const authStore = useAuthStore();

const shareModalIsOpen: Ref<boolean> = ref(false);
const shareModal: Ref<HTMLDivElement | null> = ref(null)

const parentSelectedOption: Ref<string | null> = ref(null);
const searchQuery: Ref<string> = ref("");

const getHospitalsBySearch = (searchQuery: string) => {
  hospitalStore.getHospitalsBySearchQuery(
    searchQuery.trim(),
    <string>parentSelectedOption.value?.trim()
  );
};

onClickOutside(shareModal, () => {
  shareModalIsOpen.value = false
})
</script>

<style scoped lang="scss">
.hero {
  position: relative;
  padding-block: 8rem 4rem;
  /* background-image: linear-gradient(
    var(--clr-primary-400) 50%,
    var(--clr-secondary-100) 50%
  ); */

  @media only screen and (max-width: 400px) {
    h1, h2 {
      text-align: start;
    }
  }
}

.filter {
  position: absolute;
  bottom: -2rem;
  display: grid;
  align-items: center;
  place-self: center;
  grid-template-columns: 3fr 1fr min-content;
  column-gap: var(--space-2xs);
  width: 100%;

  .search {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--space-2xs);
    padding: 1rem;
    background: var(--clr-neutral-100);
    border-radius: 0.25rem;
    box-shadow: 0px 6px 10px 4px hsla(230, 7%, 68%, 0.3);

    input {
      width: 100%;

      &:is(:focus, :hover, :active) {
        outline: none;
      }
    }
  }

  .filter__choices {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    background: var(--clr-neutral-100);
    border-radius: 0.25rem;
    box-shadow: 0px 6px 10px 4px hsla(230, 7%, 68%, 0.3);

    &:hover {
      cursor: pointer;
    }
  }

  .share {
    padding: 1rem;
    background: var(--clr-neutral-100);
    border-radius: 0.25rem;
    box-shadow: 0px 6px 10px 4px hsla(230, 7%, 68%, 0.3);

    .icon {
      font-size: 1.3rem;
    }

    &:hover {
      cursor: pointer;
    }
  }
}
h2 {
  span {
    color: var(--clr-neutral-600);
  }
}

.root {
  position: fixed;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal-enter-active,
.modal-leave-active {
  transition: all 0.3s ease-out;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
  transform: scale(1.1);
}
</style>
