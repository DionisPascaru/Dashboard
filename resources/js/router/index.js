import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes.js'
import store from './../store'

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {

    const token = localStorage.getItem('accessToken')

    if (token) {

      if (to.matched.some(route => route.meta.guard === 'guest')) next({ name: 'dashboard' })
      else next();

    } else {
        console.log('auth')
      if (to.matched.some(route => route.meta.guard === 'auth')) next({ name: 'login' })
      else next();
    }



  // if (store.getters.user) {
  //   if (to.name === 'login' || to.name === 'register') next({ name: 'home' })
  //   else next()
  // } else {

  //   if (to.name !== 'login' && to.name !== 'register') next({ name: 'login' })
  //   else next()
  // }
})

export default router;

