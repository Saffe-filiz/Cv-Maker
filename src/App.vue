<template>
    <SideBar/>
        <div class="w-full h-auto xl:h-[calc(100vh_-_70px) flex justify-between flex-col overflow-hidden">
            <TopBar/>
            <div class="w-full h-[calc(100%_-_126px)] xl:h-[calc(100%_-_70px)] flex flex-row ">
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
    import { computed } from 'vue';
    import { useStore } from 'vuex';

    const store = useStore();

    const openMobile = computed(() => store.getters.getMobileMenu);

</script>