<template>
  <div class="comments-section | grid gap-6">
    <ul v-if="props.comments.length != 0" class="comments">
      <li
        class="flex items-center gap-space-s"
        v-for="(comment, index) in comments"
        :key="index"
      >
        <div class="flex items-center gap-space-2xs">
          <div class="text-end">
            <p class="name | fs-300 fw-semibold text-clr-neutral-700">
              {{ comment.userName }}
            </p>
            <p class="commented-at | fs-200">{{ comment.createdAt }}</p>
          </div>
          <div class="user-details | flex justify-center items-center">
            <img
              v-if="comment.userProfilePicture"
              :src="comment.userProfilePicture"
              alt=""
            />
            <div v-else>
              <p class="fw-semibold fs-500 text-clr-neutral-700">
                {{ comment.userName.charAt(0) }}
              </p>
            </div>
          </div>
        </div>
        <div class="comment-text">
          <p class="fs-300 text-clr-neutral-700">{{ comment.comment }}</p>
        </div>
      </li>
    </ul>
    <div v-else><p class="fs-300">No comments</p></div>
    <form @submit.prevent="addNewComment" class="comment-form | grid gap-4">
      <textarea
        v-model="commentText"
        placeholder="Make a comment"
        name="comment"
        id="comment"
        rows="3"
      ></textarea>
      <div class="flex justify-between">
        <div class="user-details | flex justify-center items-center">
          <img
            v-if="userData.profilePicture"
            :src="userData.profilePicture"
            alt=""
          />
          <div v-else>
            <p v-if="userData.username" class="fw-semibold fs-500 text-clr-neutral-700">
              {{ userData.username.charAt(0) }}
            </p>
          </div>
        </div>
        <button @click="addNewComment" class="button" data-type="tertiary">
          Submit
        </button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref, type Ref } from "vue";
import useHospitalStore from "@/stores/HospitalStore";
import type { UserData } from "@/interfacesTypes/user";
import { storeToRefs } from "pinia";
import { useAuthStore } from "@/stores/AuthStore";
import { useToast } from "vue-toastification";

const authStore = useAuthStore();
const { userData, isAuthenticated } = storeToRefs(authStore);

const hospitalStore = useHospitalStore();
const props = defineProps(["comments", "id"]);
const commentText: Ref<string> = ref("");
const toast = useToast();

const addNewComment = async (): Promise<void> => {
  if (!isAuthenticated.value) {
    toast.info("Log-in to make a comment", {
      timeout: 3000
    })
  } else {
    const comment = commentText.value.trim();
    if (comment.length == 0) {
      return;
    }
    await hospitalStore.addCommentToHospital(
      props.id,
      userData.value.id,
      userData.value.username,
      userData.value.profilePicture,
      comment
    );
    commentText.value = ''
  }
};
</script>

<style lang="scss" scoped>
.comments-section {
  padding: 1rem;

  .comments {
    display: grid;
    gap: 0.5rem;

    .comment-text {
      position: relative;
      background: color-mix(
        in srgb,
        var(--clr-accent-100) 20%,
        var(--clr-neutral-100) 70%
      );
      border-radius: 0.25rem;

      p {
        padding: 1rem;
      }

      &::after {
        content: '';
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: -8px;
        width: 18px;
        aspect-ratio: 1;
        background: var(--clr-accent-300);
        border: 4px solid var(--clr-neutral-100);
        border-radius: 50%;
      }
    }
  }

  .comment-form {
    textarea {
      width: 100%;
      padding: 0.5rem;
      border: 1px solid var(--clr-neutral-300);
      border-radius: 0.25rem;
      box-shadow: 0px 6px 12px 0px hsla(230, 7%, 78%, 0.3);
    }
  }

  .user-details {
    width: 2.5rem;
    aspect-ratio: 1;
    background: var(--clr-neutral-200);
    background: color-mix(
      in srgb,
      var(--clr-primary-200) 30%,
      var(--clr-neutral-100) 70%
    );
    background: var(--clr-primary-200);
    border-radius: 50%;
  }
}
</style>
