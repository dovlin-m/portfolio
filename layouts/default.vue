<template>
  <main class="gray">
    <organisms-header />

    <nuxt />

    <organisms-footer />
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'DefaultLayouts',
});
</script>

<style lang="scss">
</style>
