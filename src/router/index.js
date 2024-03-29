import Vue from 'vue'
import VueRouter from 'vue-router'

const routerViewContainer = () => import('@/containers/router-view/index')
const pageContainer = () => import('@/containers/page-container/index')
const objectsPage = () => import('@/pages/objects/index')
const objectPage = () => import('@/pages/object/index')
const editObjectPage = () => import('@/pages/editObject/index')
const housePage = () => import('@/pages/house/index')
const editHousePage = () => import('@/pages/editHouse/index')
const newHousePage = () => import('@/pages/newHouse/index')
const usersPage = () => import('@/pages/users/index')
const settingsPage = () => import('@/pages/settings/index')
const registrationPage = () => import('@/pages/regist/index')
const agreementPage = () => import('@/pages/agreement/index')
const authPage = () => import('@/pages/auth/index')
const chessPage = () => import('@/pages/chess/index')
const notFoundPage = () => import('@/pages/notFound/index')
const newObjectPage = () => import('@/pages/newObject/index')

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    redirect: '/404'
  },
  {
    path: '/404',
    name: '404',
    component: notFoundPage
  },
  {
    path: '/auth',
    name: 'auth',
    component: authPage
  },
  {
    path: '/registration',
    name: 'registration',
    component: registrationPage
  },
  {
    path: '/agreement',
    name: 'agreement',
    component: agreementPage
  },
  {
    path: '/chess/:id',
    name: 'chess',
    component: chessPage
  },
  {
    path: '',
    redirect: '/objects',
    component: pageContainer,
    children: [
      // USERS
      {
        path: '/users',
        name: 'users',
        component: usersPage
      },
      // SETTINGS
      {
        path: '/settings',
        name: 'settings',
        component: settingsPage
      },
      // CHESS
      // HOUSE
      {
        path: '/house',
        component: routerViewContainer,
        children: [
          {
            path: ':id',
            name: 'house',
            component: housePage
          },
          {
            path: 'new',
            name: 'houseNew',
            component: newHousePage
          },
          {
            path: ':id/edit',
            name: 'houseEdit',
            component: editHousePage
          }
        ]
      },
      // ObJECTS
      {
        path: '/objects',
        component: routerViewContainer,
        children: [
          {
            path: '',
            name: 'objects',
            component: objectsPage
          },
          {
            path: 'new',
            name: 'newObject',
            component: newObjectPage
          },
          {
            path: ':id',
            name: 'object',
            component: objectPage
          },
          {
            path: ':id/edit',
            name: 'editObject',
            component: editObjectPage
          }
        ]
      }
    ]
  },
  {
    path: '',
    redirect: '/objects'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
