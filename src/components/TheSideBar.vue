<template>
	<aside class="hidden xl:block w-[111px] h-screen bg-[#9fb1db]" ref="container">
		<div class="h-[70px] w-full"></div>
		<div class="w-full max-h-[80vh] flex flex-col" ref="parent">
			<button class="w-full h-10 bg-[#9fb1db] flex-none" v-show="currentHeight" @click="sectionScroll(10)" >
			    <svg class="w-6 h-6 mx-auto" :class="{'invisible': status.firstPosition}" fill="#e7ebf6" viewBox="0 0 24 24">
			    	<path d="m12 8-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"></path>
			    </svg>
		    </button>
			<div class="w-full h-auto overflow-y-auto overflow-x-hidden sideNav" ref="sideList">
			    <ul class="w-full  flex flex-col items-center gap-y-[5px]" ref="list" >
				    <li class="sideBarList group" :class="{'bg-[#e7ecf9]': currentStep == 0}" ref="itemOne" @click="goToSection(0)">
					<span >
						<svg class="group-hover:fill-[#4372FF]" :class="{'fill-[#4372FF]': currentStep == 0}" width="24" height="24" viewBox="0 0 24 24" fill="#ffffff" xmlns="http://www.w3.org/2000/svg" ><path d="M22 12C22 6.49 17.51 2 12 2C6.49 2 2 6.49 2 12C2 14.9 3.25 17.51 5.23 19.34C5.23 19.35 5.23 19.35 5.22 19.36C5.32 19.46 5.44 19.54 5.54 19.63C5.6 19.68 5.65 19.73 5.71 19.77C5.89 19.92 6.09 20.06 6.28 20.2C6.35 20.25 6.41 20.29 6.48 20.34C6.67 20.47 6.87 20.59 7.08 20.7C7.15 20.74 7.23 20.79 7.3 20.83C7.5 20.94 7.71 21.04 7.93 21.13C8.01 21.17 8.09 21.21 8.17 21.24C8.39 21.33 8.61 21.41 8.83 21.48C8.91 21.51 8.99 21.54 9.07 21.56C9.31 21.63 9.55 21.69 9.79 21.75C9.86 21.77 9.93 21.79 10.01 21.8C10.29 21.86 10.57 21.9 10.86 21.93C10.9 21.93 10.94 21.94 10.98 21.95C11.32 21.98 11.66 22 12 22C12.34 22 12.68 21.98 13.01 21.95C13.05 21.95 13.09 21.94 13.13 21.93C13.42 21.9 13.7 21.86 13.98 21.8C14.05 21.79 14.12 21.76 14.2 21.75C14.44 21.69 14.69 21.64 14.92 21.56C15 21.53 15.08 21.5 15.16 21.48C15.38 21.4 15.61 21.33 15.82 21.24C15.9 21.21 15.98 21.17 16.06 21.13C16.27 21.04 16.48 20.94 16.69 20.83C16.77 20.79 16.84 20.74 16.91 20.7C17.11 20.58 17.31 20.47 17.51 20.34C17.58 20.3 17.64 20.25 17.71 20.2C17.91 20.06 18.1 19.92 18.28 19.77C18.34 19.72 18.39 19.67 18.45 19.63C18.56 19.54 18.67 19.45 18.77 19.36C18.77 19.35 18.77 19.35 18.76 19.34C20.75 17.51 22 14.9 22 12ZM16.94 16.97C14.23 15.15 9.79 15.15 7.06 16.97C6.62 17.26 6.26 17.6 5.96 17.97C4.44 16.43 3.5 14.32 3.5 12C3.5 7.31 7.31 3.5 12 3.5C16.69 3.5 20.5 7.31 20.5 12C20.5 14.32 19.56 16.43 18.04 17.97C17.75 17.6 17.38 17.26 16.94 16.97Z"></path><path d="M12 6.93005C9.93 6.93005 8.25 8.61005 8.25 10.6801C8.25 12.7101 9.84 14.3601 11.95 14.4201C11.98 14.4201 12.02 14.4201 12.04 14.4201C12.06 14.4201 12.09 14.4201 12.11 14.4201C12.12 14.4201 12.13 14.4201 12.13 14.4201C14.15 14.3501 15.74 12.7101 15.75 10.6801C15.75 8.61005 14.07 6.93005 12 6.93005Z"></path></svg>
					</span>
					<span class="group-hover:text-[#4372FF] text-center" :class="[currentStep == 0 ? 'text-black': 'text-white']">Detail</span>
				    </li>
				    <li class="sideBarList group" :class="{'bg-[#e7ecf9]': currentStep == 1}" @click="goToSection(1)">
					<span >
						<svg class="group-hover:fill-[#4372FF]" :class="{'fill-[#4372FF]': currentStep == 1}"  width="24" height="24" viewBox="0 0 24 24" fill="#ffffff" xmlns="http://www.w3.org/2000/svg"><path d="M21 5.25H14C13.59 5.25 13.25 4.91 13.25 4.5C13.25 4.09 13.59 3.75 14 3.75H21C21.41 3.75 21.75 4.09 21.75 4.5C21.75 4.91 21.41 5.25 21 5.25Z"></path><path d="M21 10.25H14C13.59 10.25 13.25 9.91 13.25 9.5C13.25 9.09 13.59 8.75 14 8.75H21C21.41 8.75 21.75 9.09 21.75 9.5C21.75 9.91 21.41 10.25 21 10.25Z"></path><path d="M21 15.25H3C2.59 15.25 2.25 14.91 2.25 14.5C2.25 14.09 2.59 13.75 3 13.75H21C21.41 13.75 21.75 14.09 21.75 14.5C21.75 14.91 21.41 15.25 21 15.25Z"></path><path d="M21 20.25H3C2.59 20.25 2.25 19.91 2.25 19.5C2.25 19.09 2.59 18.75 3 18.75H21C21.41 18.75 21.75 19.09 21.75 19.5C21.75 19.91 21.41 20.25 21 20.25Z"></path><path d="M7.92 3.5H5.08C3.68 3.5 3 4.18 3 5.58V8.43C3 9.83 3.68 10.51 5.08 10.51H7.93C9.33 10.51 10.01 9.83 10.01 8.43V5.58C10 4.18 9.32 3.5 7.92 3.5Z"></path></svg>
					</span>
					<span class="group-hover:text-[#4372FF] text-center" :class="[currentStep == 1 ? 'text-black': 'text-white']">Summary</span>
				    </li>
				    <li class="sideBarList group" :class="{'bg-[#e7ecf9]': currentStep == 2}" @click="goToSection(2)">
					<span >
						<svg class="group-hover:fill-[#4372FF]" :class="{'fill-[#4372FF]': currentStep == 2}"  width="24" height="24" viewBox="0 0 24 24" fill="#ffffff" xmlns="http://www.w3.org/2000/svg"><path d="M21.09 6.98002C20.24 6.04002 18.82 5.57002 16.76 5.57002H16.52V5.53002C16.52 3.85002 16.52 1.77002 12.76 1.77002H11.24C7.48001 1.77002 7.48001 3.86002 7.48001 5.53002V5.58002H7.24001C5.17001 5.58002 3.76001 6.05002 2.91001 6.99002C1.92001 8.09002 1.95001 9.57002 2.05001 10.58L2.06001 10.65L2.13746 11.4633C2.15173 11.6131 2.23239 11.7484 2.35828 11.8307C2.59809 11.9877 2.99943 12.2464 3.24001 12.38C3.38001 12.47 3.53001 12.55 3.68001 12.63C5.39001 13.57 7.27001 14.2 9.18001 14.51C9.27001 15.45 9.68001 16.55 11.87 16.55C14.06 16.55 14.49 15.46 14.56 14.49C16.6 14.16 18.57 13.45 20.35 12.41C20.41 12.38 20.45 12.35 20.5 12.32C20.8967 12.0958 21.3083 11.8195 21.6835 11.5489C21.7965 11.4673 21.8688 11.3413 21.8841 11.2028L21.9 11.06L21.95 10.59C21.96 10.53 21.96 10.48 21.97 10.41C22.05 9.40002 22.03 8.02002 21.09 6.98002ZM13.09 13.83C13.09 14.89 13.09 15.05 11.86 15.05C10.63 15.05 10.63 14.86 10.63 13.84V12.58H13.09V13.83ZM8.91001 5.57002V5.53002C8.91001 3.83002 8.91001 3.20002 11.24 3.20002H12.76C15.09 3.20002 15.09 3.84002 15.09 5.53002V5.58002H8.91001V5.57002Z"></path><path d="M20.8735 13.7341C21.2271 13.5659 21.6343 13.8462 21.5989 14.2361L21.24 18.19C21.03 20.19 20.21 22.23 15.81 22.23H8.19C3.79 22.23 2.97 20.19 2.76 18.2L2.41928 14.4521C2.38424 14.0667 2.7822 13.7867 3.13484 13.9463C4.27425 14.4618 6.37739 15.3764 7.67656 15.7166C7.84087 15.7597 7.97377 15.8773 8.04571 16.0311C8.65268 17.3292 9.96911 18.02 11.87 18.02C13.7521 18.02 15.0852 17.3026 15.6941 16.0013C15.7662 15.8474 15.8992 15.7298 16.0636 15.6865C17.4432 15.3235 19.6818 14.3012 20.8735 13.7341Z"></path></svg>
					</span>
					<span class="group-hover:text-[#4372FF] text-center" :class="[currentStep == 2 ? 'text-black': 'text-white']">Experiences</span>
				    </li>
				    <li class="sideBarList group" :class="{'bg-[#e7ecf9]': currentStep == 3}" @click="goToSection(3)">
					<span>
						<svg class="group-hover:fill-[#4372FF]" :class="{'fill-[#4372FF]': currentStep == 3}"  width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#ffffff" ><path d="M16.83 15.64C17.5 15.2 18.38 15.68 18.38 16.48V17.77C18.38 19.04 17.39 20.4 16.2 20.8L13.01 21.86C12.45 22.05 11.54 22.05 10.99 21.86L7.8 20.8C6.6 20.4 5.62 19.04 5.62 17.77V16.47C5.62 15.68 6.5 15.2 7.16 15.63L9.22 16.97C10.01 17.5 11.01 17.76 12.01 17.76C13.01 17.76 14.01 17.5 14.8 16.97L16.83 15.64Z"></path><path d="M19.98 6.46006L13.99 2.53006C12.91 1.82006 11.13 1.82006 10.05 2.53006L4.02999 6.46006C2.09999 7.71006 2.09999 10.5401 4.02999 11.8001L5.62999 12.8401L10.05 15.7201C11.13 16.4301 12.91 16.4301 13.99 15.7201L18.38 12.8401L19.75 11.9401V15.0001C19.75 15.4101 20.09 15.7501 20.5 15.7501C20.91 15.7501 21.25 15.4101 21.25 15.0001V10.0801C21.65 8.79006 21.24 7.29006 19.98 6.46006Z"></path></svg>
					</span>
					<span class="group-hover:text-[#4372FF] text-center" :class="[currentStep == 3 ? 'text-black': 'text-white']">Education</span>
				    </li>
				    <li class="sideBarList group" :class="{'bg-[#e7ecf9]': currentStep == 4}" @click="goToSection(4)">
					<span >
						<svg class="group-hover:fill-[#4372FF]" :class="{'fill-[#4372FF]': currentStep == 4}"  width="24" height="24" viewBox="0 0 24 24" fill="#ffff" xmlns="http://www.w3.org/2000/svg" ><path d="M20 19.26H10.93C10.48 19.26 10.11 18.89 10.11 18.44C10.11 17.99 10.48 17.62 10.93 17.62H20C20.45 17.62 20.82 17.99 20.82 18.44C20.82 18.9 20.45 19.26 20 19.26Z"></path><path d="M20 12.97H10.93C10.48 12.97 10.11 12.6 10.11 12.15C10.11 11.7 10.48 11.33 10.93 11.33H20C20.45 11.33 20.82 11.7 20.82 12.15C20.82 12.6 20.45 12.97 20 12.97Z"></path><path d="M20 6.67003H10.93C10.48 6.67003 10.11 6.30003 10.11 5.85003C10.11 5.40003 10.48 5.03003 10.93 5.03003H20C20.45 5.03003 20.82 5.40003 20.82 5.85003C20.82 6.30003 20.45 6.67003 20 6.67003Z"></path><path d="M4.90999 8.03004C4.68999 8.03004 4.47999 7.94004 4.32999 7.79004L3.41999 6.88004C3.09999 6.56004 3.09999 6.04004 3.41999 5.72004C3.73999 5.40004 4.25999 5.40004 4.57999 5.72004L4.90999 6.05004L7.04999 3.91004C7.36999 3.59004 7.88999 3.59004 8.20999 3.91004C8.52999 4.23004 8.52999 4.75004 8.20999 5.07004L5.48999 7.79004C5.32999 7.94004 5.12999 8.03004 4.90999 8.03004Z"></path><path d="M4.90999 14.33C4.69999 14.33 4.48999 14.25 4.32999 14.09L3.41999 13.18C3.09999 12.86 3.09999 12.34 3.41999 12.02C3.73999 11.7 4.25999 11.7 4.57999 12.02L4.90999 12.35L7.04999 10.21C7.36999 9.88997 7.88999 9.88997 8.20999 10.21C8.52999 10.53 8.52999 11.05 8.20999 11.37L5.48999 14.09C5.32999 14.25 5.11999 14.33 4.90999 14.33Z"></path><path d="M4.90999 20.33C4.69999 20.33 4.48999 20.25 4.32999 20.09L3.41999 19.18C3.09999 18.86 3.09999 18.34 3.41999 18.02C3.73999 17.7 4.25999 17.7 4.57999 18.02L4.90999 18.35L7.04999 16.21C7.36999 15.89 7.88999 15.89 8.20999 16.21C8.52999 16.53 8.52999 17.05 8.20999 17.37L5.48999 20.09C5.32999 20.25 5.11999 20.33 4.90999 20.33Z"></path></svg>
					</span>
					<span class="group-hover:text-[#4372FF] text-center" :class="[currentStep == 4 ? 'text-black': 'text-white']">Skills</span>
				    </li>
				    <li class="sideBarList group" :class="{'bg-[#e7ecf9]': currentStep == 5}" @click="goToSection(5)">
					<span >
						<svg class="group-hover:fill-[#4372FF]" :class="{'fill-[#4372FF]': currentStep == 5}" width="24" height="24" viewBox="0 0 24 24" fill="#ffffff" xmlns="http://www.w3.org/2000/svg"><path d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM17 17.47C15.29 17.47 13.69 16.73 12.41 15.36C10.96 16.67 9.07 17.47 7 17.47C6.59 17.47 6.25 17.13 6.25 16.72C6.25 16.31 6.59 15.97 7 15.97C10.47 15.97 13.34 13.22 13.71 9.7H12H7.01C6.6 9.7 6.26 9.36 6.26 8.95C6.26 8.54 6.6 8.21 7.01 8.21H11.25V7.28C11.25 6.87 11.59 6.53 12 6.53C12.41 6.53 12.75 6.87 12.75 7.28V8.21H14.44C14.46 8.21 14.48 8.2 14.5 8.2C14.52 8.2 14.54 8.21 14.56 8.21H16.99C17.4 8.21 17.74 8.55 17.74 8.96C17.74 9.37 17.4 9.71 16.99 9.71H15.21C15.06 11.42 14.42 12.99 13.44 14.27C14.44 15.38 15.69 15.98 17 15.98C17.41 15.98 17.75 16.32 17.75 16.73C17.75 17.14 17.41 17.47 17 17.47Z"></path></svg>
					</span>
					<span class="group-hover:text-[#4372FF] text-center" :class="[currentStep == 5 ? 'text-black': 'text-white']">Languages</span>
				    </li>
				    <li class="sideBarList group" :class="{'bg-[#e7ecf9]': currentStep == 6}" ref="itemTwo" @click="goToSection(6)">
					<span >
						<svg class="group-hover:fill-[#4372FF]" :class="{'fill-[#4372FF]': currentStep == 6}"  width="24" height="24" viewBox="0 0 24 24" fill="#ffff" xmlns="http://www.w3.org/2000/svg" ><path d="M18.67 2H16.77C14.59 2 13.44 3.15 13.44 5.33V7.23C13.44 9.41 14.59 10.56 16.77 10.56H18.67C20.85 10.56 22 9.41 22 7.23V5.33C22 3.15 20.85 2 18.67 2Z"></path><path d="M7.24 13.4301H5.34C3.15 13.4301 2 14.5801 2 16.7601V18.6601C2 20.8501 3.15 22.0001 5.33 22.0001H7.23C9.41 22.0001 10.56 20.8501 10.56 18.6701V16.7701C10.57 14.5801 9.42 13.4301 7.24 13.4301Z"></path><path d="M6.29 10.58C8.6593 10.58 10.58 8.6593 10.58 6.29C10.58 3.9207 8.6593 2 6.29 2C3.9207 2 2 3.9207 2 6.29C2 8.6593 3.9207 10.58 6.29 10.58Z"></path><path d="M17.71 22C20.0793 22 22 20.0793 22 17.71C22 15.3407 20.0793 13.42 17.71 13.42C15.3407 13.42 13.42 15.3407 13.42 17.71C13.42 20.0793 15.3407 22 17.71 22Z"></path></svg>
					</span>
					<span class="group-hover:text-[#4372FF] text-center" :class="[currentStep == 6 ? 'text-black': 'text-white']">Interests</span>
				    </li>
		        </ul>
			</div> 
			<button class="w-full h-10 bg-[#9fb1db]" v-show="currentHeight">
			    <svg class="w-6 h-6 mx-auto transform rotate-180" :class="{'invisible': status.secondPostion}" fill="#e7ebf6" viewBox="0 0 24 24">
			    	<path d="m12 8-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"></path>
			    </svg>
		    </button>
		</div>
	</aside>
