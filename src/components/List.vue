<template>
	<div class="w-full h-full">
		<ul class="pb-4">
		     <li class="w-full h-14 bg-white py-2 pl-4 pr-12 mb-4 flex items-center rounded border border-borderColor flex items-center justify-between cursor-pointer" 
		     v-for="(data, index) in step.data"
		     :key="index">
		     	{{index +1}}
		     	<button @click="deletListItem(index)">delet</button>
		     </li>
	    </ul>
	    <button class="w-full h-[54px] border-dashed border-2 border-brandColor rounded"  @click="addNew">Add {{step.name}}</button>
	</div>
</template>

<script setup lang="ts">
	import { useStore } from 'vuex';
	import { defineProps } from 'vue';

    const store = useStore();
	const step = defineProps(['dataName', 'name', 'data'])

	const deletListItem = (index: number) => step.data.splice(index, 1);
    

    const forms = ref([{
    	city: "",
        company: "",
        description: "",
        end_date: "",
        not_over: false,
        start_date: "",
        title: ""
    }, 
    {
    	city: "",
        description: "",
        diploma: "133",
        name: "122",
        not_obtained_yet: false,
        year: "",
    }, {
    	level: "",
    	name: "",
    }, {
    	level: "",
    	name: "",
    }, {
    	name: "",
    }])

    const addNew = () => store.commit('setNewData', step.dataName);
</script>