<template>
    <header class="primary__header | content-grid">
        <div class="breakout | flex items-center gap-space-s justify-between">
            <Logo />
            <nav class="primary__nav | flex gap-space-xs">
                <ul role="list" class="nav__list | flex items-center gap-space-xs">
                    <li class="list__icon">
                        <FontAwesomeIcon class="bell" :icon="faBell" />
                    </li>
                    <li class="profile__icon"></li>
                </ul>
                <ul role="list" class="nav__action | flex items-center gap-space-xs">
                    <li>
                        <button class="button" data-type="primary">Sign Up</button>
                    </li>
                    <li>
                        <button class="button" data-type="secondary">Login</button>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<script setup lang="ts">
 import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
 import { faBell } from '@fortawesome/free-regular-svg-icons';

 import Logo from './Logo.vue';
</script>

<style lang="scss" scoped>

.primary__header {
    position: relative;
    z-index: 99;
    padding: 0.75rem 0;
    box-shadow: 0px 6px 12px 0px hsla(230, 7%, 78%, 0.3);
}

.nav__list {
    .list__icon {
        font-size: 2rem;
        color: var(--clr-primary-700);
    }

    .profile__icon {
        width: 3rem;
        aspect-ratio: 1;
        border: 2px solid var(--clr-primary-700);
        border-radius: 50%;
    }
}

</style>