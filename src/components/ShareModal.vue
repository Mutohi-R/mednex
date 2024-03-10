<template>
  <div class="share__modal | grid gap-3">
    <div>
      <p v-if="timeLeft > 0" class="fs-300 fw-semibold">
        This link is only valid for {{ formatTime(hours) }}:{{
          formatTime(minutes)
        }}:{{ formatTime(seconds) }}
      </p>
      <p v-else class="fs-300 fw-semibold">This link has expired</p>
    </div>
    <div
      ref="downloadLink"
      @click="downloadHospitalsCSV"
      class="link-group download | flex items-center gap-space-2xs"
    >
      <FontAwesomeIcon
        class="icon"
        :icon="faDownload"
        style="font-size: 1.3rem"
      />
      <p class="fw-semibold">Download hospitals as CSV</p>
    </div>
    <!-- <a @click="downloadHospitalsCSV($event)" :href="downloadURL" class="link-group download | flex items-center gap-space-2xs">
      <FontAwesomeIcon
        class="icon"
        :icon="faDownload"
        style="font-size: 1.3rem"
      />
      <p class="fw-semibold">Download hospitals as CSV</p>
    </a> -->
    <div
      @click="copyLinkToClipboard"
      class="link-group copy | flex items-center gap-space-2xs"
    >
      <FontAwesomeIcon class="icon" :icon="faLink" style="font-size: 1.3rem" />
      <p class="fw-semibold">Copy download link</p>
    </div>
    <button @click="$emit('close')" class="close">
      <FontAwesomeIcon class="icon" :icon="faClose" style="font-size: 1.5rem" />
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, type Ref, onMounted, computed, defineEmits } from "vue";
import { storeToRefs } from "pinia";
import useHospitalStore from "@/stores/HospitalStore";
import { useToast } from "vue-toastification";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faClose, faDownload, faLink } from "@fortawesome/free-solid-svg-icons";

const emit = defineEmits(["close"]);
const toast = useToast();

const hospitalStore = useHospitalStore();
const { downloadURL } = storeToRefs(hospitalStore);
const timeLeft: Ref<number> = ref(10);
const downloadLink = ref<HTMLDivElement | null>(null);

const downloadHospitalsCSV = async () => {

  if (downloadURL.value) {
    const link: HTMLAnchorElement = document.createElement("a");
    link.href = downloadURL.value;
    link.click();
  } else {
    toast.error("Download failed. Please try again.", {
      timeout: 2000,
    });
  }

};

const copyLinkToClipboard = async () => {

  if (downloadURL.value) {
    try {
      await navigator.clipboard.writeText(downloadURL.value);
      toast.success("Link copied to clipboard");
    } catch (err) {
      console.error("Error copying to clipboard: ", err);
    }  
  } else {
    toast.error("Error copying link. Please try again.");
  }

};

const hours = computed(() => {
  return Math.floor(timeLeft.value / 3600);
});

const minutes = computed(() => {
  return Math.floor((timeLeft.value % 3600) / 60);
});

const seconds = computed(() => {
  return Math.floor(timeLeft.value % 60);
});

onMounted(() => {
  setInterval(() => {
    if (timeLeft.value > 0) {
      timeLeft.value--;
    }
  }, 1000);
});

const formatTime = (time: number) => {
  return time < 10 ? `0${time}` : time;
};
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
    /* background-color: var(--clr-neutral-200); */
    border-radius: 0.5rem;
    color: var(--clr-neutral-600);

    &:hover {
      /* background-color: var(--clr-neutral-600); */
      color: var(--clr-neutral-100);
    }
  }

  .download {
    background-color: color-mix(
      in lab,
      var(--clr-accent-400) 30%,
      var(--clr-neutral-100) 70%
    );
    font-size: var(--fs-300);

    &:hover {
      background-color: color-mix(
        in lab,
        var(--clr-accent-400) 70%,
        var(--clr-neutral-100) 30%
      );
      cursor: pointer;
    }
  }

  .copy {
    background-color: color-mix(
      in lab,
      var(--clr-accent-200) 30%,
      var(--clr-neutral-100) 70%
    );
    font-size: var(--fs-300);

    &:hover {
      background-color: color-mix(
        in lab,
        var(--clr-accent-200) 80%,
        var(--clr-accent-400) 20%
        /* var(--clr-neutral-100) 10% */
      );
      cursor: pointer;
    }
  }

  .close {
    /* position: absolute; */
  }
}
</style>
