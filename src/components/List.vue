<template>
	<div class="w-full h-full">
		<ul class="pb-4">
		     <li class="w-full h-14 bg-white py-2 pl-4 pr-12 mb-4 flex items-center rounded border border-borderColor flex items-center justify-between cursor-pointer" 
		     v-for="(data, index) in step.data"
		     :key="index">
		     	{{data.name || step.name}}
		     	<button @click="deletListItem(index)">delet</button>
		     </li>
	    </ul>
	    <button class="w-full h-[54px] border-dashed border-2 border-brandColor rounded"  @click="addNew">Add {{step.name}}</button>
	</div>
</template>

<script setup lang="ts">
	import { useStore } from 'vuex';
	import { defineProps, computed } from 'vue';

    const store = useStore();
	const step = defineProps(['name', 'data']);

	const defultName = computed(() => {
		switch(step.name){
		case 'experiences':
			return ['Front End Developer', 'X']
		break;
	    case 'formations':
	    	return ['Marmara University', '']
	    break;
	    case 'competencies':
	    	return ['Project management', 'Expert']
	    break;
	    case 'languages':
	    	return ['English', 'Native']
	    break;
	    case 'interests':
	    	return ['Video Game']
	    break;
	    default:
	    	console.log('ᓚᘏᗢ')
		}
	})

	const deletListItem = (index: number) => step.data.splice(index, 1);
    const addNew = () => store.commit('setNewData', step.name);
</script>