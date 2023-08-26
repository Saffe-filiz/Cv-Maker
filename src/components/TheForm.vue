<template>
	<div class="w-full h-full flex flex-col overflow-hidden bg-red-100">
		<div class="w-full min-h-[calc(100%_-_136px)] h-auto xl:min-h-[calc(100%_-_106px)] overflow-auto">
			<MobileMenu v-show="openMobileMenu"/>
			<div class="py-6 px-4 xl:py-2 xl:px-8" v-show="!openMobileMenu">
				<div v-if="step == 0">
            	    <h1>test 0</h1>
                </div>
                <div v-else-if="step == 1">
            	    <h1>test 1</h1>
                </div>
                <div v-else-if="step == 2">
            	     <List :dataName="'experiences'" :name="'Potition'" :data="cvData.experiences"/>
                </div>
                <div v-else-if="step == 3">
            	     <List :dataName="'formations'" :name="'Education'" :data="cvData.formations"/>
                </div>
                <div v-else-if="step == 4">
            	     <List :dataName="'competencies'" :name="'Skill'" :data="cvData.competencies"/>
                </div>
                <div v-else-if="step == 5">
                  	<List :dataName="'languages'" :name="'Languages'" :data="cvData.languages"/>
                </div>
                <div v-else-if="step == 6">
            	    <List :dataName="'interests'" :name="'interests'" :data="cvData.interests"/>
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
	import { computed, ref, watch } from 'vue';

	const store = useStore();
	const openMobileMenu = computed(() => store.getters.getMobileMenu);
    
    let step = ref(0);
   // let dataName = ref('');
    let currentStepName = ref('')
    //let value = ref('');
    const cvData = computed(() => store.getters.getCvData)
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