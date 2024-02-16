<template>
  <header>
    <h1 class="header-title">My amazing website</h1>
    <div>
      <a v-for="link in linksData" :key="link.id" :href="`#${link.id}`">
        {{ link.title }}
      </a>
    </div>
  </header>
  <main>
    <slot />
  </main>
</template>

<script setup>
import { SECTIONS_DATA as sectionsData } from "../constants"

const linksData = sectionsData.map((section) => ({
  id: section.id,
  title: section.title,
}))
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
header div a:first-child {
  margin-right: 15px;
}
h1.header-title {
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
