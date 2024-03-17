<template>
  <li class="hospital__item">
    <div class="card__wrapper">
      <div class="card">
        <div class="flex items-center justify-center">
          <FontAwesomeIcon class="logo" :icon="faImage" />
        </div>
        <div class="mid | grid">
          <div class="heading | flex items-center justify-between">
            <h3></h3>
            <FontAwesomeIcon class="icon" :icon="faCircle" />
          </div>
          <p></p>
          <p>
            <span></span>
          </p>
          <div class="departments">
            <p class="departments"></p>
            <p class="departments"></p>
            <p class="departments"></p>
            <p class="departments"></p>
          </div>
        </div>
        <div class="side | grid gap-4">
          <div class="location | flex items-center gap-space-xs">
            <FontAwesomeIcon class="icon" :icon="faCircle" />
            <p>
              <span class="text-clr-neutral-400"></span>
            </p>
          </div>
          <div class="telephone | flex items-center gap-space-xs">
            <FontAwesomeIcon class="icon" :icon="faCircle" />
            <p></p>
          </div>
          <div class="booking | flex items-center gap-space-xs">
            <FontAwesomeIcon class="icon" :icon="faCircle" />
            <p></p>
          </div>
          <div class="operation | flex items-center gap-space-xs">
            <FontAwesomeIcon class="icon" :icon="faCircle" />
            <p></p>
          </div>
        </div>
      </div>
    </div>
  </li>
</template>

<script setup lang="ts">
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faAngleDown,
  faHeart,
  faShare,
  faCircle
} from "@fortawesome/free-solid-svg-icons";
import {
  faCalendar,
  faClock,
  faImage,
} from "@fortawesome/free-regular-svg-icons";
</script>

<style scoped lang="scss">
.hospital__list {
  .icon {
    animation: pulse-color 1.2s infinite;
    font-size: 1.5rem;
  }

  .card {

    .logo {
      animation: pulse-color 1.2s infinite;
      font-size: 9rem;
    }

    .mid {

      h3 {
        width: 70%;
        height: 1.2rem;
        animation: pulse-bg 1.2s infinite;
        border-radius: 100vw;
      }

      p {
        width: 100%;
        height: .9rem;
        animation: pulse-bg 1.2s infinite;
        border-radius: 100vw;

        &:nth-of-type(1) {
          width: 50%;
        }
      }

      .departments {

        .departments {
          width: 4rem;
        }
      }
    }

    .side {

      div {

        p {
          height: 1rem;
          animation: pulse-bg 1.2s infinite;
          border-radius: 100vw;
        }

        &:first-of-type p {
          width: 60%;
        }

        &:nth-of-type(2) p {
          width: 40%;
        }

        &:nth-of-type(3) p {
          width: 80%;
        }

        &:last-of-type p {
          width: 40%;
        }
      }
    }
  }
}

@keyframes pulse-bg {
  0% {
    background: var(--clr-neutral-200);
  }

  50% {
    background: var(--clr-neutral-300);
  }

  100% {
    background: var(--clr-neutral-200);
  }
}
@keyframes pulse-color {
  0% {
    color: var(--clr-neutral-200);
  }

  50% {
    color: var(--clr-neutral-300);
  }

  100% {
    color: var(--clr-neutral-200);
  }
}
</style>
