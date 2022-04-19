<template>
  <div class="backdrop" @click.self="closeModal">
    <div class="modal-content">
      <div class="modal-header">
        <div class="modal-title">{{ modalTitle }}</div>
        <div type="button" @click="closeModal" class="close-modal">
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
export default {
  name: "AddModal",
  props: {
    state: {
      type: Object,
      required: true,
    },
    modalTitle: {
      type: String,
      default: "Modal title",
    },
  },
  setup(props) {
    function closeModal() {
      props.state.modalEnabled = false;
      console.log(props.state.modalEnabled);
    }
    return {
      closeModal,
    };
  },
};
</script>

<style scoped>
.backdrop {
  position: absolute;
  inset: 0;
  height: 100vh;
  background-color: var(--green-tint);
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