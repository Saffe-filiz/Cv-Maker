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

		getName: state => state.data.name,
	},

	mutations: {
		openMobileMenu (state) {
			state.mobileMenuIsOpen = !state.mobileMenuIsOpen
		},

		changeCostumColor (state, color) {
			state.data.customColor = color;
		},

		changeName (state, name) {
			console.log(name.value)
			state.data.name = name.value;
		}


	}
})

export default store