<template>
    <Home />
</template>

<script setup>
import { defineAsyncComponent } from 'vue';

const Home = defineAsyncComponent({
    loader: () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(import('../../components/Home/Home.vue'))
            }, 200);

        });
    },
})
</script>

<style lang="scss" scoped>

</style>