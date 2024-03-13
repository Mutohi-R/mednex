<template>
  <header class="primary__header | content-grid | relative">
    <div class="container | breakout | relative flex items-center gap-space-s justify-between">
      <div class="flex items-center gap-space-2xs">
        <Logo />
      </div>
      <nav class="primary__nav | flex justify-between items-center gap-space-xs" :class="{ 'grow': !isAuthenticated }">
        <!-- <ul
          v-if="isAuthenticated"
          role="list"
          class="nav__list | flex items-center gap-space-xs"
        >
          <li class="list__icon">
            <FontAwesomeIcon class="bell" :icon="faEnvelope" />
          </li>
          <li class="list__icon">
            <FontAwesomeIcon class="bell" :icon="faBell" />
          </li>
          <li class="profile__icon"></li>
        </ul> -->
        <ul v-if="!isAuthenticated" role="list" class="nav__links | flex gap-8 mx-auto text-clr-primary-600">
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/hospitals">Hospitals</router-link></li>
          <li><router-link to="">Pricing</router-link></li>
          <li><router-link to="">Reviews</router-link></li>
        </ul>
        <ul
          v-if="!isAuthenticated"
          role="list"
          class="nav__action | flex items-center gap-space-xs"
        >
          <li>
            <button
              class="button"
              data-type="primary"
              @click="$emit('openSignup')"
            >
              Sign Up
            </button>
          </li>
          <li>
            <button
              class="button"
              data-type="secondary"
              @click="$emit('openLogin')"
            >
              Login
            </button>
          </li>
        </ul>
        <ul>
          <li>
              <i-ci-hamburger-lg
                v-if="isAuthenticated"
                class="hamburger"
                @click="toggleSidebar"
              />
          </li>
        </ul>
      </nav>
      <Transition name="slide">
        <sidebar v-if="sidebarOpen && isAuthenticated"></sidebar>
      </Transition>
    </div>
    
  </header>
</template>

<script setup lang="ts">
import { ref, type Ref } from "vue";
import { useAuthStore } from "@/stores/AuthStore";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";
import { isAuthenticated, user } from "@/utils/vueAuth";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faBell, faEnvelope } from "@fortawesome/free-regular-svg-icons";
import Logo from "./Logo.vue";

const authStore = useAuthStore();
const router = useRouter();

const emit = defineEmits(["openSignup", "openLogin", "hamburgerClick"]);
const sidebarOpen: Ref<boolean> = ref(false);

router.afterEach(() => {
  setTimeout(() => {
    sidebarOpen.value = false;
  }, 300);

  // sidebarOpen.value = false;
})

const toggleSidebar = (): void => {
  sidebarOpen.value = !sidebarOpen.value;
};
</script>

<style lang="scss" scoped>
.primary__header {
  position: fixed;
  z-index: 99;
  width: 100%;
  padding: 0.75rem 0rem;
  background: var(--clr-neutral-100);
  box-shadow: 0px 6px 12px 0px hsla(230, 7%, 78%, 0.3);

  .container {
    max-width: 1800px;
    margin-inline: auto;
    background: var(--clr-neutral-100);
  }
}

.hamburger {
  // width: 2.2rem;
  // height: 2.2rem;
  scale: 1.5;
  color: var(--clr-primary-600);

  &:hover {
    cursor: pointer;
  }
}

.nav__list {
  .list__icon {
    font-size: 2rem;
    color: var(--clr-primary-600);
  }

  .profile__icon {
    width: 3rem;
    aspect-ratio: 1;
    border: 2px solid var(--clr-primary-600);
    border-radius: 50%;
  }
}

.slide-enter-from,
.slide-leave-to {
  transform: translateY(-100%);
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.5s ease-out;
}
</style>
