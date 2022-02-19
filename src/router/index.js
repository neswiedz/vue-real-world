import Vue from 'vue'
import VueRouter from 'vue-router'
import AssetList from '@/views/AssetList'
import AssetCreate from '@/views/AssetCreate'
import AssetShow from '@/views/AssetShow'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/asset',
    name: 'asset-list',
    component: AssetList,
  },
  {
    path: '/asset/create',
    name: 'asset-create',
    component: AssetCreate,
  },
  {
    path: '/asset/show',
    name: 'asset-show',
    component: AssetShow,
  },
  // {
  //   path: '/asset/show',
  //   name: 'AssetShow',
  //   redirect: { name: 'about' },
  // },
  // {
  //   path: '/about-us',
  //   name: 'about',
  //   component: About,
  //   alias: '/about' // <-----
  // }
]

const router = new VueRouter({
  routes,
})

export default router
