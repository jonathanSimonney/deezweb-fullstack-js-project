import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Login from "./views/Login.vue";
import Register from "./views/Register.vue";
import Search from "./views/connected/Search.vue";
import Track from "./views/connected/Track.vue";
import Album from "./views/connected/Album.vue";
import Artist from "./views/connected/Artist.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  linkActiveClass: "active",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/register",
      name: "register",
      component: Register
    },
    {
      path: "/search",
      name: "search",
      component: Search
    },
    {
      path: "/track/:id",
      name: "track",
      component: Track
    },
    {
      path: "/album/:id",
      name: "album",
      component: Album
    },
    {
      path: "/artist/:id",
      name: "artist",
      component: Artist
    },
    {
      path: "/favorites",
      name: "fav",
      component: Search // todo give proper component
    },
    {
      path: "/account",
      name: "account",
      component: Search // todo give proper component
    },
    {
      path: "/logout",
      name: "logout",
      component: Home
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
