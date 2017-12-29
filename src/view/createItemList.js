import ItemList from './ItemList.vue'

export  function createItemList (type) {
	return {
		name: `${type}-stories-view`,
		prefetch (store) {
			return store.dispatch('FETCH_LIST_DATA', { type })
		},
		render (h) {
			return h(ItemList, { props: { type }})
		}
	}
}