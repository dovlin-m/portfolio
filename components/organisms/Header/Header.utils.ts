import { NavOption } from '~/utils/types/nav';

export const NavMenu: NavOption[] = [
  {
    id: 'about',
    title: 'Компания',
    scroll: true,
  },
  {
    id: 'projects',
    title: 'Проекты',
    scroll: true,
  },
  {
    id: 'benefits',
    title: 'Преимущества',
    scroll: true,
  },
  {
    id: 'invest',
    title: 'Инвестиции',
    scroll: false,
    nuxtHref: 'invest',
  },
  {
    id: 'team',
    title: 'Команда',
    scroll: true,
  },
  {
    id: 'contacts',
    title: 'Контакты',
    scroll: true,
  },
];

export const NavMenuInvest: NavOption[] = [
  {
    id: 'reasons',
    title: 'Преимущества',
    scroll: true,
  },
  {
    id: 'statistics',
    title: 'О компании',
    scroll: true,
  },
  {
    id: 'documents',
    title: 'Документы',
    scroll: true,
  },
  {
    id: 'phone',
    title: '8 (800) 550-86-86',
    scroll: false,
    href: 'tel:88005508686',
  },
];

export default { NavMenu, NavMenuInvest };
