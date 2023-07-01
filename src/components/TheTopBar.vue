<template>
	<div class="hidden xl:flex w-full h-[70px] bg-white px-6 justify-between items-center">
		<div class="w-auto h-[47px]  flex items-center">
			<button class="w-auto h-[45px] px-6 flex items-center justify-center bg-[#4372ff] rounded">
				<span class="mr-2.5 w-6 h-6">
					<img class="w-full h-full" src="../assets/grid.svg">
				</span>
				<p class="text-white">CV models</p>
			</button>
			<div class="w-[248px] h-[45px] flex items-center justify-between border border-[#0000001f] rounded mx-4 focus-within:border-[#4372FF] hover:border-black hover:focus-within:border-[#4372FF]">
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
		<div class="w-[653px] h-[47px] flex justify-between">
			<div class="w-[134px] h-full rounded flex items-center border border-[#0000001f]">
				<span class="w-9 h-full flex items-center justify-center bg-[#f5f5f5]">
					<img class="w-5 h-7" src="../assets/colors.svg">
				</span>
				<div class="w-full h-full bg-white ">
					<div class="w-12 h-7 bg-black rounded border border-red-100"></div>
				</div>
			</div>
			<div class="w-[140px] h-full bg-white rounded border border-[#0000001f] flex justify-center items-center">
				<button class="w-5 h-full flex items-center px-2.5 box-content">-</button>
				<span class="w-[50px] h-full flex items-center justify-center">
					<span class="w-[50px] h-[30px] bg-[#00000014] rounded flex items-center justify-center">
						<p>Aa</p>
					</span>
				</span>
				<button class="w-5 h-full flex items-center px-2.5 box-content">+</button>
			</div>
			<button class="w-[108px] h-full rounded bg-[#4372ff] flex items-center justify-center disabled:bg-[#0000001f]">
			    <span class="w-6 h-6 mr-2.5">
				    <svg class="w-full h-full disabled:fill-[#A6A6A6]" width="20" height="20" viewBox="0 0 24 25" fill="#ffffff" xmlns="http://www.w3.org/2000/svg"><path d="M19.5 9.42502C20.05 9.42502 20.5 8.9694 20.5 8.41252V7.40002C20.5 4.36252 18.97 2.33752 15.5 2.33752H8.5C4.97 2.33752 3.5 4.36252 3.5 7.40002V17.525C3.5 19.8675 4.378 21.6003 6.39398 22.2668C6.69562 22.3665 6.98896 22.1266 6.98786 21.809L6.98 19.55C6.98 17.8693 8.33 16.5125 9.98 16.5125H13.99C15.63 16.5125 16.98 17.8693 16.99 19.5298L17.0058 21.8109C17.0079 22.1279 17.3026 22.3646 17.6028 22.2626C19.5902 21.5871 20.5 19.8561 20.5 17.525V16.3404C20.5 15.8038 20.29 15.2874 19.91 14.9026L19.09 14.0724C18.71 13.6876 18.5 13.1713 18.5 12.6346V10.4375C18.5 9.88065 18.95 9.42502 19.5 9.42502ZM13.97 8.94915H7.97C7.56 8.94915 7.22 8.6049 7.22 8.18977C7.22 7.77465 7.56 7.4304 7.97 7.4304H13.97C14.38 7.4304 14.72 7.77465 14.72 8.18977C14.72 8.6049 14.39 8.94915 13.97 8.94915Z"></path><path d="M16.01 21.5574C16.0155 22.1135 15.5662 22.5673 15.01 22.5673H8.99333C8.44362 22.5673 7.99698 22.1236 7.99335 21.5739L7.97998 19.55C7.97998 18.4363 8.86998 17.525 9.97998 17.525H13.99C15.09 17.525 15.98 18.4261 15.99 19.5399L16.01 21.5574Z"></path></svg>
			    </span>
			    <span class="text-white">Save</span>
		   </button>
			<button class="w-[214px] h-full rounded bg-[#50af81] flex items-center justify-center">
			    <span class="w-6 h-6 mr-2.5">
				    <img class="w-full h-full" src="../assets/dowlandCv.svg">
			    </span>
			    <span class="text-white">DOWNLOAD MY CV</span>
		   </button>
		</div>
	</div>
</template>

<script setup>
//	import grid from './assets/grid';
</script>