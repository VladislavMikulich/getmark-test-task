<template>
  <div @click="isShowAvatarImageStatusHandler">
    <img v-if="isShowAvatarImageStatus" :src="user.avatar" alt="avatar" />
    <p v-else>{{ initials }}</p>
  </div>
</template>

<script setup>
import { fetchUserById } from "../services/user"

const { data: user, error } = await useAsyncData("user", () => fetchUserById())

const isShowAvatarImageStatus = ref(false)

const initials = `${user.value.first_name[0]}${user.value.last_name[0]}`

const isShowAvatarImageStatusHandler = () => {
  isShowAvatarImageStatus.value = !isShowAvatarImageStatus.value
}
</script>

<style scoped>
div {
  cursor: pointer;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid black;
  background-color: whitesmoke;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
img {
  width: 70px;
  height: 70px;
}
</style>
