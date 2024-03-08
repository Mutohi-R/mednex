<template>
  <div class="share__modal | grid gap-5">
    <a :href="downloadURL" class="link-group | flex items-center gap-space-2xs">
      <FontAwesomeIcon
        class="icon"
        :icon="faDownload"
        style="font-size: 1.5rem"
      />
      <p class="fw-semibold">Download hospitals as CSV</p>
    </a>
    <div @click="copyLinkToClipboard" class="link-group | flex items-center gap-space-2xs">
        <FontAwesomeIcon class="icon" :icon="faLink" style="font-size: 1.5rem" />
        <p class="fw-semibold">Copy download link</p>
    </div>
    <button @click="$emit('close')" class="close">
      <FontAwesomeIcon class="icon" :icon="faClose" style="font-size: 1.5rem" />
    </button>
  </div>
</template>

<script setup lang="ts">
import { defineEmits } from "vue";
import { storeToRefs } from "pinia";
import useHospitalStore from "@/stores/HospitalStore";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faClose, faDownload, faLink } from "@fortawesome/free-solid-svg-icons";

const emit = defineEmits(["close"]);

const hospitalStore = useHospitalStore();
const { downloadURL } = storeToRefs(hospitalStore);

const copyLinkToClipboard = async () => {
    try {
        await navigator.clipboard.writeText(downloadURL.value);
        alert("Link copied to clipboard");
    } catch (err) {
        console.error("Error copying to clipboard: ", err);
        alert('Failed to copy link to clipboard. Please try again.')
    }
}
</script>

<style scoped>
.share__modal {
  position: relative;
  padding: 1rem;
  background: var(--clr-neutral-100);
  border-radius: 0.5rem;
  box-shadow: 0px 10px 5px 2px hsla(0, 0%, 0%, 0.1);

  .link-group {
    padding: 0.5rem 1rem;
    background-color: var(--clr-neutral-200);
    border-radius: 0.5rem;
    color: var(--clr-neutral-600);

    &:hover {
      background-color: var(--clr-neutral-600);
      color: var(--clr-neutral-100);
    }
  }
}
</style>
