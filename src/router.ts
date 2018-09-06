import Vue from "vue";
import Router from "vue-router";
import Form from "./views/Form.vue";
import Thanks from "./components/form/Thanks.vue";
import Todo from "./views/Todo.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "form",
      component: Form
    },
    {
      path: "/thanks",
      name: "thanks",
      component: Thanks
    },
    {
      path: "/todo",
      name: "todo",
      component: Todo
    }
  ]
});
