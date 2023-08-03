<template>
	<div class="inline-flex flex-col rounded bg-transparent m-10">
	    <label>{{input.label}}</label>
	    <input type="text" name="name" 
	    class="w-60 h-14 px-3.5 rounded  border border-borderColor"  
	    autocomplete="off" 
	    :placeholder="input.placeholder"
	    @input="$emit('inputValue', $event.target.value)">
	</div>
</template>

<script setup>
	import { defineProps } from 'vue';

	const input = defineProps(['label', 'placeholder'])

	const t = (e) => console.log
</script>