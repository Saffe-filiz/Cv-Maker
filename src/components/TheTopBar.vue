<template>
	<div class="w-auto h-auto">
		<div class="flex w-full h-16 xl:h-[70px] bg-white px-6 justify-end xl:justify-between items-center xl:border-b xl:border-b-borderColor">
		<div class="w-auto h-[47px] hidden xl:flex items-center">
			<button class="w-auto h-[45px] px-6 flex items-center justify-center bg-[#4372ff] rounded">
				<span class="mr-2.5 w-6 h-6">
					<img class="w-full h-full" src="../assets/grid.svg">
				</span>
				<p class="text-white">CV models</p>
			</button>
			<div class="w-[248px] h-[45px] flex items-center justify-between border border-borderColor rounded mx-4 focus-within:border-[#4372FF] hover:border-black hover:focus-within:border-[#4372FF]">
				<input class="w-full h-full bg-white outline-0 pl-3.5 rounded" 
				type="text" name="cv name"  @input="setName" :value="name">
				<span class="w-[21.3px] h-[21.3px] mr-3.5">
					<img class="w-full h-full" src="../assets/pen.svg">
				</span>
			</div>
			<button class="w-[70px] h-full flex items-center justify-center  border border-[#4372FF] rounded" @click="reset()">
				<span class="w-5 h-5">
					<img class="w-full h-full" src="../assets/refresh.svg">
				</span>
			</button>
		</div>
		<div class="w-[653px] h-[47px] flex justify-end xl:justify-between">
			<div class="w-[134px] h-full rounded hidden xl:flex items-center items-center border border-borderColor ">
				<span class="w-9 h-full flex items-center justify-center bg-[#f5f5f5]">
					<img class="w-5 h-7" src="../assets/colors.svg">
				</span>
				<div class="w-auto h-full bg-white flex items-center pl-3.5 relative cursor-pointer" 
				@click="openColorMenu = !openColorMenu">
					<div class="w-12 h-7 rounded border-2" :style="{borderColor: customeColor}" >
						<div class="w-full h-full border border-white rounded flex items-center justify-center" 
						:style="{ backgroundColor: customeColor}">
							<span class="text-lg font-bold text-white">&#10003</span>
						</div>
					</div>
					<span class="w-6 h-6 transform" 
					:class="{'rotate-180': openColorMenu}">
						<svg viewBox="0 0 24 24" fill="#757575" ><path d="M7 10l5 5 5-5z"></path></svg>
					</span>
					<div class="w-24 h-56 bg-white absolute top-full mt-2 rounded shadow-menu -left-0 z-20 pt-2 transition duration-200 transform -translate-y-4 opacity-0 pointer-events-none" 
					:class="{ '-translate-y-0 opacity-100  pointer-events-auto' :openColorMenu}">
						<ul>
							<li v-for="(color, index) in colors" 
							:key="index" class="flex  py-1.5 ml-4"
							 @click="chanceCustomeColor(index)">
								<div class="w-12 h-7 rounded border-2" 
								:style="{borderColor: color}">
						            <div class="w-full h-full flex items-center justify-center" 
						            :class="{'border border-white': currentColorIndex == index}" 
						            :style="{ backgroundColor: color}">
						            	<span v-show="currentColorIndex == index" 
						            	class="text-lg font-bold text-white">&#10003</span>
						            </div>
					            </div>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div class="w-[140px] h-full bg-white rounded border border-borderColor hidden xl:flex justify-center items-center">
				<button class="w-5 h-full flex items-center px-2.5 box-content" :disabled="currentFontSize == 0" @click="setCustomeFontSize(-1)">-</button>
				<span class="w-[50px] h-full flex items-center justify-center">
					<span class="w-[50px] h-[30px] bg-[#00000014] rounded flex items-center justify-center">
						<p :style="{fontSize: getFontSize}">Aa</p>
					</span>
				</span>
				<button class="w-5 h-full flex items-center px-2.5 box-content" :disabled="currentFontSize == 2" @click="setCustomeFontSize(+1)">+</button>
			</div>
			<button class="w-[108px] h-full rounded bg-[#4372ff] hidden xl:flex items-center justify-center disabled:bg-borderColor" 
			:disabled="isSaved" 
			@click="saveChanges()">
			    <span class="w-6 h-6 mr-2.5">
				    <svg class="w-full h-full disabled:fill-[#A6A6A6]" width="20" height="20" viewBox="0 0 24 25" fill="#ffffff" xmlns="http://www.w3.org/2000/svg"><path d="M19.5 9.42502C20.05 9.42502 20.5 8.9694 20.5 8.41252V7.40002C20.5 4.36252 18.97 2.33752 15.5 2.33752H8.5C4.97 2.33752 3.5 4.36252 3.5 7.40002V17.525C3.5 19.8675 4.378 21.6003 6.39398 22.2668C6.69562 22.3665 6.98896 22.1266 6.98786 21.809L6.98 19.55C6.98 17.8693 8.33 16.5125 9.98 16.5125H13.99C15.63 16.5125 16.98 17.8693 16.99 19.5298L17.0058 21.8109C17.0079 22.1279 17.3026 22.3646 17.6028 22.2626C19.5902 21.5871 20.5 19.8561 20.5 17.525V16.3404C20.5 15.8038 20.29 15.2874 19.91 14.9026L19.09 14.0724C18.71 13.6876 18.5 13.1713 18.5 12.6346V10.4375C18.5 9.88065 18.95 9.42502 19.5 9.42502ZM13.97 8.94915H7.97C7.56 8.94915 7.22 8.6049 7.22 8.18977C7.22 7.77465 7.56 7.4304 7.97 7.4304H13.97C14.38 7.4304 14.72 7.77465 14.72 8.18977C14.72 8.6049 14.39 8.94915 13.97 8.94915Z"></path><path d="M16.01 21.5574C16.0155 22.1135 15.5662 22.5673 15.01 22.5673H8.99333C8.44362 22.5673 7.99698 22.1236 7.99335 21.5739L7.97998 19.55C7.97998 18.4363 8.86998 17.525 9.97998 17.525H13.99C15.09 17.525 15.98 18.4261 15.99 19.5399L16.01 21.5574Z"></path></svg>
			    </span>
			    <span class="text-white">{{isSaved ? 'Saved': 'Save'}}</span>
		   </button>
			<button class="w-[173px] h-[41px] xl:w-[214px] xl:h-full rounded bg-[#50af81] flex items-center justify-center">
			    <span class="w-6 h-6 mr-1 xl:mr-2.5">
				    <img class="w-full h-full" src="../assets/dowlandCv.svg">
			    </span>
			    <span class="text-white text-xs xl:text-base">DOWNLOAD MY CV</span>
		   </button>
		</div>
	</div>
	<div class="w-full h-16 xl:hidden bg-white px-6 flex justify-start items-center border-b border-b-borderColor">
		<div class="w-24 h-10  flex items-center" @click="openMobileMenu" >
			<span class="w-10 h-10 flex items-center justify-center transform transition duration-200" :class="{'rotate-180': iconTransition}">
				<svg class="w-6 h-6" fill="#0000008a" viewBox="0 0 24 24"><path d="m12 8-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"></path></svg>
			</span>
			<h2 class="text-m font-bold">{{sectionNames[currentSection]}}</h2>
		</div>
	</div>
	</div>
