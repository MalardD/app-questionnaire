import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Result from '@/components/Result'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/questionnaire',
      name: 'questionnaire',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "Questionnaire" */ './views/Questionnaire.vue')
    },
    {
      path: '/questions',
      name: 'questions',
      component: () => import(/* webpackChunkName: "Questions" */ './views/Questions.vue')
    },
    {
      path: '/result',
      name: 'Result',
      component: Result
    },
  ]
})
