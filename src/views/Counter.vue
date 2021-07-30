<template>
  <div id="app">
    <Counter :count="count" />
    <br />
    <button class="button is-primary" @click="increaseCount">Increase</button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Counter from "@/components/Counter";

// Defining the variable state for the count
const count = ref(0);

// Defining the function to increment the counter
const increaseCount = () => count.value++;
</script>