</template>

<script setup>
    import MobileMenu from './TheMobileMenu.vue';
	import { ref, computed, onMounted } from 'vue';
	import { useStore } from 'vuex';

	const store = useStore();
    let localeData = ref();
    const getCvData = computed(() => store.getters.getCvData)

    // Reset Cv Data 
    const reset = () => store.commit('resetCvData');
    
    //Save Cv Data
	const saveChanges = () => {
	    store.commit('saveChanges');
	    localeData.value = localStorage.getItem('savedData')
	}
	const isSaved = computed(() =>  localeData.value == JSON.stringify(getCvData.value));

	// Set Section

	const sectionNames = ['Details', 'Summary', 'Experiences', 'Education', 'Skills', 'Languages', 'Interests'];
	const currentSection = computed(() => store.getters.getCurrentStep);
	
	// Open The Mobile Menu 
	const iconTransition = computed(() => store.getters.getMobileMenu)
	const openMobileMenu = () => store.commit('openMobileMenu');
    

    // Set Cv Name
    let currentName = ref('')
    const name = computed(() => store.getters.getName);

    const setName = (event) => {
    	currentName.value = event.target.value
    	store.commit('setName', currentName)
    };

    // Set Custome Font Size
    let currentFontSize = ref(1)
    const getFontSize = computed(() => store.getters.getFontSize);
    const setCustomeFontSize = (index) => {
    	currentFontSize.value += index
    	store.commit('setFontSize', currentFontSize.value)
    };

    // Set Custome Color
    const colors = ['#3870b1', '#c0392b', '#50e3c2', '#676767', '#000000'];
    let openColorMenu = ref(false);
    let currentColorIndex = ref(0)

	const chanceCustomeColor = (index = 0)  => {
		currentColorIndex.value = index
		store.commit('setCostumColor', colors[index])
	}
	const customeColor = computed(() => store.getters.getCustomColor);


	const dataIsExist = () => {
		if(!localStorage.getItem('savedData')){
			saveChanges()
		}else {
			store.commit('setCvData', JSON.parse(localStorage.getItem('savedData')) )
		}
	}

	onMounted(() => {
		chanceCustomeColor()
		dataIsExist()
	});

</script>