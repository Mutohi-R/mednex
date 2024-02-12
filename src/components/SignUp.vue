<template>
  <form action="" @submit.prevent="onSubmit" class="register__modal">
    <div class="content">
      <button class="return__icon" @click="$emit('closeSignup')">
        <i-icon-park-outline-back />
      </button>
      <div class="heading">
        <h2>Welcome to MedNex</h2>
        <p>Get started - It's free. No credit card needed</p>
      </div>
      <div class="form">
        <div class="form__group">
          <label for="email">Email Address</label>
          <input
            @input="validateInput"
            v-model="registerData.email"
            type="email"
            required
            name="email"
            id="email"
            placeholder="name@example.com"
            class="form__input"
          />
        </div>
        <div class="form__group">
          <label for="password">Password</label>
          <input
            @input="validateInput"
            v-model="registerData.password"
            type="password"
            required
            name="password"
            id="password"
            class="form__input"
          />
        </div>
        <button class="button main__btn" data-type="primary" @click="register">
          Continue
        </button>
        <p class="conditions">
          By clicking "Continue" you agree to the MedNex's
          <button class="button" data-type="tertiary">Terms Of Service</button>
          and
          <button class="button" data-type="tertiary">Privacy Policy</button>.
        </p>
        <p class="or">OR</p>
        <button class="button main__btn" data-type="secondary">
          Continue with Google
        </button>
        <div class="form__footer">
          <p>Already have an account?</p>
          <button
            class="button"
            data-type="tertiary"
            @click="$emit('openLogin')"
          >
            Login
          </button>
        </div>
      </div>
    </div>

    <div class="sidebar">
      <p>
        Join thousands of individuals in Nigeria to leverage MedNex for seamless
        healthcare management and collaboration every day.
      </p>
    </div>
  </form>
</template>

<script setup lang="ts">
import { defineEmits, reactive, ref } from "vue";
import type { Ref } from "vue";
import type { RegisterUser } from "@/interfaces/register";
import { useAuthStore } from "@/stores/AuthStore";

const emits = defineEmits(["closeSignup", "openLogin"]);
const authStore = useAuthStore();
const invalidEmail: Ref<boolean | null> = ref(null);
const invalidPassword: Ref<boolean | null> = ref(null);
const formValid: Ref<boolean | null> = ref(null);

const registerData = reactive<RegisterUser>({
  email: "",
  password: "",
});

const validateInput = (e: Event): void => {
  const target = e.target as HTMLInputElement;

  const validateEmail = (): void => {
    if (
      target.hasAttribute("type") &&
      target.getAttribute("type") === "email"
    ) {
      const regex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/g;

      if (target.value.length === 0) {
        target.removeAttribute("data-type");
        invalidEmail.value = null;
      } else if (!regex.test(target.value)) {
        target.setAttribute("data-type", "invalid");
        invalidEmail.value = true;
      } else {
        target.setAttribute("data-type", "valid");
        invalidEmail.value = false;
      }
    }
  };

  const validatePassword = () => {
    if (
      target.hasAttribute("type") &&
      target.getAttribute("type") === "password"
    ) {
      const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/g;

      if (target.value.length === 0) {
        target.removeAttribute("data-type");
        invalidPassword.value = null;
      } else if (!regex.test(target.value)) {
        target.setAttribute("data-type", "invalid");
        invalidPassword.value = true;
      } else {
        target.setAttribute("data-type", "valid");
        invalidPassword.value = false;
      }
    }
  };

  validateEmail();
  validatePassword();

  formValid.value =
    target.value.length !== 0 &&
    !invalidEmail.value &&
    !invalidPassword.value &&
    registerData.email.length !== 0 &&
    registerData.password.length !== 0
      ? true
      : false;
};

const register = async () => {
  authStore.signup(registerData.email, registerData.password);
};
const onSubmit = () => {};
</script>

<style scoped></style>
