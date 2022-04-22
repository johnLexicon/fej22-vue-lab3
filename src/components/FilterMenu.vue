<template>
  <div class="filter-menu">
    <ul>
      <li
        :class="{ chosen: $props.chosen === 'all' }"
        @click="$emit('on-filtering', 'all')"
        id="all"
      >
        All
      </li>
      <li
        :class="{ chosen: $props.chosen === 'undone' }"
        @click="$emit('on-filtering', 'undone')"
        id="undone"
      >
        Undone
      </li>
      <li
        :class="{ chosen: $props.chosen === 'done' }"
        @click="$emit('on-filtering', 'done')"
        id="done"
      >
        Completed
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "FilterMenu",
  emits: ["on-filtering"],
  props: {
    chosen: {
      type: String,
      required: true,
      validator(value) {
        // The value must match one of these strings
        return ["all", "undone", "done"].includes(value);
      },
    },
  },
};
</script>

<style scoped>
.filter-menu {
  background-color: rgba(85, 85, 85, 0.555);
  box-shadow: var(--dark-navy) 0px 1px 3px, var(--dark-navy) 0px 1px 2px;
  color: var(--white);
}
.filter-menu > ul {
  list-style-type: none;
}
.filter-menu li {
  padding: 3px 0;
  cursor: pointer;
}
.filter-menu li.chosen {
  background-color: var(--navy);
}
.filter-menu li:nth-child(-n + 2) {
  border-bottom: 2px solid var(--white);
}

.filter-menu li:hover {
  background-color: var(--blue);
}
</style>