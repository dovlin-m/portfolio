<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MoleculesCardLocaleDropdown',

  data: () => ({
    active: false,
  }),

  computed: {
    menuLinks (): any {
      return this.$i18n.locales.map(item => item.code).reduce((prev, locale) => {
        const { query, params } = this.$route;
        const opts = { name: this.getRouteBaseName(), params, query };

        prev[locale] = this.localePath(opts, locale);
        return prev;
      }, {});
    },
  },

  beforeMount () {
    this.active = false;
    window.addEventListener('scroll', this.handleScroll);
    // eslint-disable-next-line no-return-assign
    const onClickOutside = e => this.active = this.$el.contains(e.target) && this.active;
    document.addEventListener('click', onClickOutside);
    this.$on('hook:beforeDestroy', () => document.removeEventListener('click', onClickOutside));
  },

  methods: {
    handleScroll () {
      this.active = false;
    },
  },
});
</script>

<template src="./LocaleDropdown.html" />
<style src="./LocaleDropdown.scss" lang="scss" scoped />
