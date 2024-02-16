<template>
  <div class="sections-wrapper">
    <Topic
      v-for="section in sectionsData"
      :key="section.id"
      :title="section.title"
      :content="section.content"
      :sectionId="section.id"
    />
  </div>
</template>

<script setup>
import { SECTIONS_DATA as sectionsData } from "../constants"
</script>

<style scoped>
.sections-wrapper {
  display: flex;
  flex-direction: column;
  gap: 50px;
}
</style>
