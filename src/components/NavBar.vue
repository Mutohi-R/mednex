<template>
  <header class="primary__header ">
    <div class="container | flex items-center gap-space-s justify-between">
      <div class="flex items-center gap-space-2xs">
        <i-ci-hamburger-lg 
          v-if="isAuthenticated" 
          class="hamburger"
          @click="$emit('hamburgerClick')"
        />
        <Logo />
      </div>
      <nav class="primary__nav | flex gap-space-xs">
        <ul v-if="isAuthenticated" role="list" class="nav__list | flex items-center gap-space-xs">
          <li class="list__icon">
            <FontAwesomeIcon class="bell" :icon="faEnvelope" />
          </li>
          <li class="list__icon">
            <FontAwesomeIcon class="bell" :icon="faBell" />
          </li>
          <li class="profile__icon"></li>
        </ul>
        <ul v-if="!isAuthenticated" role="list" class="nav__action | flex items-center gap-space-xs">
          <li>
            <button class="button" data-type="primary" @click="$emit('openSignup')">Sign Up</button>
          </li>
          <li>
            <button class="button" data-type="secondary" @click="$emit('openLogin')">Login</button>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { storeToRefs } from "pinia";
import { useAuthStore } from "@/stores/AuthStore";


import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faBell, faEnvelope } from "@fortawesome/free-regular-svg-icons";
import Logo from "./Logo.vue";

const authStore = useAuthStore()
const { isAuthenticated } = storeToRefs(authStore)
const emit = defineEmits(['openSignup', 'openLogin', 'hamburgerClick'])



</script>

<style lang="scss" scoped>
.primary__header {
  position: fixed;
  z-index: 99;
  width: 100%;
  padding: 0.75rem 1.5rem;
  background: var(--clr-neutral-100);
  box-shadow: 0px 6px 12px 0px hsla(230, 7%, 78%, 0.3);

  .container {
    max-width: 1800px;
    margin-inline: auto;
  }
}

.hamburger {
  width: 2.5rem;
  height: 2.5rem;
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
</style>
