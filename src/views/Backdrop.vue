<template>
  <div class="backdrop" @click.self="onClose">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style>
.backdrop {
  position: absolute;
  inset: 0;
  height: 100vh;
  background-color: var(--navy-shadow);
  display: flex;
  align-items: flex-end;
}
</style>