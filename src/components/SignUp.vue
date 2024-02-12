<template>
    <form action=""
        @submit.prevent="onSubmit"
        class="register__modal"
    >
        <div class="content">
            <button class="return__icon" @click="$emit('closeSignup')">
                <i-icon-park-outline-back/>
            </button>
            <div class="heading">
                <h2>Welcome to MedNex</h2>
                <p>Get started - It's free. No credit card needed</p>
            </div>
            <div class="form">
                <div class="form__group">
                    <label for="email">Email Address</label>
                    <input
                      v-model="registerData.email"
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
                      v-model="registerData.password"
                      type="password"
                      required
                      name="password"
                      id="password"
                      class="form__input"
                    >
                </div>
                <button class="button main__btn" data-type="primary" @click="register">Continue</button>
                <p class="conditions">
                    By clicking "Continue" you agree to the MedNex's 
                    <button class="button" data-type="tertiary">Terms Of Service</button> and 
                    <button class="button" data-type="tertiary">Privacy Policy</button>.
                </p>
                <p class="or">OR</p>
                <button class="button main__btn" data-type="secondary">Continue with Google</button>
                <div class="form__footer">
                    <p>Already have an account?</p>
                    <button class="button" data-type="tertiary" @click="$emit('openLogin')">Login</button>
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

const emits = defineEmits(['closeSignup', 'openLogin'])
const authStore = useAuthStore()

const registerData = reactive<RegisterUser>({
    email: '',
    password: ''
})

const register = async () => {
    authStore.signup(registerData.email, registerData.password)
}
const onSubmit = () => {

}
</script>

<style scoped>

</style>