<template>
  <div>
    <h3>Remote 1</h3>
    <p>Count: {{ count }}</p>
    <button @click="count++">increment</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const count = ref(0);
</script>

