<template>
	<div class="hidden xl:block w-full h-full bg-gray-100">{{x}}</div>
</template>

<script setup>

	import { useStore } from 'vuex';

	const store = useStore();

	let x = store.getters.getTest
	console.log(x)
</script>