import 'dotenv-defaults/config';

const dev: boolean = process.env.NODE_ENV !== 'production';
const baseUrl: string | undefined = dev ? process.env.BASE_URL : `http://${process.env.HOST}:${process.env.PORT}`;

const publicRuntimeConfig = {
  PORT: process.env.PORT,
  BASE_URL: baseUrl,
  META_NAME: process.env.META_NAME,
  SOCIALS_EMAIL: process.env.SOCIALS_EMAIL,
  SOCIALS_PHONE: process.env.SOCIALS_PHONE,
};

const head = {
  head: {
    title: process.env.META_TITLE,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'description', hid: 'description', content: process.env.META_DESCRIPTION },
      { name: 'format-detection', hid: 'format-detection', content: 'telephone=no' },
      { name: 'format-detection', hid: 'format-detection', content: 'date=no' },
    ],
    link: [
      { rel: 'icon', type: 'Image/x-icon', href: '/favicon.ico' },
    ],
  },
};

const webfontloader = {
  custom: {
    urls: [
      'https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap',
    ],
  },
};

const router = {
  linkExactActiveClass: 'active',
};

const target = 'static';

const plugins = [
  { src: '@/plugins/i18n' },
];

const components = true;

const buildModules = [
  '@nuxt/typescript-build',
  '@aceforth/nuxt-optimized-images',
];

const modules = [
  '@nuxtjs/style-resources',
  '@luxdamore/nuxt-prune-html',
  '@nuxtjs/i18n',
  'nuxt-webfontloader',
  'nuxt-viewport',
  '@nuxt/content',
  'cookie-universal-nuxt',
];

const build = {
  extractCSS: true,

  terser: {
    parallel: true,
    cache: true,
    terserOptions: {
      compress: {
        drop_console: !dev,
      },
    },
  },

  babel: {
    compact: true,
    presets (_) {
      return [
        [
          '@nuxt/babel-preset-app',
          { corejs: { version: 3 } },
        ],
      ];
    },
  },
};

const typescript = {
  typeCheck: {
    eslint: {
      files: './**/*.{ts,js,vue}',
    },
  },
};

const compilerOptions = {
  types: ['@nuxt/types', '@nuxtjs/i18n', 'nuxt-viewport'],
};

const i18n = {
  locales: [
    {
      name: 'English',
      code: 'en',
      iso: 'en-GB',
      file: 'en.ts',
    },
    {
      name: 'Русский',
      code: 'ru',
      iso: 'ru-MD',
      file: 'ru.ts',
    },
  ],
  detectBrowserLanguage: {
    useCookie: true,
    cookieKey: 'cp__locale',
    redirectOn: 'root',
  },
  baseUrl,
  lazy: true,
  seo: false,
  langDir: 'utils/locales/',
  defaultLocale: process.env.LOCALE,
  vueI18nLoader: true,
  vueI18n: {
    silentTranslationWarn: true,
    fallbackLocale: process.env.LOCALE,
  },
};

const viewport = {
  breakpoints: {
    xs: 0,
    sm: 768,
    lg: 1220,
  },

  defaultBreakpoints: {
    lg: 'lg',
    sm: 'sm',
  },

  fallbackBreakpoint: 'lg',
};

const optimizedImages = {
  handleImages: ['jpeg', 'jpg', 'png', 'svg', 'webp'],
  optimizeImages: true,
  optimizeImagesInDev: false,
  defaultImageLoader: 'img-loader',
  mozjpeg: {
    quality: 70,
  },
  optipng: {
    optimizationLevel: 3,
  },
  webp: {
    preset: 'default',
    quality: 75,
  },
  pngquant: {
    speed: 7,
    strip: true,
  },
  svgo: {},
};

const styleResources = {
  scss: [
    '~assets/scss/helpers/variables.scss',
    '~assets/scss/helpers/mixins.scss',
  ],
};

export default {
  debug: dev,
  version: process.env.npm_package_version,
  globalName: process.env.npm_package_name,
  server: { port: process.env.PORT, host: process.env.HOST },
  env: process.env,
  publicRuntimeConfig,

  head,
  router,
  target,

  webfontloader,
  i18n,
  plugins,
  components,
  modules,
  build,
  optimizedImages,

  styleResources,
  css: ['~assets/scss/styles.scss'],

  typescript,
  compilerOptions,
  buildModules,
  viewport,
};
