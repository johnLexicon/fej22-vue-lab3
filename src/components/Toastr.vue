<template>
  <div class="card">
    <div class="card-title">{{ $props.title }}</div>
    <div class="card-body">{{ $props.message }}</div>
  </div>
</template>

<script>
export default {
  name: "Toastr",
  props: {
    title: {
      type: String,
      default: "The title",
    },
    message: {
      type: String,
      default: "The message",
    },
  },
};
</script>

<style scoped>
.card {
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translateX(-50%);
  width: 350px;
  height: 75px;
  background-color: rgb(96, 0, 0);
  color: var(--white);
  border-radius: 5px;
  box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
}
.card-title {
  font-size: 1.3rem;
  font-weight: 300;
  border-bottom: 1px dashed var(--white);
  padding: 0.3rem;
}
.card-body {
  padding: 0.3rem;
  font-weight: 200;
}
</style>