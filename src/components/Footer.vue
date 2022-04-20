<template>
  <footer>
    <div
      id="addBtn"
      type="button"
      @click="showAddModal"
      class="btn btn-primary"
    >
      <i class="fa-solid fa-circle-plus fa-2x"></i>
    </div>
  </footer>
</template>

<script>
import state from "@/state";
export default {
  name: "Footer",
  setup() {
    function showAddModal() {
      state.showModal();
    }
    return {
      showAddModal,
    };
  },
};
</script>

<style scoped>
footer {
  background-color: var(--lightest-navy);
  display: flex;
  justify-content: center;
  box-shadow: var(--dark-navy) 0px 2px 4px 0px,
    var(--dark-navy) 0px 2px 16px 0px;
}
#addBtn {
  margin-top: 1rem;
  margin-bottom: 1rem;
  cursor: pointer;
}
</style>