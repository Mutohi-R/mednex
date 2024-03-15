<template>
  <main class="landing-page">
    <section class="hero | content-grid | bg-clr-secondary-100">
      <div class="even-columns">
        <div style="--_flow-space: 1.5em" class="flow">
          <h1 class="h1 ff-accent fw-bold text-clr-primary-800 text-balance">Your Personalized Path To Better Health Starts Here</h1>
          <p>
            Mednex helps you find the perfect hospital for your needs. Search
            and compare top-rated facilities, read patient reviews, and schedule
            appointments - all in one place. Don't wait, get the care you
            deserve, conveniently located near you.
          </p>
          <button class="button" data-type="primary">Search Hospitals Now</button>
        </div>
        <div></div>
      </div>
    </section>

    <section style="--_flow-space: 1.5em" class="features | content-grid flow">
        <h2 class="h2 ff-accent fw-semibold text-clr-primary-800 text-center text-balance">Features and Functionalities</h2>
        <div class="card-container | grid gap-space-s">
            <div class="even-columns | gap-space-s">
                <div class="card">
                    <div class="flex items-center gap-space-xs">
                        <h3 class="fs-600 fw-semibold text-clr-primary-00 text-balance">Hospital Search</h3>
                        <FontAwesomeIcon class="icon" :icon="faSearch" />
                    </div>
                    <p>Effortlessly search for top-rated hospitals in your area. Mednex allows you to search by location or browse a comprehensive list.</p>
                </div>
                <div class="card">
                    <div class="flex items-center gap-space-xs">
                        <h3 class="fs-600 fw-semibold text-clr-primary-00 text-balance">Export Hospitals</h3>
                        <FontAwesomeIcon class="icon" :icon="faFile" />
                    </div>
                    <p>Export your hospital search results as a CSV file for easy saving and sharing with others.</p>
                </div>
                <div class="card">
                    <div class="flex items-center gap-space-xs">
                        <h3 class="fs-600 fw-semibold text-clr-primary-00 text-balance">Hospitals Share</h3>
                        <FontAwesomeIcon class="icon" :icon="faLink" />
                    </div>
                    <p>Quickly share your hospital shortlist with friends and family via email or a sharable link.</p>
                </div>
            </div>
            <div class="even-columns  | gap-space-s">
                <div class="card">
                    <div class="flex items-center gap-space-xs">
                        <h3 class="fs-600 fw-semibold text-clr-primary-00 text-balance">User Authentication</h3>
                        <FontAwesomeIcon class="icon" :icon="faIdBadge" />
                    </div>
                    <p>Mednex provides a secure platform for authorized admins to manage hospital listings and content.</p>
                </div>
                <div class="card">
                    <div class="flex items-center gap-space-xs">
                        <h3 class="fs-600 fw-semibold text-clr-primary-00 text-balance">Markdown Support</h3>
                        <FontAwesomeIcon class="icon" :icon="faBrush" />
                    </div>
                    <p>Admins can create and format rich content using Markdown, making it simple to add images, links, and styling.</p>
                </div>
            </div>
        </div>
    </section>

    <section class="newsletter | content-grid | bg-clr-secondary-100">
        <div class="even-columns">
            <div class="grid gap-3">
                <h2 class="fs-600 ff-accent fw-semibold text-clr-primary-800 text-balance">Stay Informed: Subscribe to Healthcare News</h2>
                <p>Sign up for our newsletter and receive valuable updates on new hospitals added to Mednex, insights on healthcare trends, and tips for finding the right provider.</p>
                <ul role="list" class="grid gap-2 fs-300">
                    <li class="flex items-center gap-space-2xs">
                        <FontAwesomeIcon class="icon" :icon="faCircle"/>
                        <p>Updates on new hospitals added to the platform.</p>
                    </li>
                    <li class="flex items-center gap-space-2xs">
                        <FontAwesomeIcon class="icon" :icon="faCircle"/>
                        <p>Insights and trends in the healthcare industry</p>
                    </li>
                    <li class="flex items-center gap-space-2xs">
                        <FontAwesomeIcon class="icon" :icon="faCircle"/>
                        <p>Tips and resources for finding the right healthcare provider.</p>
                    </li>
                </ul>
            </div>
            <div>
                <form class="grid gap-4">
                    <div class="form-group | grid gap-2">
                        <label class="fs-300 text-clr-accent-600" for="email">Email <span class="text-clr-accent-500">*</span></label>
                        <input type="email" name="email" id="email" placeholder="Enter your email">
                    </div>
                    <button>Get Updates</button>
                </form>
            </div>
        </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faSearch, faLink, faBrush, faCircle } from '@fortawesome/free-solid-svg-icons';
import { faFile, faIdBadge } from '@fortawesome/free-regular-svg-icons';
</script>

<style lang="scss" scoped>
.landing-page {

    .hero {
        padding-block: 9.45rem 5rem;

        h1 {
            line-height: 1.4;
        }
    }

    .features {
        padding-block: 3rem;

        .card-container {

            .card {
                display: grid;
                gap: .5rem;
                padding: 1rem;
                background: var(--clr-secondary-100);
                border-radius: 0.5rem;
                box-shadow: 0px 6px 12px 0px hsla(230, 7%, 78%, 0.3);

                h3 {
                    color: var(--clr-accent-600);
                }

                .icon {
                    color: var(--clr-accent-600);
                }

                &:hover {
                    cursor: default;
                    scale: 1.02;
                    box-shadow: 0px 6px 12px 0px hsla(230, 7%, 78%, 0.5);
                    transition: all 0.3s ease;
                }

            }
        }
    }

    .newsletter {
        padding-block: 3rem;

        >div {
            column-gap: var(--space-3xl);
            row-gap: var(--space-xl);
        }

        h2 {
            line-height: 1.3;
        }

        .icon {
            font-size: .5rem;
            color: var(--clr-accent-600);
        }

        form {

            input {
                padding: .5rem;
                border-radius: 0.5rem;
                background: var(--clr-neutral-100);
                box-shadow: 0px 6px 12px 0px hsla(230, 7%, 78%, 0.3);
            }

            button {
                padding: .5rem;
                background: var(--clr-accent-100);
                font-weight: var(--fw-semibold);
                color: var(--clr-neutral-100);
                border-radius: .5rem;

                &:hover {
                    background: color-mix(in lab, var(--clr-accent-100) 70%, var(--clr-accent-500) 30%);
                }
            }
        }
    }
}
</style>
