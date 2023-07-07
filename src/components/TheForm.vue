<template>
	<div class="w-full h-full relative flex flex-col justify-between overflow-y-auto">
	    <div class="w-full h-full bg-red-500 overflow-hidden">
	    	<MobileMenu v-show="openMobileMenu"/>
	    </div>	
		<div class="w-full bg-white  p-4 xl:p-8 border-t border-borderColor">
			<div class="w-full  flex justify-between">
				<button class="h-[38px] px-6 text-[#4372ff] bg-white border border-[#4372ff] rounded">GO BACK</button>
				<button class="h-[38px] px-6 text-white bg-[#4372ff] border border-[#4372ff] rounded shadow-[0px_4px_7px_0px_rgba(67,114,255,0.3)]">NEXT</button>
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
	let openMobileMenu = computed(() => store.getters.getMobileMenu)
</script>