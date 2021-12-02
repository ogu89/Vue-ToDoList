<template>
  <div
    id="app"
    class="
      container
      mt-3
      col-10
      border
      rounded
      p-3
      bg-white
      shadow-lg
      img
      vh-100
    "
  >
    <div class="input-group mb-3 w-80">
      <input
        type="text"
        class="form-control"
        placeholder="write a task"
        aria-label="Recipient's username"
        aria-describedby="button-addon"
        v-model="text"
      />
      <button
        class="btn btn-outline-secondary bg-success text-white"
        type="button"
        id="button-addon"
        :disabled="!text.length"
        v-on:click="addTask()"
      >
        Create
      </button>
    </div>

    <div v-if="!list.length">
      <p>There are no tasks</p>
    </div>

    <div v-for="(task, index) in list" v-bind:key="index">
      <div class="card w-70 my-1">
        <div class="card-body">
          <h3 class="card-title">TODO {{ index + 1 }}: {{ task.title }}</h3>
          <p>{{ task.date }}</p>
          <div class="d-flex justify-content-end">
            <em
              class="bg-danger p-1 btn far fa-trash-alt fa-2x rounded"
              v-on:click="deleteTask(index)"
            ></em>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
class Task {
  constructor(title, date) {
    this.title = title;
    this.date = date;
  }
}

export default {
  name: "ToDoList",
  props: {},

  data: function () {
    return {
      list: [],
      text: "",
    };
  },
  methods: {
    addTask: function () {
      //console.log("dfl;skjfds")
      let newTask = new Task(this.text, new Date().toISOString().slice(0, 10));
      this.list.push(newTask);

      this.text = "";
    },
    deleteTask: function (i) {
      this.list.splice(i, 1);
      //console.log(!this.list.length);
    },
    firstTask: function () {
      this.list.push(
        new Task("MAKE A TO DO LIST", new Date().toISOString().slice(0, 10))
      );
    },
  },
};
//firstTask()
</script>

<style>
.img {
  background-image: url("https://images.unsplash.com/photo-1614850715776-a749a85b4144?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80");
}
</style>
