<template>
  <header>
    <h1 data-translation-path="headerTitle">
      {{ headerTitle }}
    </h1>
    <div>
      <a v-for="link in linksData" :key="link.id" :href="`#${link.id}`">
        {{ link.title }}
      </a>
      <Avatar />
      <LanguagesSelector v-if="isDisplaySelector" />
    </div>
  </header>
  <main>
    <slot />
  </main>
</template>

<script setup>
const { translation } = useTranslation()

const headerTitle = ref("")
const linksData = ref([])
const isDisplaySelector = ref(false)

onMounted(() => {
  linksData.value.push(
    ...translation("sections").map((section) => ({
      id: section.id,
      title: section.title,
    }))
  )

  headerTitle.value = translation("headerTitle")

  isDisplaySelector.value = true
})
</script>

<style scoped>
header {
  padding: 20px 15px;
  background-color: bisque;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid black;
}
main {
  padding: 20px 40px;
}
header div {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
}
h1 {
  margin: 0;
  font-weight: 500;
}
a {
  text-decoration: none;
  cursor: pointer;
  padding: 5px 20px;
  font-size: 15px;
  background-color: white;
  border: 1px solid black;
  color: black;
}

a:hover {
  background-color: rgb(233, 233, 233);
}
</style>
