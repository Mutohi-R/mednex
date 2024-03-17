<template>
    <div>

    </div>
</template>

<script>
import { ref } from 'vue'
const loadUserData = async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                name: 'Matthew',
                bio: 'I run this show'
            })
        }, 2000);
    })
}
export default {
    async setup () {
        const userData = ref(await loadUserData());

        return {
            userData
        }
    }
}
</script>

<style lang="scss" scoped>

</style>