<template>
  <footer>
    <div id="removeAll">
      <i @click="onDelete" class="fa-solid fa-trash-can fa-2x"></i>
    </div>
    <div id="addBtn" class="btn btn-primary">
      <i @click="showAddModal" class="fa-solid fa-circle-plus fa-3x"></i>
    </div>
    <div id="filter" class="btn btn-primary">
      <span class="filter-wrapper">
        <transition name="menu">
          <FilterMenu
            v-if="showFilterMenu"
            :chosen="state.filterOption"
            @on-filtering="handleFiltering"
          />
        </transition>
        <i
          id="filterIcon"
          @click="showFilterMenu = !showFilterMenu"
          class="fa-solid fa-filter fa-2x"
          :class="{ active: showFilterMenu }"
        >
        </i>
      </span>
    </div>
  </footer>
</template>

<script>
import { ref } from "vue";
import state from "@/state";
import FilterMenu from "@/components/FilterMenu";
export default {
  name: "Footer",
  components: {
    FilterMenu,
  },
  setup() {
    const showFilterMenu = ref(false);

    function showAddModal() {
      state.showModal();
    }
    function onDelete() {
      state.removeAll();
    }
    function handleFiltering(option) {
      showFilterMenu.value = false;
      state.setFilterOption(option);
    }
    return {
      showAddModal,
      onDelete,
      showFilterMenu,
      handleFiltering,
      state,
    };
  },
};
</script>

<style>
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
footer > * {
  flex: 1;
  text-align: center;
}

footer i {
  cursor: pointer;
}
footer i:hover {
  color: var(--blue);
}
#filterIcon.active {
  color: var(--navy);
}

#addBtn {
  transform: translateY(-50%);
}
#addBtn i {
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;
  border-radius: 50%;
}
.filter-wrapper {
  position: relative;
}
.filter-menu {
  position: absolute;
  padding: 0.3rem;
  border-radius: 10px;
  bottom: 215%;
  left: -165%;
}

/* Transitions */
.menu-enter-from,
.menu-leave-to {
  opacity: 0;
}
.menu-enter-to,
.menu-leave-from {
  opacity: 1;
}
.menu-enter-active {
  transition: opacity 1s ease;
}
.menu-leave-active {
  transition: opacity 1s ease;
}
</style>