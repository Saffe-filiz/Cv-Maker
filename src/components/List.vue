<template>
	<div class="w-full h-full">
		<div class="w-full h-20 flex items-center text-xl font-bold hidden xl:block">
			<h2>{{step.name}}</h2>
		</div>
		<ul class="pb-4">
		     <li class="w-full h-14 bg-white py-2 pl-4 pr-12 mb-4 flex items-center rounded border border-borderColor">
		     	test1
		     </li>
		     <li class="w-full h-14 bg-white py-2 pl-4 pr-12 mb-4 flex items-center rounded border border-borderColor">
		     	test1
		     </li>
		     <li class="w-full h-14 bg-white py-2 pl-4 pr-12 mb-4 flex items-center rounded border border-borderColor">
		     	test1
		     </li>
		     
		     
	    </ul>
	    <button class="w-full h-[54px] border-dashed border-2 border-brandColor rounded"  @click="addNew">Add {{step.name}}</button>
	</div>
</template>

<script setup>
	import { useStore } from 'vuex';
	import { defineProps } from 'vue';

	const step = defineProps(['stepName', 'name'])

	const store = useStore();
	
    const addNew = () => {
    	store.commit('setNewData', step.stepName);
    }
</script>