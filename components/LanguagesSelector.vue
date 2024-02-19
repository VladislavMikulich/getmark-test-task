<template>
  <select v-model="selectedLang" @change="updateLanguage">
    <option v-for="(lang, index) in availableLanguages" :key="index">
      {{ lang }}
    </option>
  </select>
</template>

<script setup>
import { AVAILABLE_LANGUAGES as availableLanguages } from "../constants"

const language = useCookie("language")

const selectedLang = ref("")

selectedLang.value = language.value

const updateLanguage = () => {
  console.log(language.value, selectedLang.value)
  language.value = selectedLang.value
  location.reload()
}
</script>

<style scoped>
select {
  cursor: pointer;
}
</style>
