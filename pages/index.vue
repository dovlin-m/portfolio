<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'IndexPage',

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

<template>
  <div class="container pt-header">
    <div class="my-8 my-sm-12 my-lg-16">
      <h1 v-text="$t('pages.portfolio.title')" />

      <div>
        <div
          v-for="({ title, date, slug, images }) in portfolio"
          :key="title"
          class="darker pa-2 pa-sm-4 pa-lg-6 mt-8"
        >
          <div class="d-flex align-items-center mb-6">
            <atoms-logo logo-min large class="mr-3 mr-sm-4" />

            <h2 class="text-gray mb-0" v-text="title" />
          </div>

          <div class="d-flex flex-wrap row-gap-4 column-gap-4">
            <molecules-card-image
              v-for="img in images"
              :key="img"
              :img="`${slug}/${img}`"
            />
          </div>

          <div class="d-flex jc-space-between align-items-center mt-4">
            <nuxt-link
              class="text-body text-muted"
              :to="localePath({ name: 'portfolio-slug', params: { slug } })"
              v-text="$t('links.detailed')"
            />

            <p class="text-small text-right text-muted" v-text="date" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.image {
  height: 350px;

  img {
    object-fit: cover;
    transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out, all 0.3s ease-in-out;
  }

  &.open {
    img {
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      overflow: auto;
      width: auto;
      height: 500px;
      z-index: 11111;
      margin: 100px auto;
      object-fit: contain;
    }
  }

  /*  .desc {
      position: absolute;
      background: rgba(255, 255, 255, 0.6);
      backdrop-filter: blur(16px);
      top: 100%;
      left: 0;
      right: 0;
      bottom: 0;
      opacity: 0;

      transition: all 0.3s;

      z-portfolio: -1;
    }*/
}

.projects {
  position: relative;
  height: 549px;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100px;
    transition: height 300ms;
    background: linear-gradient(
        180deg,
        rgba(255, 255, 255, 0) 0%,
        #e6eaf0 100%
    );
  }
}
</style>
