<template>
  <footer>
    <div id="removeAll">
      <i @click="onDelete" class="fa-solid fa-trash-can fa-2x"></i>
    </div>
    <div id="addBtn" class="btn btn-primary">
      <i @click="showAddModal" class="fa-solid fa-circle-plus fa-3x"></i>
    </div>
    <div id="filter" class="btn btn-primary">
      <i class="fa-solid fa-filter fa-2x"></i>
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
    function onDelete() {
      state.removeAll();
    }
    return {
      showAddModal,
      onDelete,
    };
  },
};
</script>

<style scoped>
footer {
  background-color: var(--lightest-navy);
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: var(--dark-navy) 0px 2px 4px 0px,
    var(--dark-navy) 0px 2px 16px 0px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
}
footer > div {
  flex: 1;
  text-align: center;
}

footer i {
  cursor: pointer;
}
footer i:hover {
  color: var(--blue);
}

#addBtn {
  transform: translateY(-50%);
}
#addBtn i {
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;
  border-radius: 50%;
}
</style>