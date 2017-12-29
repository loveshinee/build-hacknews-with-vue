import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import { createItemList } from '../view/createItemList'

export default new Router({
	mode: 'history',
	fallback: false,
	scrollBehavior: () => ({ y: 0 }),
  	routes: [
    	{
      		path: '/top/:page(\\d+)?',
      		component: createItemList('top')
    	}
  	]
})
