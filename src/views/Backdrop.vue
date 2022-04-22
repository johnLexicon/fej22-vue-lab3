<template>
  <div class="backdrop" @click.self="onClose">
    <slot></slot>
  </div>
</template>

<script>
import state from "@/state";
export default {
  name: "Backdrop",
  setup() {
    function onClose() {
      state.closeModal();
    }
    return {
      onClose,
    };
  },
};
</script>

<style>
.backdrop {
  position: absolute;
  inset: 0;
  height: 100vh;
  background-color: var(--navy-shadow);
  display: flex;
  align-items: flex-end;
  z-index: 2;
}
</style>