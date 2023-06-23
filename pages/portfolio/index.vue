<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PortfolioPage',

  data: () => ({
    portfolio: [] as any,
  }),

  async fetch () {
    this.portfolio =
      await this.$content(`${this.$i18n.locale}/portfolio`, { deep: true }).fetch();

    this.portfolio.sort((a, b) => Number(a.group) - Number(b.group));
  },
});
</script>

<template src="./index.html" />
<style src="./index.scss" lang="scss" scoped />
