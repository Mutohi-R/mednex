<template>
  <footer class="footer | text-clr-neutral-100 fs-300">
    <div class="content-grid | bg-clr-primary-900">
      <!-- <section
        class="primary-footer | breakout | grid mx-auto justify-between gap-16 items-center"
      >
        <div class="logo">
          <LogoWhite />
        </div>
        <div class="extra | fle gap-14">
          <div class="product | flow">
            <h2 class="ff-accent fw-bold fs-500">Product</h2>
            <p class="fs-300">Willi for Apps</p>
            <p class="fs-300">Willi for Email</p>
            <p class="fs-300">Insights & Actions</p>
            <p class="fs-300">Conversational Feedback</p>
            <p class="fs-300">Integrations</p>
            <p class="fs-300">Pricing</p>
          </div>
          <div class="company | flow">
            <h2 class="ff-accent fw-bold fs-500">Company</h2>
            <p class="fs-300">About Us</p>
            <p class="fs-300">Contact Us</p>
            <p class="fs-300">Leadership</p>
            <p class="fs-300">Become a Partner</p>
            <p class="fs-300">Careers</p>
            <p class="fs-300">Customers</p>
            <p class="fs-300">Try for Free</p>
            <p class="fs-300">Explore Demo</p>
          </div>
          <div class="resources | flow">
            <h2 class="ff-accent fw-bold fs-500">Resources</h2>
            <p class="fs-300">Blog</p>
            <p class="fs-300">Testimonials</p>
            <p class="fs-300">Whitepapers</p>
            <p class="fs-300">Webinars & Events</p>
            <p class="fs-300">Podcast</p>
            <p class="fs-300">Knowledge Base</p>
            <p class="fs-300">Developer API</p>
            <p class="fs-300">Survey Templates</p>
            <p class="fs-300">Status</p>
          </div>
          <div class="support | flow">
            <h2 class="ff-accent fw-bold fs-500">Support</h2>
            <p class="fs-300">Help Center</p>
            <p class="fs-300">Terms of Use</p>
            <p class="fs-300">Privacy Policy</p>
            <p class="fs-300">Security</p>
            <p class="fs-300">Recruitment Privacy Notice</p>
            <p class="fs-300">Support Level Policy</p>
            <p class="fs-300">Service Level Policy</p>
          </div>
        </div>
      </section>
    </div>

    <div class="content-grid | bg-clr-secondary-400">
      <section
        class="secondary-footer | breakout | flex justify-between flex-wrap gap-4"
      >
        <div class="flex flex-wrap justify-center mx-auto gap-6">
          <p class="fs-300 text-clr-primary-600 cursor-pointer">
            Terms & Conditions
          </p>
          <p class="fs-300 text-clr-primary-600 cursor-pointer">Policies</p>
          <p class="fs-300 text-clr-primary-600 cursor-pointer">Security</p>
        </div>
        <div class="flex items-center mx-auto gap-2 cursor-pointer">
          <Web />
          <p class="fs-300 text-clr-primary-600">Language</p>
        </div>
        <div class="footer__icons | flex items-center mx-auto gap-6">
          <Twitter class="cursor-pointer" />
          <Facebook class="cursor-pointer" />
          <LinkedIn class="cursor-pointer" />
          <Youtube class="cursor-pointer" />
          <Instagram class="cursor-pointer" />
        </div>
      </section> -->
      <section class="primary-footer | breakout">
        <LogoWhite />
        <div class="content">
          <div class="solutions ~ flow">
            <h3>Solutions</h3>
            <p>Hospital Search</p>
            <p>Healthcare</p>
            <p>Hospital Share</p>
          </div>
          <div class="use-cases | flow">
            <h3>Use Cases</h3>
            <p>Mednex for Hospitals</p>
            <p>Mednex for Clinics</p>
            <p>MedNex for Providers</p>
            <p>MedNex for Patients</p>
          </div>
          <div class="resources | flow">
            <h3>Resources</h3>
            <p>Blog</p>
            <p>Knowledge Base</p>
            <p>Developers API</p>
          </div>
          <div class="company | flow ">
            <h3>Company</h3>
            <p>About Us</p>
            <p>Help Center</p>
            <p>Security</p>
            <p>Events</p>
            <p>Hospitals</p>
            <p>Contact Us</p>
            <p>Privacy Policy</p>
          </div>
          <div class="subscribe | flow">
            <h3>Subscribe</h3>
            <form>
              <input class="" type="email" placeholder="Email Address" />
              <button class="" data-type="">Subscribe</button>
            </form>
          </div>
        </div>
      </section>

      <section class="secondary-footer | full-width | bg-clr-secondary-500 ">
        <div>
          <p class="text-clr-primary-600">&copy; 2024 MedNex. All rights reserved</p>
          <div class="social-icons">
            <FontAwesomeIcon class="icon" :icon="faTwitter" />
            <FontAwesomeIcon class="icon" :icon="faInstagram" />
            <FontAwesomeIcon class="icon" :icon="faLinkedinIn" />
          </div>
        </div>
      </section>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faTwitter, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import LogoWhite from "@/components/LogoWhite.vue";
</script>

<style scoped>
.primary-footer {
  display: grid;
  gap: 1rem;
  padding-block: 3.375rem;
  flex-direction: column;

  .content {
    display: grid;
    grid-template-areas:
      "solutions use-cases resources company subscribe";
    gap: 1.5rem;

    @media screen and (max-width: 520px) {
      grid-template-areas: 
      "solutions use-cases" 
      "resources company" 
      "subscribe subscribe";
    }

    h3 {
      color: var(--clr-neutral-100);
      text-transform: uppercase;
      opacity: .6;
    }
  }

  .solutions {
    grid-area: solutions;
  }

  .use-cases {
    grid-area: use-cases;
  }

  .resources {
    grid-area: resources;
  }

  .company {
    grid-area: company;
  }

  .subscribe {
    grid-area: subscribe;

    form {
      display: grid;
      gap: 0.75rem;

      input {
        padding: 0.5rem;
        background: var(--clr-neutral-100);
        border-radius: 0.25rem;
      }
      
      button {
        padding: 0.5rem;
        background: var(--clr-accent-300);
        border-radius: 0.25rem;
      }
    }
  }
}

.secondary-footer {
  padding-block: 0.875rem;

  > div {
    display: flex;
    justify-content: space-between;

    .social-icons {
      display: flex;
      gap: var(--space-2xs);

      .icon {
        color: var(--clr-primary-600);
        font-size: 1.3rem;

        &:hover {
          color: var(--clr-accent-300);
          cursor: pointer;
        }
      }
    }
  }
}

/* @media screen and (max-width:520px) {
  .primary-footer {
    grid-auto-flow: column;
    margin: 0;
  }
  .extra {
    grid-template-areas: "product support company resources";
  }
} */

</style>
