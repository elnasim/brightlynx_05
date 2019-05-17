import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Registration from './views/Registration'
import Auth from './views/Auth'
import Users from './views/Users'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/registration',
      name: 'registration',
      component: Registration,
    },
    {
      path: '/auth',
      name: 'auth',
      component: Auth,
    },
    {
      path: '/users',
      name: 'users',
      component: Users,
    },
  ],
})
