import { createStore } from 'vuex'

const defultCvData = {
	name: 'My Cv',
	customFontSize: '13px',
	customColor: '#3870b1',
	interestsDisplay: false,
	experiences: [],
	competencies: [],
	formations: [],
	identity: {
		address: '',
        checkbox1: false,
        driving_licence: '',
        email: '',
        first_name: '',
        last_name: '',
        phone: '',
	},
	interests: [],
	languages: [],
}


const store = createStore({
	state: {
		mobileMenuIsOpen: false,
		step: 0,
		isSaved: false,
		data: {
	        name: 'My Cv',
	        customFontSize: '13px',
	        customColor: '#3870b1',
	        interestsDisplay: false,
	        experiences: [],
	        competencies: [],
	        formations: [],
	        identity: {
		        address: '',
                checkbox1: false,
                driving_licence: '',
                email: '',
                first_name: '',
                last_name: '',
                phone: '',
	        },
	        interests: [],
	        languages: [],
         }
	},

	getters: {
		getMobileMenu: state => state.mobileMenuIsOpen,

		getFontSize: state => state.data.customFontSize,

		getCustomColor: state => state.data.customColor,

		getName: state => state.data.name,

		getCurrentStep: state => state.step,

		getCvData: state => state.data,

		getIsSaved: state => state.isSaved,
	},

	mutations: {
		openMobileMenu (state) {
			state.mobileMenuIsOpen = !state.mobileMenuIsOpen
		},

		setCostumColor (state, color) {
			state.data.customColor = color;
		},

		setName (state, name) {
			state.data.name = name.value;
		},

	    setCurrentStep (state, step) {
	    	state.step = step
	    },

	    setFontSize (state, index = 1) {
	    	state.data.customFontSize = ['11px', '13px', '16px'][index];
	    },

	    saveChanges ( state ) {
	    	localStorage.setItem('savedData', JSON.stringify(state.data));
	    }, 

	    setCvData ( state, data ) {
	    	state.data = data
	    },

	    resetCvData ( state ) {
	    	state.data = defultCvData;
	    },

	    setNewData ( state, name ) {
	    	state.data[name].push({one: [state.data[name].length]})
	    }


	}
})

export default store