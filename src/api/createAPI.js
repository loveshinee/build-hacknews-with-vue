import firebase from 'firebase'

export function createAPI({config, version}) {
	firebase.initializeApp(config)

	return firebase.database().ref(version)
}