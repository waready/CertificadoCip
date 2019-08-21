import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Formulario from '@/components/formulario'
import login from '@/components/Login'
import registro from '@/components/registro'
import Muestra from '@/components/muestra'


import firebase from 'firebase'
Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/from',
      name: 'formulario',
      component: Formulario,
      meta:{
        requiresAuth: true
      }
    },
    {
      path: '/muestra',
      name: 'muestra',
      component: Muestra,
      meta:{
        requiresAuth: true
      }
    },
    {
      path: '/registro',
      name: 'registro',
      component: registro,
      meta:{
        requiresAuth: true
      }
    },
  ]
});
  router.beforeEach((to,from,next)=>{
    if(to.matched.some(ruta=>ruta.meta.requiresAuth)){
      const user= firebase.auth().currentUser
      if(user){
        next()
      }
      else{
        next({
          name:'login'
        })
      }
    }
    else{
      next()
    }
  })

export default router 
