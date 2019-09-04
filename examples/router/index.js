import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: "/",
      name: "home",
      redirect: {
        name: "installation"
      }
    },
    {
      path: "/theme-custom",
      name: "theme-custom"
    },
    {
      path: "/change-log",
      name: "/change-log",
      component: () => import("../views/ChangeLog")
    },
    {
      path: "/installation",
      name: "installation",
      component: () => import("../views/Installation")
    },
    {
      path: "/components/button",
      name: "button",
      component: () => import("../views/VButtonDemo")
    },
    {
      path: "/components/icon",
      name: "icon",
      component: () => import("../views/Icon")
    }
  ]
});
