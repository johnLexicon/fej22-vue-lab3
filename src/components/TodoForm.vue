<template>
  <form>
    <div class="form-group">
      <div class="input-group">
        <div class="input-group-area">
          <input
            placeholder="title..."
            id="todoTitle"
            name="todoTitle"
            type="text"
          />
        </div>
        <div type="button" class="input-group-icon">
          <i class="fa-solid fa-plus"></i>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: "TodoForm",
};
</script>

<style scoped>
form {
  width: 80%;
  margin: auto;
}
.input-group {
  display: table;
  border-collapse: collapse;
  width: 100%;
}
.input-group > div {
  display: table-cell;
  vertical-align: middle; /* For Safari */
}
.input-group-area {
  width: 100%;
}
.input-group input {
  display: block;
  border: none;
  width: 100%;
  padding: 8px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  font-size: 1.3rem;
}
.input-group input:focus {
  outline: none;
}
.input-group-icon {
  cursor: pointer;
  padding: 0 12px;
  background-color: var(--navy);
  color: var(--white);
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
}
</style>