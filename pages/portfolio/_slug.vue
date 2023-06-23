<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PagePortfolioSlug',

  provide: () => ({
    page: [] as any,
  }),

  async asyncData ({ $content, i18n, route }) {
    console.log('route', route);
    const page = await $content(`${i18n.locale}/portfolio`, route.params.slug).fetch();
    console.log('page', page);

    return {
      page,
    };
  },

  data: () => ({
    portfolio: [] as any,
  }),

  mounted () {
    console.log('page', this.page);
  },
});
</script>

<template src="./_slug.html" />
<style src="./_slug.scss" lang="scss" scoped />
