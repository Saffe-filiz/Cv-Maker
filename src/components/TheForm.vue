<template>
	<div class="w-full h-full relative flex flex-col justify-between overflow-y-auto">
	    <div class="w-auto h-auto overflow-hidden">
	    	<MobileMenu v-show="openMobileMenu"/>
	    </div>
	    <div class="w-full h-full px-2 xl:px-8" v-show="!openMobileMenu">
	    	<!--<Input :label="'Test'" :placeholder="'testValue'" @inputValue="(val) => v"/>
            <button class="w-full h-[54px] border-dashed border-2 border-brandColor rounded"  @click="addNew">Add {{currentSectionName}}</button>-->
            <div v-if="step == 0">
            	<h1>test 0</h1>
            </div>
            <div v-else-if="step == 1">
            	<h1>test 1</h1>
            </div>
            <div v-else-if="step == 2">
            	<h1>test 2</h1>
            </div>
            <div v-else-if="step == 3">
            	<h1>test 3</h1>
            </div>
            <div v-else-if="step == 4">
            	<h1>test 4</h1>
            </div>
            <div v-else-if="step == 5">
            	<h1>test 5</h1>
            </div>
            <div v-else-if="step == 6">
            	<h1>test 6</h1>
            </div>
	    </div>	
		<div class="w-full bg-white  p-4 xl:p-8 border-t border-borderColor">
			<div class="w-full  flex justify-between">
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
	import Input from './Input.vue';

	import { useStore } from 'vuex';
	import { computed, ref, watch } from 'vue';

	const store = useStore();
	const openMobileMenu = computed(() => store.getters.getMobileMenu);
    
    let step = ref(0);
    let dataName = ref('');
    let currentSectionName = ref('')
    let value = ref('')
	const currentStep = computed(() => store.getters.getCurrentStep);
	const goToSection = (val) => {
		step.value += val
	    store.commit('setCurrentSection', step.value)
	};
    


    const addNew = () => {
    	console.log(currentStep.value)
    	store.commit('setNewData', dataName.value);
    }

	watch(() => currentStep.value, (num) => {
		step.value = num
		switch(num){
		case 2:
		   dataName.value = 'experiences';
		   currentSectionName.value = 'Potition'
		   break;
		case 3:
			dataName.value = 'formations';
			currentSectionName.value = 'Education'
			break;
		case 4:
		    dataName.value = 'competencies';
		    currentSectionName.value = 'Skill'
		    break;
		 case 5: 
		    dataName.value = 'languages';
		    currentSectionName.value = 'Languages'
		    break;
		 case 6:
		 	dataName.value = 'interests';
		 	currentSectionName.value = 'Interests'

		};

	})


</script>