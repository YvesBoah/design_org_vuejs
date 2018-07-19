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

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Vendeur',
      name: 'Vendeur',
      component: Vendeur
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
      path: '*',
      redirect: '/'
    },
    {
      path: '/Statistique',
      name: 'Statistique',
      component: Statistique
    },
    {
      path: '/None',
      name: 'None',
      component: None
    },
    {
      path: '/Event_vue',
      name: 'Event_vue',
      component: Event_vue
    },
    {
      path: '/Ticket_vue',
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
})
