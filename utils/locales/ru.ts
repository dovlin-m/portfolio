import { footer } from '~/utils/locales/ru/footer';
import { sections } from '~/utils/locales/ru/sections';
import { buttons } from '~/utils/locales/ru/buttons';
import { fields } from '~/utils/locales/ru/fields';
import { calc } from '~/utils/locales/ru/calc';
import { header } from '~/utils/locales/ru/header';

export const translations = {
  footer,
  header,
  sections,
  buttons,
  fields,
  calc,
};

// eslint-disable-next-line no-promise-executor-return
export default () => new Promise(resolve => resolve(translations));
