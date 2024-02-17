<template>
  <div class="sections-wrapper">
    <Topic
      v-for="(section, index) in sections"
      :key="index"
      :title="section.title"
      :content="section.content"
    />
  </div>
</template>

<script setup>
const { translation } = useTranslation()

const sections = reactive([...translation("sections")])
</script>

<style scoped>
.sections-wrapper {
  display: flex;
  flex-direction: column;
  gap: 50px;
}
</style>
