<template>
    <main class="profile-container">
        <section class="content-grid">
            <div class="hero | breakout">
                <p class="fs-400 fw-semibold text-clr-neutral-100 uppercase">My Profile</p>
            </div>
            <div class="cards">
                <div class="card-1">
                    <div class="flex justify-between items-center gap-space-xs">
                        <div class="img">
                            <img v-if="userData.profilePicture" :src="userData.profilePicture" alt="">
                            <div v-else class="fs-900 text-clr-neutral-600">{{ userData.username.charAt(0).toUpperCase() }}</div>
                        </div>
                        <button class="button cursor-pointer" data-type="tertiary">Upload Photo</button>
                    </div>
                    <div class="grid gap-4">
                        <div class="group">
                            <div class="label">User Name</div>
                            <div class="flex justify-between items-center gap-space-xs">
                                <p v-if="!isUserNameEditing && userData.username">{{ userData.username }}</p>
                                <p v-if="!userData.username && !isUserNameEditing">N/A</p>
                                <input v-if="isUserNameEditing" v-model="userData.username" type="text" autofocus>
                                <button v-if="!isUserNameEditing" @click="handleUserNameEdit" class="button" data-type="tertiary">Edit</button>
                                <button v-if="isUserNameEditing" @click="handleEditSave" class="button" data-type="tertiary">Save</button>
                            </div>
                        </div>
                        <div class="group">
                            <div class="label">Email</div>
                            <div class="flex justify-between items-center gap-space-xs">
                                <p v-if="!isEmailEditing">{{ userData.email }}</p>
                                <input v-if="isEmailEditing" v-model="userData.email" type="text">
                                <button v-if="!isEmailEditing" @click="handleEmailEdit" class="button" data-type="tertiary">Edit</button>
                                <button v-if="isEmailEditing" @click="handleEditSave" class="button" data-type="tertiary">Save</button>
                            </div>
                        </div>
                        <div class="group">
                            <div class="label">Phone Number</div>
                            <div class="flex justify-between items-center gap-space-xs">
                                <p v-if="userData.phone && !isPhoneEditing">{{ userData.phone }}</p>
                                <p v-if="!userData.phone && !isPhoneEditing">N/A</p>
                                <input v-if="isPhoneEditing" v-model="userData.phone" type="text">
                                <button v-if="!isPhoneEditing" @click="handlePhoneEdit" class="button" data-type="tertiary">Edit</button>
                                <button v-if="isPhoneEditing" @click="handleEditSave" class="button" data-type="tertiary">Save</button>
                            </div>
                        </div>
                    </div>
                    <div class="about | group">
                        <div class="flex justify-between items-center gap-space-xs">
                            <div class="label">About</div>
                            <button v-if="!isAboutEditing" @click="handleAboutEdit" class="button" data-type="tertiary">Edit</button>
                            <button v-if="isAboutEditing" @click="handleEditSave" class="button" data-type="tertiary">Save</button>
                        </div>
                        <div v-if="userData.about && !isAboutEditing" class="about-text">{{ userData.about }}</div>
                        <div v-if="!userData.about && !isAboutEditing" class="about-text">N/A</div>
                        <textarea v-if="isAboutEditing" v-model="userData.about" name="about" id="about" cols="" rows=""></textarea>
                    </div>
                </div>
            </div>

            <!-- If Editing -->
            <!-- <div v-if="isEditing" class="cards">
                <div class="card-1">
                    <div class="flex justify-between items-center gap-space-xs">
                        <div class="img"><img src="" alt=""></div>
                        <button class="button cursor-pointer" data-type="tertiary">Upload Photo</button>
                    </div>
                    <div>
                        <div class="group">
                            <label for="name">Your Name</label>
                            <div class="flex justify-between items-center gap-space-xs">
                                <input name="name" id="name" type="text">
                                <button class="button" data-type="tertiary">Edit</button>
                            </div>
                        </div>
                        <div class="group">
                            <label for="email">Email</label>
                            <div class="flex justify-between items-center gap-space-xs">
                                <input name="email" id="email" type="text">
                                <button class="button" data-type="tertiary">Edit</button>
                            </div>
                        </div>
                        <div class="group">
                            <label for="phone">Phone Number</label>
                            <div class="flex justify-between items-center gap-space-xs">
                                <input name="phone" id="phone" type="text">
                                <button class="button" data-type="tertiary">Edit</button>
                            </div>
                        </div>
                    </div>
                    <div class="group">
                        <div class="flex justify-between items-center gap-space-xs">
                            <label for="about">About</label>
                            <button class="button" data-type="tertiary">Edit</button>
                        </div>
                        <textarea class="about-text" name="about" id="about" cols="" rows=""></textarea>
                    </div>
                </div>
            </div> -->
        </section>
    </main>
</template>

<script setup lang="ts">
import { ref, type Ref, reactive } from 'vue';
import type { UserData } from '@/interfacesTypes/user';
import { storeToRefs } from 'pinia';
import { useAuthStore } from '@/stores/AuthStore';

const authStore = useAuthStore();
const { userData } = storeToRefs(authStore);

const isUserNameEditing: Ref<boolean> = ref(false);
const isEmailEditing: Ref<boolean> = ref(false);
const isPhoneEditing: Ref<boolean> = ref(false);
const isAboutEditing: Ref<boolean> = ref(false);

const userInfo: Ref<UserData> = ref({
    profilePicture: userData.value.profilePicture,
    username: userData.value.username,
    email: userData.value.email,
    phone: userData.value.phone,
    about: userData.value.about,
})

const handleUserNameEdit = () => {
    isUserNameEditing.value = true;
}

const handleEmailEdit = () => {
    isEmailEditing.value = true;
}

const handlePhoneEdit = () => {
    isPhoneEditing.value = true;
}

const handleAboutEdit = () => {
    isAboutEditing.value = true;
}

const handleEditSave = () => {
    isUserNameEditing.value = false;
    isEmailEditing.value = false;
    isPhoneEditing.value = false;
    isAboutEditing.value = false;

    authStore.updateUserData(userData.value);
    // console.log(userData.value);
}
</script>

<style lang="scss" scoped>
.profile-container {
    padding-block: 6rem;

    .hero {
        padding: .5rem;
        width: 100%;
        height: 10rem;
        background-color: var(--clr-primary-500);
        border-radius: 0.25rem;
    }

    .cards {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-block-start: -5rem;

        button {
            font-size: var(--fs-300);
            font-weight: var(--fw-regular);
        }

        .card-1 {
            display: grid;
            gap: 1rem;
            padding: 1rem;
            width: max(400px, 30%);
            background-color: var(--clr-neutral-100);
            border-radius: 0.25rem;
            box-shadow: 0px 4px 6px 0px var(--clr-neutral-200);

            .img {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 100px;
                background-color: var(--clr-neutral-200);
                aspect-ratio: 1;
                border-radius: 50%;
            }

            > div + div {
                padding: .5rem;
                border: 1px solid var(--clr-neutral-300);
                border-radius: .25rem;
                box-shadow: 0px 2px 4px 0px var(--clr-neutral-200);
            }

            .group {
                display: grid;
                gap: .3rem;

                label, .label {
                    font-size: var(--fs-300);
                    font-weight: var(--fw-semibold);
                }

                &.about .label {
                    font-size: var(--fs-400);
                    color: var(--clr-neutral-600);
                }

                p {
                    font-size: var(--fs-300);
                    font-weight: var(--fw-semibold);
                    color: var(--clr-neutral-600);
                }

                .about-text {
                    width: 100%;
                    font-size: var(--fs-300);
                }
            }
        }
    }
}


</style>