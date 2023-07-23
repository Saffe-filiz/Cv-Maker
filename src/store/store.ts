import { createStore } from 'vuex'


const store = createStore({
	state: {
		mobileMenuIsOpen: false,
		currentSection: 0,
		isSaved: false,
		data: {
			name: 'My Cv',
			customFontSize: '13px',
			customColor: '#3870b1',
		}
	},

	getters: {
		getMobileMenu: state => state.mobileMenuIsOpen,

		getFontSize: state => state.data.customFontSize,

		getCustomColor: state => state.data.customColor,

		getName: state => state.data.name,

		getCurrentSection: state => state.currentSection,

		getCvData: state => state.data,

		getIsSaved: state => state.isSaved,
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
		},

	    changeCurrentSection (state, section) {
	    	state.currentSection = section
	    },

	    changeFontSize (state, index = 1) {
	    	let sizes = ['11px', '13px', '16px'];
	    	state.data.customFontSize = sizes[index];
	    },

	    saveChanges ( state ) {
	    	localStorage.setItem([state.data.name], JSON.stringify(state.data));
	    }, 


	}
})

export default store