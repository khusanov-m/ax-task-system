import { IValueName } from '../shared';
import { NavigationItem } from './layout.type';

export const NAVIGATION_LIST: NavigationItem[] = [
  {
    name: 'Главная страница',
    icon: 'assets/icons/home.svg',
    route: '/app/home',
  },
  {
    name: 'Управление задачами',
    icon: 'assets/icons/tick.svg',
    route: '/app/tasks',
  },
  {
    name: 'Календарь',
    icon: 'assets/icons/calendar.svg',
    route: '/app/calendar',
  },
  {
    name: 'Команда',
    icon: 'assets/icons/team.svg',
    route: '/app/team',
    badge: 3,
  },
  {
    name: 'Статистика',
    icon: 'assets/icons/activity.svg',
    route: '/app/statistics',
  },
  {
    name: 'Профиль',
    icon: 'assets/icons/profile.svg',
    route: '/app/profile',
    line: true,
  },
  {
    name: 'Настройки',
    icon: 'assets/icons/settings.svg',
    route: '/app/settings',
  },
  {
    name: 'Выход из системы',
    icon: 'assets/icons/logout.svg',
    route: '/app/logout',
  },
];

export const SORT_OPTIONS: IValueName[] = [
  { value: 'date', displayName: 'Дате' },
  { value: 'priority', displayName: 'Приоритету' },
];
