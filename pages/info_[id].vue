<template>123 {{ num1 }}</template>

<script lang="ts">
import { ref } from "vue";
const route = useRoute();
const num = ref(route.params.id);
const num1 = ref(1);
</script>
