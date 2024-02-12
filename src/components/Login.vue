<template>
    <form action=""
        @submit.prevent="onSubmit"
        class="register__modal"
    >
        <div class="content">
            <button class="return__icon" @click="$emit('closeLogin')">
                <i-icon-park-outline-back/>
            </button>
            <div class="heading">
                <h2>Continue to MedNex</h2>
                <p>Stay on track with your healthcare</p>
            </div>
            <div class="form">
                <div class="form__group">
                    <label for="email">Email Address</label>
                    <input
                      v-model="loginData.email"
                      type="email"
                      required
                      name="email"
                      id="email"
                      placeholder="name@example.com"
                      class="form__input"
                    >
                </div>
                <div class="form__group">
                    <label for="password">Password</label>
                    <input
                      v-model="loginData.password"
                      type="password"
                      required
                      name="password"
                      id="password"
                      class="form__input"
                    >
                </div>
                <button class="button main__btn" data-type="primary" @click="login">Continue</button>
                <p class="conditions"><button class="button extra__btn" data-type="tertiary">Forgot Password?</button></p>
                <p class="or">OR</p>
                <button class="button main__btn" data-type="secondary">Continue with Google</button>
                <div class="form__footer">
                    <p>Don't have an account?</p>
                    <button class="button" data-type="tertiary" @click="$emit('openSignup')">Sign Up</button>
                </div>
            </div>
        </div>

        <div class="sidebar">
            <p>
                Join thousands of individuals in Nigeria to leverage MedNex for seamless healthcare management and collaboration every day.
            </p>
        </div>
    </form>
</template>
  
<script setup lang="ts">
import { defineEmits, reactive  } from 'vue';
import type { RegisterUser } from '@/interfaces/register';
import { useAuthStore } from '@/stores/AuthStore'

const authStore = useAuthStore()

const loginData = reactive<RegisterUser>({
    email: '',
    password: ''
})

const emits = defineEmits(['closeLogin', 'openSignup'])

const login = async () => {
    authStore.login(loginData.email, loginData.password)
}

const onSubmit = () => {

}
</script>

<style scoped>

</style>
  