<template>
	<div class="w-full h-full flex flex-col overflow-hidden">
		<div class="w-full min-h-[calc(100%_-_136px)] h-auto xl:min-h-[calc(100%_-_106px)] overflow-auto">
			<MobileMenu v-show="openMobileMenu"/>
			<div class="py-6 px-4 xl:py-2 xl:px-8" v-show="!openMobileMenu">
				<div v-if="step == 0">
					<div class="flex flex-row mb-5">
						<div class="w-48 h-44 bg-blue-100 mr-5 flex items-center justify-between ">
							img
						</div>
						<div class="w-[calc(100%_-_200px)] flex flex-col gap-y-2">
							<div class="flex flex-col rounded bg-transparent">
	                            <label>First Name</label>
	                            <input type="text" name="name" class="inputStyle" autocomplete="off" placeholder="Bob"  v-model="idantity.first_name">
	                        </div>
	                        <div class="flex flex-col rounded bg-transparent">
	                            <label>Surename</label>
	                            <input type="text" name="surename" class="inputStyle"  autocomplete="off" placeholder="Marley" v-model="idantity.last_name">
	                        </div>
						</div>
					</div>
            	    <div class="w-full h-auto flex flex-col gap-y-4">
            	  	    <div class="flex flex-col rounded bg-transparent">
	                        <label>Email</label>
	                        <input type="text" name="email" class="inputStyle"  autocomplete="off" placeholder="Email" v-model="idantity.email">
	                    </div>
	                    <div class="flex flex-col rounded bg-transparent">
	                        <label>Adress</label>
	                        <input type="text" name="adress" class="inputStyle"  autocomplete="off" placeholder="15 Russell Rd, SHIPHAM BS25 6LF, United Kingdom" v-model="idantity.address">
	                    </div>
	                    <div class="flex flex-col rounded bg-transparent">
	                        <label>Phone</label>
	                        <input type="tel" name="phone" class="inputStyle"  autocomplete="off" placeholder="+44 79 4292 7473" v-model="idantity.phone">
	                    </div>
            	    </div>
                </div>
                <div v-else-if="step == 1">
            	    <h1>test 1</h1>
                </div>
                <div v-else-if="step == 2">
            	     <List :dataName="'experiences'" :name="'Potition'" :data="data.experiences"/>
                </div>
                <div v-else-if="step == 3">
            	     <List :dataName="'formations'" :name="'Education'" :data="data.formations"/>
                </div>
                <div v-else-if="step == 4">
            	     <List :dataName="'competencies'" :name="'Skill'" :data="data.competencies"/>
                </div>
                <div v-else-if="step == 5">
                  	<List :dataName="'languages'" :name="'Languages'" :data="data.languages"/>
                </div>
                <div v-else-if="step == 6">
            	    <List :dataName="'interests'" :name="'interests'" :data="data.interests"/>
                </div>
			</div>
       </div>
       	<div class="w-full bg-white  p-4 xl:p-8 border-t  border-borderColor">
			    <div class="w-full h-10 flex justify-between">
				    <button class="h-[38px] px-6 text-[#4372ff] bg-white border border-[#4372ff] rounded"
				    :class="{'invisible' : currentStep == 0}" :disabled="currentStep == 0" @click="goToSection(-1)">GO BACK</button>
				    <button class="h-[38px] px-6 text-white bg-[#4372ff] border border-[#4372ff] rounded shadow-[0px_4px_7px_0px_rgba(67,114,255,0.3)]"
				    :class="{'invisible' : currentStep == 6}" :disabled="currentStep == 6" @click="goToSection(+1)">NEXT</button>
			    </div>
		    </div>
       	<BottonBar/>
	</div>
</template>

<script setup>
    import BottonBar from './TheBottonBar.vue';
	import MobileMenu from './TheMobileMenu.vue';
	import List from './List.vue';

	import { useStore } from 'vuex';
	import { computed, ref, watch, reactive } from 'vue';

	const store = useStore();
	const openMobileMenu = computed(() => store.getters.getMobileMenu);
    
    let step = ref(0);
    let currentStepName = ref('')

    let idantity = reactive( {
		        address: '',
                checkbox1: false,
                driving_licence: '',
                email: '',
                first_name: '',
                last_name: '',
                phone: '',
	        })

    const data = computed(() =>  store.getters.getCvData)
	const currentStep = computed(() => store.getters.getCurrentStep);
	const goToSection = (val) => {
		step.value += val
	    store.commit('setCurrentStep', step.value)
	};
    


    const addNew = () => store.commit('setNewData', dataName.value);

	watch(() => currentStep.value, (num) => {
		step.value = num
		/*switch(num){
		case 2:
		   dataName.value = 'experiences';
		   currentStepName.value = 'Potition'
		   break;
		case 3:
			dataName.value = 'formations';
			currentStepName.value = 'Education'
			break;
		case 4:
		    dataName.value = 'competencies';
		    currentStepName.value = 'Skill'
		    break;
		 case 5: 
		    dataName.value = 'languages';
		    currentStepName.value = 'Languages'
		    break;
		 case 6:
		 	dataName.value = 'interests';
		 	currentStepName.value = 'Interests'

		};*/

	})


</script>