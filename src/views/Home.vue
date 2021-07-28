<template>
  <h1>{{ x }} {{ y }}</h1>
</template>

<script Setup>
// @ is an alias to /src

import { useMouse } from "@vueuse/core";

export default {
  name: "Home",
  setup() {
    const { x, y } = useMouse();

    return {
      x,
      y,
    };
  },
};
</script>
