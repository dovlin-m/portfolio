<template>
  <div class="pt-header">
    <div class="me py-8 py-sm-12 py-lg-16">
      <div class="container">
        <atoms-grid-row>
          <img class="main-img col-sm-6 shadow rounded-4" :src="require('~/assets/images/about/main.jpeg?webp')" width="100%">

          <div class="d-flex flex-column align-items-center jc-center col-sm-6 pa-4 pa-sm-6 pa-lg-8">
            <h1 class="mb-0" v-text="$t('pages.about.title')" />
            <h4 class="mb-0" v-text="$t('pages.about.subtitle')" />
          </div>
        </atoms-grid-row>
      </div>
    </div>

    <div class="about py-8 py-sm-12 py-lg-16">
      <div class="container">
        <atoms-grid-row>
          <div class="col-sm-7 pa-2 pa-sm-4 pa-lg-8">
            <h2 class="text-white" v-text="'Обо мне'" />

            <p class="text-lead text-white mb-0" v-text="'какой-то важный текст'" />
          </div>

          <div class="col-sm-5">
            <img class="main-img shadow rounded-4" :src="require('~/assets/images/about/main_2.jpeg?webp')" width="100%">
          </div>
        </atoms-grid-row>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'IndexPage',
});
</script>

<style lang="scss">
.about {
  background: #2F4529;
}

.img-box {
  overflow: hidden;
}
</style>
