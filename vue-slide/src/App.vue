<script setup>
import { ref } from 'vue';
import { RouterView } from 'vue-router';
import Nav from './components/Nav.vue';

const count = ref(0);

</script>

<template>
  <div>
    <Nav />
    <button @click="count++">count is : {{ count }}</button>

  <main>
    <RouterView />
  </main>
  </div>
</template>