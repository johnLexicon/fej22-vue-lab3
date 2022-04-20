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
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}
h1 {
  text-align: center;
  padding: 2rem;
}
</style>