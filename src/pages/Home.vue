<template>
    <div class="container">
       <div class="home">
            <Catalog />
            <Main />
            <Cart />
       </div>
    </div>
</template>

<script setup>
import Cart from '@/components/Cart.vue';
import Catalog from '@/components/Catalog.vue';
import Main from '@/components/Main.vue';
</script>

<style lang="scss" scoped>
    .home {
        display: flex; 
        gap: 50px;

    }
</style>