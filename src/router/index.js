import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/login/login.vue'
import Pwdlogin from '../views/login/pwd_login.vue'
import Home from '../views/home/home.vue'
import Index from '../views/home/index.vue'
import ShowTeachers from '../views/home/ShowTeachers.vue'
import News from '../views/home/News.vue'
import BookList from '../views/home/BookList.vue'
import Person from '../views/home/Person.vue'
import Setpwd from '../views/home/setPwd.vue'
import SetNewPass from '../views/home/set-new-pass.vue'
import Date from '../views/home/date.vue'
import Class_detail from '../views/home/class_detail.vue'
import Curserinfo from '../views/home/courseinfo.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    component: Login
  },
  {
    path: '/purchase',
    component: ()=>import("../views/home/purchase.vue")
  },
  {
    path: '/news-detail',
    component: ()=>import("../views/home/news-detail.vue")
  },
  {
    path: '/address-edit',
    component: ()=>import("../views/home/address-edit.vue")
  },
  {
    path: '/address',
    component: ()=>import("../views/home/address.vue")
  },
  {
    path: '/courseinfo',
    component: Curserinfo
  },
  {
    path: '/class_detail',
    component: Class_detail
  },
  {
    path: '/date',
    component: Date
  },
  {
    path: '/set-new-pass',
    component: SetNewPass
  },
  {
    path: '/setPwd',
    component: Setpwd
  },
  {
    path: '/pwd_login',
    component: Pwdlogin
  },
  {
    path: '/home',
    component: Home,
	children:[
		{
			path:"/index",
			component:Index
		},
		{
			path:"/ShowTeachers",
			component:ShowTeachers
		},
		{
			path:"/News",
			component:News
		},
		{
			path:"/BookList",
			component:BookList
		},
		{
			path:"/Person",
			component:Person
		}
	]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
