<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
const { loadTranslations } = useTranslation()

loadTranslations()
</script>

<style>
body {
  margin: 0;
}
</style>
