<template>
  <header>
    <h1>{{ title }}</h1>
  </header>
</template>

<script>
export default {
  name: "Header",
  props: {
    title: {
      type: String,
      default: "Title",
    },
  },
};
</script>

<style scoped>
header {
  background-color: var(--lightest-navy);
  box-shadow: var(--dark-navy) 0px 25px 20px -20px;
}
h1 {
  text-align: center;
  padding: 2rem;
}
</style>