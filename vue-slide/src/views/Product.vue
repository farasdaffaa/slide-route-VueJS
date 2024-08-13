<script setup>
import { useRoute, useRouter, RouterView } from 'vue-router';
import products from "../data/products.json";

const route = useRoute();
const router = useRouter();
const productId = parseInt(route.params.id)

const product = products.find((product) => product.id === productId)

function showOwner() {
    router.push({name: "owner", params: { id: productId } })
}
</script>

<template>
    <main>
        <div v-if="product">
        <h1>Product</h1>
        {{ product }}
        <div>
            <h2>{{ product.id }} -- {{ product.name }}</h2>
            <h2>tahun: {{ product.tahun }}</h2>
            <h2>harga: {{ product.harga }}</h2>
        </div>
        <button @click="showOwner">Show Owner</button>

        <RouterView />
    </div>

    <div v-else>
        <h1>Product Not Found</h1>
    </div>
    </main>
</template>