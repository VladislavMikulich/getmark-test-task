<template>
  <header>
    <h1 class="header-title">My amazing website</h1>
    <div>
      <button>Section 1</button>
      <button>Section 2</button>
      <Avatar />
    </div>
  </header>
  <main>
    {{ user }}
    <slot />
  </main>
</template>

<script setup></script>

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
h1.header-title {
  margin: 0;
  font-weight: 500;
}
button {
  cursor: pointer;
  padding: 5px 20px;
  font-size: 15px;
  max-height: 32px;
}
</style>
