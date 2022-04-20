<template>
  <div class="backdrop" @click.self="onClose">
    <div class="modal-content">
      <div class="modal-header">
        <div class="modal-title">{{ modalTitle }}</div>
        <div type="button" @click="onClose" class="close-modal">
          <i class="fa-solid fa-rectangle-xmark fa-lg"></i>
        </div>
      </div>
      <div class="modal-body">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import state from "@/state";
export default {
  name: "AddModal",
  setup() {
    const modalTitle = state.modalInfo.currentTodo ? "Edit Todo" : "Add Todo";

    function onClose() {
      state.closeModal();
    }
    return {
      modalTitle,
      onClose,
    };
  },
};
</script>

<style scoped>
.backdrop {
  position: absolute;
  inset: 0;
  height: 100vh;
  background-color: var(--navy-shadow);
  display: flex;
  align-items: flex-end;
}
.modal-content {
  background-color: var(--white);
  width: 100%;
}
.modal-header {
  padding: 0.6rem;
  background-color: var(--navy);
  color: var(--blue);
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.modal-title {
  font-weight: 300;
  font-size: 1.2rem;
}
.close-modal {
  cursor: pointer;
}
.modal-body {
  color: var(--dark-navy);
  padding: 2rem;
}
</style>