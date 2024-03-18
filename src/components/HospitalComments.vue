<template>
    <input class="input" v-model="commentText" type="text">
    <div>
        <button class="button" data-type="primary" @click="addNewComment">add comment</button>
    </div>
    <div v-for="(comment, index) in comments" :key="index">{{ comment.comment }}</div>
</template>

<script setup lang="ts">
import { ref, type Ref } from 'vue';
import useHospitalStore from '@/stores/HospitalStore';
import type { UserData } from '@/interfacesTypes/user';
import { storeToRefs } from 'pinia';
import { useAuthStore } from '@/stores/AuthStore';

const authStore = useAuthStore();
const { userData } = storeToRefs(authStore);

const hospitalStore = useHospitalStore();
const props = defineProps(['comments', 'id'])
const commentText: Ref<string> = ref('')

const addNewComment = (): void => {
    hospitalStore.addCommentToHospital(props.id, userData.value.id, userData.value.username, userData.value.profilePicture, commentText.value)
    // console.log(props.id, userData.value.id, userData.value.username, userData.value.profilePicture, commentText.value)
}
</script>

<style lang="scss" scoped>

</style>