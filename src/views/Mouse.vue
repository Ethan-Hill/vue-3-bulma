<template>
  <div>
    <h1>Current mouse position</h1>
    <br />
    <h2>x: {{ x }} y: {{ y }}</h2>
  </div>
</template>

<script setup>
// Hook imported from vueuse
import { useMouse } from "@vueuse/core";

// Defineing the returned values
const { x, y } = useMouse();
</script>
