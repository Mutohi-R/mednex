<template>
  <footer class="footer | text-clr-neutral-100 fs-300">
    <div class="content-grid | bg-clr-primary-900">
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
              <button>Subscribe</button>
            </form>
          </div>
        </div>
      </section>

      <section class="secondary-footer | full-width | bg-clr-secondary-400 ">
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
        background: color-mix(in lab, var(--clr-accent-300) 60%, var(--clr-accent-200) 40%);
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
