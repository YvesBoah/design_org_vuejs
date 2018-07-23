import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Ticket from '@/components/Ticket'
import Profil from '@/components/Profil'
import Statistique from '@/components/Statistique'
import None from '@/components/None'
import Vendeur from '@/components/Vendeur'
import Event_vue from '@/components/Event_vue'
import Ticket_vue from '@/components/Ticket_vue'
import Eventhot from '@/components/Eventhot'
import Typeticket from '@/components/Typeticket'
import TypeticketVue from '@/components/TypeticketVue'
import UpdateTypeTicket from '@/components/UpdateTypeTicket'
import EventModify from '@/components/EventModify'
import UpdateTicket from '@/components/UpdateTicket'
import MainLogin from '@/components/Layouts/MainLogin'
import MainLayout from '@/components/Layouts/MainLayout'
import list_vendeur from '@/components/list_vendeur'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/Login',
      name: 'MainLogin',
      component: MainLogin
    },
    {
      path: '*',
      redirect: '/'
    },
    {
      path: '/',
      name: 'MainLayout',
      component: MainLayout,
      children: [
        {
          path: '/Acceuil',
          name: 'HelloWorld',
          component: HelloWorld
        },
        {
          path: '/Vendeur',
          name: 'Vendeur',
          component: Vendeur
        },
        {
          path: '/list_vendeur',
          name: 'list_vendeur',
          component: list_vendeur
        },
        {
          path: '/Event',
          name: 'Eventhot',
          component: Eventhot
        },
        {
          path: '/Ticket',
          name: 'Ticket',
          component: Ticket
        },
        {
          path: '/Profil',
          name: 'Profil',
          component: Profil
        },
        {
          path: '/Statistique',
          name: 'Statistique',
          component: Statistique
        },
        {
          path: '/N',
          name: 'None',
          component: None
        },
        {
          path: '/Event_vue',
          name: 'Event_vue',
          component: Event_vue
        },
        {
          path: '/event/:id/ticket',
          name: 'Ticket_vue',
          component: Ticket_vue
        },
        {
          path: '/Typeticket',
          name: 'Typeticket',
          component: Typeticket
        },
        {
          path: '/TypeticketVue',
          name: 'TypeticketVue',
          component: TypeticketVue
        },
        {
          path: '/UpdateTypeTicket/:id',
          name: 'UpdateTypeTicket',
          component: UpdateTypeTicket
        },
        {
          path: '/EventModify/:id',
          name: 'EventModify',
          component: EventModify
        },
        {
          path: '/UpdateTicket/:id',
          name: 'UpdateTicket',
          component: UpdateTicket
        }
      ]
    }
  ]
})
