<script setup>
import { useRoute } from 'vue-router';
import products from "../data/products.json";

const route = useRoute();
const { owner } = products.find((p) => p.id == parseInt(route.params.id));
</script>

<template>
    <main>
        <div v-if="owner">
        <h1>owner</h1>
        <p>{{ owner.name }}</p>
        <p>{{ owner.email }}</p>
        </div>

        <div v-else>
            <h1>owner not found</h1>
        </div>
    </main>
</template>