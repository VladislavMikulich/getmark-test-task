<template>
  <section :id="sectionId">
    <h2>{{ props.title }}</h2>
    <p>{{ props.content }}</p>
  </section>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  sectionId: {
    type: Number,
    required: true,
  },
})
</script>

<style scoped>
section {
  scroll-margin-top: 80px;
}
section p {
  font-size: 20px;
}
</style>
