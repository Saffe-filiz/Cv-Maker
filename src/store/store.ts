import { createStore } from 'vuex'


const store = createStore({
	state: {
		test: 'asdasdas'
	},

	getters: {
		getTest: state => state.test
	}
})

export default store