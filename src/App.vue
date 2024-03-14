<template>
  <nav-bar
    @open-signup="openSignup"
    @open-login="openLogin"
  ></nav-bar>
  <dialog
    ref="signup"
    id="signup"
    class="register"
    @click="closeSignup($event)"
  >
    <sign-up
      @close-signup="buttonCloseSignup"
      @open-login="openLogin"
    ></sign-up>
  </dialog>
  <dialog ref="login" id="login" class="register" @click="closeLogin($event)">
    <login @close-login="buttonCloseLogin" @open-signup="openSignup"></login>
  </dialog>
  <!-- <div class="content-grid | relative">
    <Transition name="slide" class="sidebar | breakout">
      <sidebar ref="sidebar" v-if="sidebarOpen && isAuthenticated"></sidebar>
    </Transition>
  </div> -->
  <router-view></router-view>
  <Footer></Footer>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import type { Ref } from "vue";
import { storeToRefs } from "pinia";
import { useAuthStore } from "./stores/AuthStore";
import { onClickOutside } from "@vueuse/core";
import useHospitalStore from "./stores/HospitalStore";

import NavBar from "@/components/NavBar.vue";
import Login from "@/components/Login.vue";
import SignUp from "@/components/SignUp.vue";
import Footer from "@/components/Footer.vue";
import Random from "./components/Random.vue";

const authStore = useAuthStore();
const { isAuthenticated } = storeToRefs(authStore);
const router = useRouter();

const hospitalStore = useHospitalStore();

const login: Ref<HTMLDialogElement | null> = ref(null);
const signup: Ref<HTMLDialogElement | null> = ref(null);
const sidebarOpen: Ref<boolean> = ref(false);
const sidebar: Ref<HTMLDivElement | null> = ref(null);

onMounted(() => {
  authStore.init();
  hospitalStore.init();
});

// onClickOutside(sidebar, () => {
//   sidebarOpen.value = false;
// });

router.afterEach(() => {
  setTimeout(() => {
    sidebarOpen.value = false;
  }, 300);

  // sidebarOpen.value = false;
})

const openSignup = (): void => {
  login.value?.close();
  signup.value?.showModal();
};
const closeSignup = (e: Event): void => {
  if ((e.target as HTMLDialogElement).id === "signup") {
    signup.value?.close();
  }
};

const buttonCloseSignup = (): void => {
  signup.value?.close();
};

const openLogin = (): void => {
  signup.value?.close();
  login.value?.showModal();
};

const closeLogin = (e: Event): void => {
  if ((e.target as HTMLDialogElement).id === "login") {
    login.value?.close();
  }
};

const buttonCloseLogin = (): void => {
  login.value?.close();
  console.log("button close login");
};

const toggleSidebar = (): void => {
  sidebarOpen.value = !sidebarOpen.value;
};
</script>

<style scoped>
.slide-enter-from,
.slide-leave-to {
  transform: translateY(-100%);
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.5s ease-out;
}
</style>
