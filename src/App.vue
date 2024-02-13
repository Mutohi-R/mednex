<template>
  <nav-bar @open-signup="openSignup" @open-login="openLogin"></nav-bar>
  <dialog 
    ref="signup" 
    id="signup" 
    class="register"
    @click="closeSignup($event)"
  >
    <sign-up @close-signup="buttonCloseSignup" @open-login="openLogin"></sign-up>
  </dialog>
  <dialog 
    ref="login" 
    id="login" 
    class="register"
    @click="closeLogin($event)"
  >
    <login @close-login="buttonCloseLogin" @open-signup="openSignup"></login>
  </dialog>
  <section class="sidebar">
    
  </section>
  <router-view></router-view>
</template>

<script setup lang="ts">
  import { ref, onMounted } from 'vue';
  import type { Ref } from 'vue';
  import { useAuthStore } from './stores/AuthStore';

  import NavBar from '@/components/NavBar.vue';
  import Login from '@/components/Login.vue'
  import SignUp from '@/components/SignUp.vue';

  const authStore = useAuthStore()
  

  const login: Ref<HTMLDialogElement | null> = ref(null)
  const signup: Ref<HTMLDialogElement | null> = ref(null)

  onMounted(() => {
    authStore.init()
  }) 

  const openSignup = (): void => {
    login.value?.close()
    signup.value?.showModal()
  } 
  const closeSignup = (e: Event): void => {
    if ((e.target as HTMLDialogElement).id === "signup") {
      signup.value?.close();
    }
  }

  const buttonCloseSignup = (): void => {
    signup.value?.close();
  }

  const openLogin = (): void => {
    signup.value?.close();
    login.value?.showModal()
  }

  const closeLogin = (e: Event): void => {
    if((e.target as HTMLDialogElement).id === 'login') {
      login.value?.close()
    }
  }

  const buttonCloseLogin = (): void => {
    login.value?.close()
    console.log('button close login')
  }
</script>

<style scoped>

</style>
