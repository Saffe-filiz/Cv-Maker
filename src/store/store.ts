import { createStore } from 'vuex'


const store = createStore({
	state: {
		test: 'test'
	},

	getters: {
		getTest: state => state.test
	}
})

export default store