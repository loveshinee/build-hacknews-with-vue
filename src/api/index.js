import { createAPI } from './createAPI'

const config = {
	databaseURL: 'https://hacker-news.firebaseio.com'
}

const api = createAPI({
	version: '/v0',
	config: {
		databaseURL: 'https://hacker-news.firebaseio.com'
	}
})


function fetch (child) {
	return new Promise((resolve, reject) => {
		api.child(child).once('value', snapshot => {
			const val = snapshot.val()
			if (val) val.__lastUpdated = Date.now()

			resolve(val)
		}, reject)
	})
}


export function fetchByType(type) {
	return  fetch(`${type}stories`)
}

export function fetchItem(id) {
	return fetch(`item/${id}`)
}

export function fetchItems(ids) {
	return Promise.all(ids.map( id=> fetchItem(id)))
}

export function fetchUser(id) {
	return fetch(`user/${id}`)
}
