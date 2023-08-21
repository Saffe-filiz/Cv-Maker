<template>
	<div class="w-full h-full relative flex flex-col justify-between overflow-y-auto">
	    <div class="w-full h-full overflow-hidden">
	    	<MobileMenu v-show="openMobileMenu"/>
	    </div>	
        <!--<Input :label="'Test'" :placeholder="'testValue'" @inputValue="(val) => v"/>-->
        <button @click="addNew">Addd</button>
		<div class="w-full bg-white  p-4 xl:p-8 border-t border-borderColor">
			<div class="w-full  flex justify-between">
				<button class="h-[38px] px-6 text-[#4372ff] bg-white border border-[#4372ff] rounded"
				:class="{'invisible' : currentSection == 0}" :disabled="currentSection == 0" @click="goToSection(-1)">GO BACK</button>
				<button class="h-[38px] px-6 text-white bg-[#4372ff] border border-[#4372ff] rounded shadow-[0px_4px_7px_0px_rgba(67,114,255,0.3)]"
				:class="{'invisible' : currentSection == 6}" :disabled="currentSection == 6" @click="goToSection(+1)">NEXT</button>
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
    
    let number = ref(0);
    let sectionName = ref('');
    let value = ref('')
	const currentSection = computed(() => store.getters.getCurrentSection);
	const goToSection = (val) => {
		number.value += val
	    store.commit('setCurrentSection', number.value)
	};
    


    const addNew = () => {
    	console.log(currentSection.value)
    	store.commit('setNewData', sectionName.value);
    }

	watch(() => currentSection.value, (num) => {
		number.value = num
		switch(num){
		case 2:
		   sectionName.value = 'experiences';
		   break;
		case 3:
			sectionName.value = 'formations';
			break;
		case 4:
		    sectionName.value = 'competencies';
		    break;
		 case 5: 
		    sectionName.value = 'languages';
		    break;
		 case 6:
		 	sectionName.value = 'interests';

		}
	})


</script>