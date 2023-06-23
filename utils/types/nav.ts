import { RawLocation } from 'vue-router';

export interface NavOption {
  id?: string;
  title?: string;
  scroll?: boolean;
  nuxtHref?: RawLocation;
  href?: string;
}
