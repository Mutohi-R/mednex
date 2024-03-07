<template>
  <form action="" @submit.prevent="onSubmit" class="register__modal">
    <div class="content">
      <button class="return__icon" @click="$emit('closeLogin')">
        <i-icon-park-outline-back />
      </button>
      <div class="heading">
        <h2>Continue to MedNex</h2>
        <p>Stay on track with your healthcare</p>
      </div>
      <div class="form">
        <div class="form__group">
          <label for="email">Email Address</label>
          <p
            v-if="invalidEmail"
            class="flex items-center gap-2 fs-200 text-clr-error-400"
          >
            Invalid email address
          </p>
          <p
            v-if="errors.emailInUse"
            class="flex items-center gap-2 fs-200 text-clr-error-400"
          >
            This email is associated with another account
          </p>
          <input
            @input="validateInput"
            v-model="loginData.email"
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
          <p v-if="invalidPassword" class="fs-200 text-clr-info-400">
            Password must be at least 8 characters long and must contain at
            least one number.
          </p>
          <input
            @input="validateInput"
            v-model="loginData.password"
            type="password"
            required
            name="password"
            id="password"
            class="form__input"
          />
        </div>
        <button
          class="button main__btn"
          data-type="primary"
          @click="login"
          :disabled="!formValid"
        >
          Continue
        </button>
        <p class="conditions">
          <button class="button extra__btn" data-type="tertiary">
            Forgot Password?
          </button>
        </p>
        <p class="or">OR</p>
        <button class="button main__btn" data-type="secondary">
          Continue with Google
        </button>
        <div class="form__footer">
          <p>Don't have an account?</p>
          <button
            class="button"
            data-type="tertiary"
            @click="$emit('openSignup')"
          >
            Sign Up
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
import { reactive, ref } from "vue";
import type { Ref } from "vue";
import { storeToRefs } from "pinia";
import type { RegisterUser } from "@/interfacesTypes/register";
import { useAuthStore } from "@/stores/AuthStore";

const authStore = useAuthStore();
const { errors } = storeToRefs(useAuthStore());

const invalidEmail: Ref<boolean | null> = ref(null);
const invalidPassword: Ref<boolean | null> = ref(null);
const formValid: Ref<boolean | null> = ref(null);

const loginData = reactive<RegisterUser>({
  email: "",
  password: "",
});

const emit = defineEmits(["closeLogin", "openSignup"]);

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
    loginData.email.length !== 0 &&
    loginData.password.length !== 0
      ? true
      : false;
};

const login = async () => {
  authStore.login(loginData.email, loginData.password);
  emit("closeLogin");
};

const onSubmit = () => {};
</script>

<style scoped></style>
