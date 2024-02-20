<template>
  <div>
    <p class="statusCode">{{ error.statusCode }}</p>
    <p class="message">Oops... {{ statusMessage }}</p>
    <NuxtLink to="/">Go back home</NuxtLink>
  </div>
</template>

<script setup>
const props = defineProps({
  error: Object,
})

const statusMessage = computed(() => {
  return props.error.statusMessage || "Something went wrong"
})
</script>

<style scoped>
div {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
p.message {
  font-size: 20px;
}
p.statusCode {
  font-size: 70px;
  margin: 0;
}
a {
  text-decoration: none;
  padding: 8px 12px;
  border: 1px solid black;
  color: black;
  font-size: 18px;
  transition: all 0.3s;
}
a:hover {
  background-color: whitesmoke;
}
</style>
