<template>
  <main>
    <AppHeader title="Checklist" />
    <div class="container">
      <CheckList />
      <teleport to=".modals">
        <Transition name="modal">
          <Modal v-if="state.modalInfo.modalEnabled">
            <TodoForm />
          </Modal>
        </Transition>
      </teleport>
    </div>
    <AppFooter />
  </main>
</template>

<script>
import CheckList from "@/views/CheckList";
import Modal from "@/views/Modal";
import TodoForm from "@/components/TodoForm";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import state from "@/state";
export default {
  name: "App",
  components: {
    CheckList,
    Modal,
    TodoForm,
    AppFooter: Footer,
    AppHeader: Header,
  },
  setup() {
    return {
      state,
    };
  },
};
</script>

<style scoped>
.container {
  padding-top: 132px;
  padding-bottom: 32px;
  margin: auto;
}
/* animation enter classes */
.modal-enter-from {
  opacity: 0;
}
.modal-enter-to {
  opacity: 1;
}
.modal-enter-active {
  transition: opacity 1s ease;
}

/* animation leave classes */
.modal-leave-from {
  opacity: 1;
}

.modal-leave-to {
  opacity: 0;
}

.modal-leave-active {
  transition: opacity 1s ease;
}
</style>
