<template>
	<div class="hidden xl:flex w-full h-[70px] bg-white px-6 justify-between items-center">
		<div class="w-auto h-[47px]  flex items-center">
			<button class="w-auto h-[45px] px-6 flex items-center justify-center bg-[#4372ff] rounded">
				<span class="mr-2.5 w-6 h-6">
					<img class="w-full h-full" src="../assets/grid.svg">
				</span>
				<p class="text-white">CV models</p>
			</button>
			<div class="w-[248px] h-[45px] flex items-center justify-between border border-[#0000001f] rounded mx-4 focus-within:border-[#4372FF] hover:border-black">
				<input class="w-full h-full bg-white outline-0 pl-3.5 rounded" type="text" name="cv name">
				<span class="w-[21.3px] h-[21.3px] mr-3.5">
					<img class="w-full h-full" src="../assets/pen.svg">
				</span>
			</div>
			<button class="w-[70px] h-full flex items-center justify-center  border border-[#4372FF] rounded">
				<span class="w-5 h-5">
					<img class="w-full h-full" src="../assets/refresh.svg">
				</span>
			</button>
		</div>
		<div class="w-[653px] h-[47px] bg-red-100"></div>
	</div>
</template>

<script setup>
//	import grid from './assets/grid';
</script>