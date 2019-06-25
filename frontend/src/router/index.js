import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Carculator from '@/components/basic/Calculator'
import joinForm from '@/components/member/joinForm'
import moonhoForm from '@/components/moonho/moonhoForm'

Vue.use(Router)

export default new Router({
  mode : 'history',
  routes: [
    {path: '/', name: 'Home', component: Home},
    {path : '/calculator', name: 'calculator', component: Carculator},
    {path : '/joinform', name: 'joinform', component: joinForm},
    {path : '/moonhoform', name: 'moonhoform', component: moonhoForm}
  ]
})