</template>

<script setup>
	import { ref, reactive, onMounted, computed, watch } from 'vue';
	import { useStore } from 'vuex';

	const store = useStore();


    // Chance Sections
	const currentStep = computed(() => store.getters.getCurrentStep);
	const goToSection = ( val ) => store.commit('setCurrentStep', val)

	//Side Bar Slider

	let sideList = ref(null);
    let list = ref(null);
	let itemOne = ref(null);
	let itemTwo = ref(null)
	let status = reactive({
		firstPosition: true,
		secondPostion: false,
	})

	const parent = ref(null)

	const container = ref(null);
	const currentHeight = ref(null);

	onMounted(() => {
		currentHeight.value = container.value.getBoundingClientRect().height < 720
		window.addEventListener("resize", (e) => currentHeight.value = e.target.innerHeight < 720)
		sideList.value.addEventListener('scroll', () => {
			let itemTOneTop = itemOne.value.getBoundingClientRect().top;
			let itemTwoTop = itemTwo.value.getBoundingClientRect().top;
			let parentHeight = parent.value.getBoundingClientRect().height;
			status.firstPosition = itemTOneTop > 100
			status.secondPostion = (parentHeight - itemTwoTop) > 30 
		})
	
	});

	const sectionScroll = () => list.value = !list.value
    
   watch(()  => currentStep.value, (v) => {
   	   list.value.children[v].scrollIntoView({ behavior: "smooth", block: "nearest", inline: "nearest" });
   })
    
	


</script>
