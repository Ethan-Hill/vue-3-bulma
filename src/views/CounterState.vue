<template>
  <div id="app">
    <Counter :count="count" />
    <br />
    <button class="button is-primary" @click="increaseCount">Increase</button>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
import Counter from "@/components/Counter";

// Defineing the store
const store = useStore();

// Defineing the count from the store
const count = computed(() => store.state.count);

// Defineing the store action to increment the counter
const increaseCount = () => store.dispatch("increment");
</script>
