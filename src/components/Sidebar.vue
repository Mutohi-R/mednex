<template>
  <section class="sidebar">
    <nav class="sidebar__nav">
      <ul role="list" class="nav__list nav__top">
        <router-link to="/">
          <li class="item">
            <FontAwesomeIcon class="icon" :icon="faHouse" />
            <p>Home</p>
          </li>
        </router-link>

        <router-link to="/dashboard">
          <li class="item">
            <i-material-symbols-dashboard class="icon" />
            <p>Dashboard</p>
          </li>
        </router-link>
        
        <router-link to="/hospitals">
          <li class="item">
            <FontAwesomeIcon class="icon" :icon="faHospital" />
            <p>Hospitals</p>
          </li>
        </router-link>
        <!-- <li class="item">
          <FontAwesomeIcon class="icon" :icon="faHeart" />
          <p>Saved</p>
        </li> -->
        <!-- <li class="item">
          <FontAwesomeIcon class="icon" :icon="faComments" />
          <p>Reviews</p>
        </li> -->
        <li class="item">
          <FontAwesomeIcon class="icon" :icon="faQuestion" />
          <p>Help</p>
        </li>
      </ul>
      <ul role="list" class="nav__list nav__bottom">
        <router-link to="/user">
          <li class="item">
            <FontAwesomeIcon class="icon" :icon="faUser" />
            <p v-if="userData.username">{{ userData.username }}</p>
            <p v-else>User</p>
          </li>
        </router-link>
        <li class="item" @click="authStore.logout">
          <FontAwesomeIcon class="icon" :icon="faArrowRightFromBracket" />
          <p>Log Out</p>
        </li>
      </ul>
    </nav>
  </section>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useAuthStore } from "@/stores/AuthStore";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faHouse,
  faHeart,
  faComments,
  faQuestion,
  faGear,
  faUser,
  faArrowRightFromBracket,
  faHospital,
} from "@fortawesome/free-solid-svg-icons";

const authStore = useAuthStore();
const { userData } = storeToRefs(authStore);
</script>

<style scoped lang="scss">
.sidebar {
  position: absolute;
  z-index: -1;
  top: 3.5rem;
  right: 0;
  padding-block-start: 1rem;
  background: var(--clr-neutral-100);
  border-radius: 0 0 0.5rem 0.5rem;
  box-shadow: 0px 6px 12px 0px hsla(230, 7%, 78%, 0.3);
}

.sidebar__nav {
  display: grid;
  align-content: space-between;
  height: 100%;
  gap: var(--space-s);

  .item {
    display: flex;
    align-items: center;
    gap: var(--space-s);
    padding: 0.8rem 2.5rem;
    cursor: pointer;

    &:hover {
      color: var(--clr-primary-600);
      .icon {
        translate: 0 -3px;
        transition-duration: 0.5s;
      }
    }
  }
}
</style>
