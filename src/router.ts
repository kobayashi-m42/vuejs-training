import Vue from "vue";
import Router from "vue-router";
import Form from "./views/Form.vue";
import Thanks from "./components/Thanks.vue";
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
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    }
  ]
});
