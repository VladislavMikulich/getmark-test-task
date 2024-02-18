<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
const { loadTranslations } = useTranslation()
loadTranslations()

useInLineTextEditor()
</script>

<style>
* {
  box-sizing: border-box;
}
body {
  margin: 0;
}
html {
  scroll-behavior: smooth;
}
</style>
