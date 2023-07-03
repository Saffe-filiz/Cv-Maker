<template>
    <SideBar/>
        <div class="w-full h-full flex flex-col flex-shrink justify-between bg-blue-200">
            <TopBar/>
            <div class="w-full h-[calc(100vh_-_128px)] xl:h-[calc(100vh_-_70px)] flex flex-row">
                <Form/>
                <PreVewe/>
            </div>
         
        </div>
</template>


<script setup lang="ts">
  import SideBar from './components/TheSideBar.vue';
  import TopBar from './components/TheTopBar.vue';
  import Form from './components/TheForm.vue';
  import PreVewe from './components/ThePreVewe.vue';

</script>