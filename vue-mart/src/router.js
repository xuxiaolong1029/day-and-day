import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Login from "./views/Login.vue";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "首页",
      component: Home
    },
    {
      path: "/login",
      name: "登录",
      component: Login
    },
    {
      path: "/about",
      name: "关于",
      meta: {
        auth: true
      },
      component:() => import(/* webpackChunkName: "about" */ "./views/About.vue")
    }
  ]
});

// 路由守卫
router.beforeEach((to, from, next) => {
  if (to.meta.auth) {
    // 需要登录
    const token = localStorage.getItem("token");
    if (token) {
      next();
    } else {
      next({
        path: "/login",
        query: { redirect: to.path }
      });
    }
  } else { // 不需要登录验证
    next()
  }
});

export default router;
