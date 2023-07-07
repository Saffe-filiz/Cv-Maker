import { createStore } from 'vuex'


const store = createStore({
	state: {
		mobileMenuIsOpen: false
	},

	getters: {
		getMobileMenu: state => state.mobileMenuIsOpen
	},

	mutations: {
		openMobileMenu (state) {
			state.mobileMenuIsOpen = !state.mobileMenuIsOpen
		}
	}
})

export default store