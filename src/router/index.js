import Vue from 'vue'
import Router from 'vue-router'
import itemList from '@/view/itemList'

Vue.use(Router)

export default new Router({
	mode: 'history',
	fallback: false,
	scrollBehavior: () => ({ y: 0 }),
  	routes: [
    	{
      		path: '/top',
      		component: itemList
    	}
  	]
})
