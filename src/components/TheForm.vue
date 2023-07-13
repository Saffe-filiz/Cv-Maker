<template>
	<div class="w-full h-full relative flex flex-col justify-between overflow-y-auto">
	    <div class="w-full h-full bg-red-500 overflow-hidden">
	    	<MobileMenu v-show="openMobileMenu"/>
	    </div>	
		<div class="w-full bg-white  p-4 xl:p-8 border-t border-borderColor">
			<div class="w-full  flex justify-between">
				<button class="h-[38px] px-6 text-[#4372ff] bg-white border border-[#4372ff] rounded"
				:class="{'invisible' : currentSection == 0}" :disabled="currentSection == 0" >GO BACK</button>
				<button class="h-[38px] px-6 text-white bg-[#4372ff] border border-[#4372ff] rounded shadow-[0px_4px_7px_0px_rgba(67,114,255,0.3)]"
				:class="{'invisible' : currentSection >= 6}" :disabled="currentSection < 6">NEXT</button>
			</div>
		</div>
		<BottonBar/>
	</div>
</template>

<script setup>
    import BottonBar from './TheBottonBar.vue';
	import MobileMenu from './TheMobileMenu.vue';

	import { useStore } from 'vuex';
	import { computed } from 'vue';

	const store = useStore();
	const openMobileMenu = computed(() => store.getters.getMobileMenu);

	const currentSection = computed(() => store.getters.getCurrentSection);
	const goToSection = ( val ) => store.commit('changeCurrentSection', val);

	
</script>