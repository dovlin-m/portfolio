<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';

@Component({
  name: 'atoms-dropdown-box',
})

export default class AtomsDropdownBox extends Vue {
  @Prop({ default: false }) active!: boolean;
}
</script>

<template src="./DropdownBox.html" />
<style src="./DropdownBox.scss" lang="scss" scoped />
