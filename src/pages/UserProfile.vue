<template>
    <main class="profile-container">
        <section class="content-grid">
            <div class="hero | breakout">

            </div>
            <div class="cards">
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
            </div>
        </section>
    </main>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useAuthStore } from '@/stores/AuthStore';

const authStore = useAuthStore();
const { userData } = storeToRefs(authStore);
</script>

<style lang="scss" scoped>
.profile-container {
    padding-block: 6rem;

    .hero {
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
            background-color: var(--clr-neutral-100);
            border-radius: 0.25rem;
            box-shadow: 0px 4px 6px 0px var(--clr-neutral-200);

            .img {
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
                gap: .5rem;
                label {
                    font-size: var(--fs-300);
                }

                .about-text {
                    width: 100%;
                }
            }
        }

        .card-2 {

        }
    }
}


</style>