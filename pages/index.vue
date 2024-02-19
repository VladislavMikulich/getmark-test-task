<template>
  <div class="sections-wrapper">
    <Topic
      v-for="(section, index) in sections"
      :key="section.id"
      :title="section.title"
      :content="section.content"
      :sectionId="section.id"
      :index="index"
    />
  </div>
</template>

<script setup>
const { translation } = useTranslation()

const sections = ref([])

onMounted(() => {
  sections.value.push(...translation("sections"))
})
</script>

<style scoped>
.sections-wrapper {
  display: flex;
  flex-direction: column;
  gap: 50px;
}
</style>
