import { createStore } from 'vuex'


const store = createStore({
	state: {
		mobileMenuIsOpen: false,
		data: {
			name: 'My Cv',
			customFontSize: 'small',
			customColor: '#3870b1',
		}
	},

	getters: {
		getMobileMenu: state => state.mobileMenuIsOpen,

		getFontSize: state => state.data.customFontSize,

		getCustomColor: state => state.data.customColor,
	},

	mutations: {
		openMobileMenu (state) {
			state.mobileMenuIsOpen = !state.mobileMenuIsOpen
		},

		changeCostumColor (state, color) {
			state.data.customColor = color;
		}


	}
})

export default store