<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <h1>{{ bitcoinStore.price }}</h1>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useBitcoinStore } from "./store/bitcoin";

const bitcoinStore = useBitcoinStore();

onMounted(async () => {
  await bitcoinStore.fetchBitcoinPrice();
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
