<template>
	<div class="w-full h-full flex flex-col overflow-hidden">
		<div class="w-full min-h-[calc(100%_-_136px)] h-auto xl:min-h-[calc(100%_-_106px)] overflow-auto">
			<MobileMenu v-show="openMobileMenu"/>
			<div class="py-6 px-4 xl:py-2 xl:px-8" v-show="!openMobileMenu">
				<div v-if="step == 0">
					<div class="w-full h-20 pt-6 flex items-center text-xl font-bold hidden xl:block">
			           <h2>Personal details</h2>
		            </div>
					<div class="flex flex-row mb-5">
						<div class="w-48 h-44 bg-blue-100 mr-5 flex items-center justify-between ">
							img
						</div>
						<div class="w-[calc(100%_-_200px)] flex flex-col gap-y-2">
							<div class="flex flex-col rounded bg-transparent">
	                            <label>First Name</label>
	                            <input type="text" name="name" class="inputStyle" autocomplete="off" placeholder="Bob" v-model="idantity.first_name">
	                        </div>
	                        <div class="flex flex-col rounded bg-transparent">
	                            <label>Surename</label>
	                            <input type="text" name="surename" class="inputStyle"  autocomplete="off" placeholder="Marley" v-model="idantity.last_name"
	                            >
	                        </div>
						</div>
					</div>
            	    <div class="w-full h-auto flex flex-col gap-y-4">
            	  	    <div class="flex flex-col rounded bg-transparent">
	                        <label>Email</label>
	                        <input type="text" name="email" class="inputStyle"  autocomplete="off" placeholder="Email" v-model="idantity.email">
	                    </div>
	                    <div class="flex flex-col rounded bg-transparent">
	                        <label>Adress</label>
	                        <input type="text" name="adress" class="inputStyle"  autocomplete="off" placeholder="15 Russell Rd, SHIPHAM BS25 6LF, United Kingdom" v-model="idantity.address">
	                    </div>
	                    <div class="flex flex-col rounded bg-transparent">
	                        <label>Phone</label>
	                        <input type="tel" name="phone" class="inputStyle"  autocomplete="off" placeholder="+44 79 4292 7473" v-model="idantity.phone">
	                    </div>
            	    </div>
                </div>
                <div v-else-if="step == 1">
            	   <div class="w-full h-20 pt-6 flex items-center text-xl font-bold hidden xl:block">
			           <h2>Summary</h2>
		            </div>
		            <div class="w-full h-auto">
		            	<p>Write 2-4 short & energetic sentences to interest the reader! Mention your role, experience & most importantly - your biggest achievements, best qualities and skills</p>
		            </div>
                </div>
                <div v-else-if="step == 2" class="flex flex-col">
                	<div class="w-full h-20 pt-6 flex items-center text-xl font-bold hidden xl:block">
			           <h2>Potition</h2>
		            </div>
            	    <!--<List :name="'experiences'"  :data="data.experiences"/>-->
            	    <div class="w-full h-auto flex flex-col sm:flex-row  gap-2 mb-5">
            	    	<div class="w-full inline-flex flex-col rounded bg-transparent">
	                        <label>Position</label>
	                        <input type="text" name="position" class="inputStyle"  autocomplete="off" placeholder="Product Manager" >
	                    </div>
	                    <div class="w-full inline-flex flex-col rounded bg-transparent">
	                        <label>Company</label>
	                         <input type="text" name="company" class="inputStyle"  autocomplete="off" placeholder="Deliveroo">
	                    </div>
            	    </div>
            	     <div class="w-full inline-flex flex-col rounded bg-transparent mb-5">
	                    <label>Location</label>
	                    <input type="text" name="location" class="inputStyle"  autocomplete="off" placeholder="Location">
	                </div>
	                <div class="w-full mb-4">Current position</div>
	                 <div class="w-full h-auto flex flex-col sm:flex-row  gap-2">
            	    	<div class="w-full inline-flex flex-col rounded bg-transparent">
	                        <label>Position</label>
	                        <input type="date" name="position" class="inputStyle"  autocomplete="off" placeholder="10/2021" >
	                    </div>
	                    <div class="w-full inline-flex flex-col rounded bg-transparent">
	                        <label>Company</label>
	                         <input type="date" name="company" class="inputStyle"  autocomplete="off" placeholder="10/2022">
	                    </div>
            	    </div>
            	      <div class="w-full h-14  mt-6 flex gap-x-3">
            	    	<button class="h-10 px-6 bg-brandColor rounded bg-brandColor text-white shadow-form" @click="updateIdantity">OK</button>
            	    	<button class="h-10 px-6 bg-white rounded text-brandColor shadow-form">Delet</button>
            	    </div>
                </div>
                <div v-else-if="step == 3" class="flex flex-col">
                	<div class="w-full h-20 pt-6 flex items-center text-xl font-bold hidden xl:block">
			           <h2>Education</h2>
		            </div>
            	    <!--<List :name="'formations'" :data="data.formations"/>-->
            	    <div class="w-full h-auto flex flex-col sm:flex-row  gap-2 mb-5">
            	    	<div class="w-full inline-flex flex-col rounded bg-transparent">
	                        <label>Name of the institution</label>
	                        <input type="text" name="nameOfInstitution" class="inputStyle"  autocomplete="off" placeholder="University of Bristol" >
	                    </div>
	                    <div class="w-full inline-flex flex-col rounded bg-transparent">
	                        <label>Degree</label>
	                         <input type="text" name="degree" class="inputStyle"  autocomplete="off" placeholder="BSc Marketing">
	                    </div>
            	    </div>
            	    <div class="w-full">Not obtained yet</div>
            	     <div class="w-full h-auto flex flex-col sm:flex-row  gap-2 mb-5">
            	    	<div class="w-full inline-flex flex-col rounded bg-transparent">
	                        <label>Location</label>
	                        <input type="text" name="Location" class="inputStyle"  autocomplete="off" placeholder="Bristol" >
	                    </div>
	                    <div class="w-full inline-flex flex-col rounded bg-transparent">
	                        <label>Graduation year</label>
	                         <input type="date" class="inputStyle" autocomplete="off" placeholder="yyy" value="2023">
	                    </div>
            	    </div>

            	      <div class="w-full h-14  mt-6 flex gap-x-3">
            	    	<button class="h-10 px-6 bg-brandColor rounded bg-brandColor text-white shadow-form" @click="updateIdantity">OK</button>
            	    	<button class="h-10 px-6 bg-white rounded text-brandColor shadow-form">Delet</button>
            	    </div>
                </div>
                <div v-else-if="step == 4" class="flex flex-col">
                	<div class="w-full h-20 pt-6 flex items-center text-xl font-bold hidden xl:block">
			           <h2 v-if="currectForm[4]">Skill</h2>
			           <h2 v-else class="text-brandColor cursor-pointer" @click="currectForm[4] = true"> Skill</h2>
		            </div>
		            <List v-if="currectForm[4]" :name="'competencies'"  :data="data.competencies"/>
                    <div v-else>
                		<div class="w-full h-auto flex flex-col sm:flex-row  gap-2">
            	        <div class="w-full  inline-flex flex-col rounded bg-transparent">
	                        <label>Skill</label>
	                        <input type="text" name="phone" class="inputStyle"  autocomplete="off" placeholder="Project Manager">
	                    </div>
	                    <div class="w-full inline-flex flex-col rounded bg-transparent">
	                        <label>Level</label>
	                        <select class="inputStyle">
	                        	<option>Beginner</option>
	                        	<option>Intermediate</option>
	                        	<option>Advanced level</option>
	                        	<option>Expert</option>
	                        </select>
	                    </div>
            	    </div>
            	    <div class="w-full h-14  mt-6 flex gap-x-3">
            	    	<button class="h-10 px-6 bg-brandColor rounded bg-brandColor text-white shadow-form" @click="updateIdantity">OK</button>
            	    	<button class="h-10 px-6 bg-white rounded text-brandColor shadow-form">Delet</button>
            	    </div>
            	</div>
                </div>
                <div v-else-if="step == 5" class="flex flex-col">
                	<div class="w-full h-20 pt-6 flex items-center text-xl font-bold hidden xl:block">
			           <h2 v-if="currectForm[5]">Languages</h2>
			           <h2 v-else class="text-brandColor cursor-pointer" @click="currectForm[5] = true"> Languages</h2>
		            </div>
                  	<List :name="'languages'" :data="data.languages" v-if="currectForm[5]"/>
                  	<div  v-else>
                  		<div class="w-full h-auto flex flex-col sm:flex-row  gap-2">
                  	    <div class="w-full inline-flex flex-col rounded bg-transparent">
	                        <select class="inputStyle">
	                        	<option>Beginner</option>
	                        	<option>Intermediate</option>
	                        	<option>Advanced level</option>
	                        	<option>Expert</option>
	                        </select>
	                     </div>
            	    	<div class="w-full  inline-flex flex-col rounded bg-transparent">
	                        <input type="text" name="phone" class="inputStyle"  autocomplete="off" placeholder="Language">
	                    </div>
            	   </div>
            	    <div class="w-full h-14  mt-6 flex gap-x-3">
            	    	<button class="h-10 px-6 bg-brandColor rounded bg-brandColor text-white shadow-form" @click="updateIdantity">OK</button>
            	    	<button class="h-10 px-6 bg-white rounded text-brandColor shadow-form">Delet</button>
            	    </div>
                  	</div>
                </div>
                <div v-else-if="step == 6">
                	<div class="w-full h-20 pt-6 flex items-center text-xl font-bold hidden xl:block">
			           <h2>interests</h2>
		            </div>
            	    <!--<List :name="'interests'" :data="data.interests"/>-->
            	    <div class="w-6/12  inline-flex flex-col rounded bg-transparent">
	                    <label>Interest</label>
	                    <input type="text" name="phone" class="inputStyle"  autocomplete="off" placeholder="Interest">
	                </div>
                </div>
			</div>
       </div>
       	<div class="w-full bg-white  p-4 xl:p-8 border-t  border-borderColor">
			    <div class="w-full h-10 flex justify-between">
				    <button class="h-[38px] px-6 text-[#4372ff] bg-white border border-[#4372ff] rounded"
				    :class="{'invisible' : currentStep == 0}" :disabled="currentStep == 0" @click="goToSection(-1)">GO BACK</button>
				    <button class="h-[38px] px-6 text-white bg-[#4372ff] border border-[#4372ff] rounded shadow-[0px_4px_7px_0px_rgba(67,114,255,0.3)]"
				    :class="{'invisible' : currentStep == 6}" :disabled="currentStep == 6" @click="goToSection(+1)">NEXT</button>
			    </div>
		    </div>
       	<BottonBar/>
	</div>
</template>

<script setup>
    import BottonBar from './TheBottonBar.vue';
	import MobileMenu from './TheMobileMenu.vue';
	import List from './List.vue';

	import { useStore } from 'vuex';
	import { computed, ref, watch, reactive, onMounted } from 'vue';

	const store = useStore();
	const openMobileMenu = computed(() => store.getters.getMobileMenu);
    
    let step = ref(0);
    let currectForm = reactive({
    	2: 0,
    	3: 0,
    	4: false,
    	5: false,
    	6: 0,

    })
    let currentStepName = ref('')

    let idantity = ref( {
		        address: '',
                checkbox1: false,
                driving_licence: '',
                email: '',
                first_name: '',
                last_name: '',
                phone: '',
	        })
    
    const updateIdantity = () => store.commit('setIdentity', idantity);

    onMounted(() => {
    	idantity.value = data.value.identity
    	console.log(idantity)
    })

    const data = computed(() =>  store.getters.getCvData)
	const currentStep = computed(() => store.getters.getCurrentStep);

	const goToSection = (val) => {
		step.value += val
	    store.commit('setCurrentStep', step.value)
	};



    //const addNew = () => store.commit('setNewData', dataName.value);

	watch(() => currentStep.value, (num) => step.value = num)


</script>