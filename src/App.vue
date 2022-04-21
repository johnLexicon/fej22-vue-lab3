<template>
  <main>
    <AppHeader title="Checklist" />
    <div class="container">
      <CheckList />
      <teleport to=".modals">
        <Transition name="modal">
          <Backdrop v-if="state.modalInfo.modalEnabled">
            <Modal>
              <TodoForm />
            </Modal>
          </Backdrop>
        </Transition>
      </teleport>
      <teleport to=".toastr">
        <Transition name="toast">
          <Toastr
            v-if="state.errorMessage"
            title="Error"
            :message="state.errorMessage"
          />
        </Transition>
      </teleport>
    </div>
    <AppFooter />
  </main>
</template>

<script>
import Toastr from "@/components/Toastr";
import CheckList from "@/views/CheckList";
import Backdrop from "@/views/Backdrop";
import Modal from "@/views/Modal";
import TodoForm from "@/components/TodoForm";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import state from "@/state";
export default {
  name: "App",
  components: {
    Toastr,
    Backdrop,
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
  padding-bottom: 80px;
  margin: auto;
}
/* animation enter classes */
.modal-enter-from {
  opacity: 0;
}

.toast-enter-from {
  opacity: 0;
}

.modal-enter-to {
  opacity: 1;
}

.toast-enter-to {
  opacity: 1;
}

.modal-enter-active {
  transition: opacity 1s ease;
}

.toast-enter-active {
  transition: all 1s ease;
}

/* animation leave classes */
.modal-leave-from {
  opacity: 1;
}

.toast-leave-from {
  opacity: 1;
}

.modal-leave-to {
  opacity: 0;
}

.toast-leave-to {
  opacity: 0;
}

.modal-leave-active {
  transition: opacity 1s ease;
}

.toast-leave-active {
  transition: all 1s ease;
}
</style>
