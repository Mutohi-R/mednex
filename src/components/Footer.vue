<template>
  <footer class="footer | text-clr-neutral-100">
    <div class="content-grid | bg-clr-primary-600">
      <section
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
          <!-- twitter -->
          <Twitter class="cursor-pointer" />
          <!-- facebook -->
          <Facebook class="cursor-pointer" />
          <!-- linkedIn -->
          <LinkedIn class="cursor-pointer" />
          <!-- youtube -->
          <Youtube class="cursor-pointer" />
          <!-- instagram -->
          <Instagram class="cursor-pointer" />
        </div>
      </section>
    </div>
  </footer>
</template>

<script setup lang="ts">
import LogoWhite from "@/components/LogoWhite.vue";
</script>

<style scoped>
.primary-footer {
  padding-block: 3.375rem;
  flex-direction: column;
}

.secondary-footer {
  padding-block: 0.875rem;
  /* grid-auto-flow: column; */
  /* place-items: center; */
}

.extra {
  display: grid;
  grid-template-areas:
    "product support"
    "company resources";
}

@media screen and (min-width: 980px) {
  .primary-footer {
    grid-auto-flow: column;
    margin: 0;
  }
  .extra {
    grid-template-areas: "product support company resources";
  }
}

.product {
  grid-area: product;
}

.support {
  grid-area: support;
}

.company {
  grid-area: company;
}

.resources {
  grid-area: resources;
}
</style>
