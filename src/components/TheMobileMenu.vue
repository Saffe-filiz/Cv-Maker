<template>
	<div class="w-full h-full bg-white overflow-y-auto">
		<div class="">
			<ul>
			<li class="mobileMenuList"  @click="goToSection(0)">
				<span class="w-6 h-6 mr-8">
					<svg class="w-full h-full fill-brandColor" viewBox="0 0 24 24" ><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path></svg>
				</span>
				<span class="font-semibold text-m" :class="[currentStep == 0 ? 'text-brandColor': 'text-mobileColor']">Detail</span>
			</li>
			<li class="mobileMenuList"  @click="goToSection(1)">
				<span class="w-6 h-6 mr-8">
					<svg class="w-full h-full fill-brandColor" viewBox="0 0 24 24" ><path d="M11 6H9V4h2v2zm4-2h-2v2h2V4zM9 14h2v-2H9v2zm10-4V8h-2v2h2zm0 4v-2h-2v2h2zm-6 0h2v-2h-2v2zm6-10h-2v2h2V4zm-6 4V6h-2v2h2zm-6 2V8h2V6H7V4H5v16h2v-8h2v-2H7zm8 2h2v-2h-2v2zm-4-2v2h2v-2h-2zM9 8v2h2V8H9zm4 2h2V8h-2v2zm2-4v2h2V6h-2z"></path></svg>
				</span>
				<span class="font-semibold text-m" :class="[currentStep == 1 ? 'text-brandColor': 'text-mobileColor']">Summary</span>
			</li>
			<li class="mobileMenuList"  @click="goToSection(2)">
				<span class="w-6 h-6 mr-8">
					<svg class="w-full h-full fill-brandColor" viewBox="0 0 24 24"><path d="M10 16v-1H3.01L3 19c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2v-4h-7v1h-4zm10-9h-4.01V5l-2-2h-4l-2 2v2H4c-1.1 0-2 .9-2 2v3c0 1.11.89 2 2 2h6v-2h4v2h6c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zm-6 0h-4V5h4v2z"></path></svg>
				</span>
				<span class="font-semibold text-m" :class="[currentStep == 2 ? 'text-brandColor': 'text-mobileColor']">Experiences</span>
			</li>
			<li class="mobileMenuList"  @click="goToSection(3)">
				<span class="w-6 h-6 mr-8">
					<svg class="w-full h-full fill-brandColor" viewBox="0 0 24 24" ><path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3 1 9l11 6 9-4.91V17h2V9L12 3z"></path></svg>
				</span>
				<span class="font-semibold text-m" :class="[currentStep == 3 ? 'text-brandColor': 'text-mobileColor']">Education</span>
			</li>
			<li class="mobileMenuList"  @click="goToSection(4)">
				<span class="w-6 h-6 mr-8">
					<svg class="w-full h-full fill-brandColor" viewBox="0 0 24 24" ><path d="M2 17h2v.5H3v1h1v.5H2v1h3v-4H2v1zm1-9h1V4H2v1h1v3zm-1 3h1.8L2 13.1v.9h3v-1H3.2L5 10.9V10H2v1zm5-6v2h14V5H7zm0 14h14v-2H7v2zm0-6h14v-2H7v2z"></path></svg>
				</span>
				<span class="font-semibold text-m" :class="[currentStep == 4 ? 'text-brandColor': 'text-mobileColor']">Skills</span>
			</li>
			<li class="mobileMenuList"  @click="goToSection(5)">
				<span class="w-6 h-6 mr-8">
					<svg class="w-full h-full fill-brandColor" viewBox="0 0 24 24" ><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"></path></svg>
				</span>
				<span class="font-semibold text-m" :class="[currentStep == 5 ? 'text-brandColor': 'text-mobileColor']">Languages</span>
			</li>
			<li class="mobileMenuList"  @click="goToSection(6)">
				<span class="w-6 h-6 mr-8">
					<svg class="w-full h-full fill-brandColor" viewBox="0 0 24 24" ><path d="M20.5 11H19V7c0-1.1-.9-2-2-2h-4V3.5C13 2.12 11.88 1 10.5 1S8 2.12 8 3.5V5H4c-1.1 0-1.99.9-1.99 2v3.8H3.5c1.49 0 2.7 1.21 2.7 2.7s-1.21 2.7-2.7 2.7H2V20c0 1.1.9 2 2 2h3.8v-1.5c0-1.49 1.21-2.7 2.7-2.7 1.49 0 2.7 1.21 2.7 2.7V22H17c1.1 0 2-.9 2-2v-4h1.5c1.38 0 2.5-1.12 2.5-2.5S21.88 11 20.5 11z"></path></svg>
				</span>
				<span class="font-semibold text-m" :class="[currentStep == 6 ? 'text-brandColor': 'text-mobileColor']">Interests</span>
			</li>
		</ul>
		</div>
	</div>
</template>


<script setup>
	import { computed } from 'vue';
	import { useStore } from 'vuex';

	const store = useStore();

	const currentStep = computed(() => store.getters.getCurrentStep);
	const goToSection = ( val ) => {	
		    store.commit('setCurrentSection', val);
		    openMobileMenu();
		}

	const openMobileMenu = () => store.commit('openMobileMenu');	
</script>