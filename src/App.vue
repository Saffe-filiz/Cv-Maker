<template>
    <SideBar/>
        <div class="w-full h-full flex flex-col flex-shrink  bg-blue-200">
            <TopBar/>
            <Form/>
            <BottonBar/>
        </div>
</template>


<script setup lang="ts">
  import SideBar from './components/TheSideBar.vue';
  import BottonBar from './components/TheBottonBar.vue';
  import TopBar from './components/TheTopBar.vue';
  import Form from './components/TheForm.vue';

</script>