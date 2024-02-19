<template>
  <section :id="sectionId">
    <h2 :data-translation-path="`sections.${index}.title`">
      {{ props.title }}
    </h2>
    <p :data-translation-path="`sections.${index}.content`">
      {{ props.content }}
    </p>
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
  index: {
    type: Number,
    required: true,
  },
})
</script>

<style scoped>
section p {
  font-size: 20px;
}
</style>
