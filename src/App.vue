<template>
  <main>
    <AppHeader title="Checklist" />
    <div class="container">
      <CheckList />
      <teleport to=".modals" v-if="state.modalEnabled">
        <Modal :state="state">
          <TodoForm />
        </Modal>
      </teleport>
    </div>
    <AppFooter :state="state" />
  </main>
</template>

<script>
import CheckList from "@/views/CheckList";
import Modal from "@/views/Modal";
import TodoForm from "@/components/TodoForm";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { reactive } from "vue";
import stateContent from "@/state";
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
    const state = reactive(stateContent);

    return {
      state,
    };
  },
};
</script>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
}
</style>
