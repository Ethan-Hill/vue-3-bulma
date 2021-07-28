<template>
  <h1>You have clicked the button {{ count }}</h1>
</template>

<script setup>
import { defineProps } from "vue";

// Defineing the count variable from the passed parent props
defineProps({
  count: Number,
});
</script>
