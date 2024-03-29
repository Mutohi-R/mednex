<template>
  <section class="hospital__wrapper | content-grid">
    <ul class="hospital__list | partial | grid gap-3" role="list">
      <li class="text-center" v-if="!renderedHospitals.length">
        No hospitals found
      </li>
      <li
        class="hospital__item"
        v-for="(hospital, index) in renderedHospitals"
        :key="index"
      >
        <div class="card__wrapper">
          <div class="card">
            <div class="flex items-center justify-center">
              <FontAwesomeIcon class="logo" :icon="faImage" />
            </div>
            <div class="mid | grid">
              <div class="heading | flex items-center justify-between">
                <h3
                  @click="toggleIsExpanded(<string>hospital.id)"
                  class="h3 flex-grow fw-semibold text-clr-secondary-700 cursor-pointer underline"
                >
                  {{ hospital.name }}
                </h3>
                <FontAwesomeIcon
                  @click.stop="
                    hospitalStore.toggleFavourite(<string>hospital.id)
                  "
                  class="icon heart"
                  :style="{
                    color: hospital.isFavourite
                      ? 'var(--clr-error-500)'
                      : 'var(--clr-neutral-300)',
                  }"
                  :icon="faHeart"
                />
              </div>
              <p>{{ hospital.website }}</p>
              <p>
                <span>Emergency Care: </span
                >{{ hospital.emergencyCareDetails || "N/A" }}
              </p>
              <div class="departments">
                <p
                  class="department"
                  v-for="(department, index) in hospital.departments"
                  :key="index"
                >
                  {{ department }}
                </p>
              </div>
            </div>
            <div class="side | grid gap-4">
              <div class="location | flex items-center gap-space-xs">
                <i-ep-location class="icon" />
                <p>
                  {{ hospital.location }}, Nigeria
                  <span class="text-clr-neutral-400">(43,000 km)</span>
                </p>
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
                <p>
                  {{
                    `${hospital.operatingFrom.hours}:${hospital.operatingFrom.minutes}0`
                  }}
                  -
                  {{
                    `${hospital.operatingTo.hours}:${hospital.operatingTo.minutes}0`
                  }}
                </p>
              </div>
            </div>
          </div>
        </div>
        <TabsWrapper
          @close="toggleIsExpanded(<string>hospital.id)"
          class=""
          :renderedHospitals="renderedHospitals"
          :hospital="hospital"
          v-if="hospital.isExpanded"
        >
          <Tab title="Overview">
            <div v-if="hospital.isExpanded" class="card__details">
              <MdPreview
                :model-value="hospital.extraInfo"
                :preview-theme="'vuepress'"
              />
            </div>
          </Tab>
          <Tab title="Reviews">
            <div v-if="hospital.isExpanded" class="card__details">
              <hospital-comments :id="hospital.id" :comments="hospital.comments"></hospital-comments>
            </div>
          </Tab>
        </TabsWrapper>
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import useHospitalStore from "@/stores/HospitalStore";
import HospitalComments from "./HospitalComments.vue";
import TabsWrapper from "./TabsWrapper.vue";
import Tab from "./Tab.vue";
import { type HospitalForm } from "@/interfacesTypes/hospitalForm";
import { MdPreview, MdCatalog } from "md-editor-v3";
import "md-editor-v3/lib/style.css";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faAngleDown,
  faHeart,
  faShare,
} from "@fortawesome/free-solid-svg-icons";
import {
  faCalendar,
  faClock,
  faImage,
} from "@fortawesome/free-regular-svg-icons";

const hospitalStore = useHospitalStore();
const { renderedHospitals, isHospitalsLoading } = storeToRefs(hospitalStore);

const toggleIsExpanded = (id: string) => {
  hospitalStore.toggleIsExpanded(id);
};
</script>

<style lang="scss">
.hospital__wrapper {
  padding-block: 3rem;
  background: color-mix(
    in srgb,
    var(--clr-primary-200) 10%,
    var(--clr-neutral-100) 90%
  );
}

.hospital__list {
  .icon {
    color: var(--clr-neutral-600);
    font-size: 1.4rem;
    min-width: 1.5rem;
    aspect-ratio: 1;
  }

  .hospital__item {
    display: grid;
    gap: var(--space-2xs);
    background: var(--clr-neutral-100);
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
          padding: 0.25rem 0.5rem;
          background: color-mix(
            in srgb,
            var(--clr-primary-200) 30%,
            var(--clr-neutral-100) 70%
          );
          border-radius: 1rem;
        }
      }
    }

    .side {
      padding: 1rem;
      background: color-mix(
        in srgb,
        var(--clr-primary-200) 30%,
        var(--clr-neutral-100) 70%
      );
      border-radius: 1rem;
    }
  }

  @media only screen and (max-width: 870px) {
    .card {
      grid-template-columns: 1fr !important;
    }

    div:has(> .logo) {
      display: none;
    }

    .mid {
      display: grid;
      gap: var(--space-s);
    }
  }
}
</style>
