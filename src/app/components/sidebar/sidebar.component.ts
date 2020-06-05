import { Component, OnInit } from '@angular/core';

declare interface RouteInfo {
  path: string;
  title: string;
  rtlTitle: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  {
    path: '/dashboard',
    title: 'Painel Administrativo',
    rtlTitle: 'لوحة القيادة',
    icon: 'icon-chart-pie-36',
    class: ''
  },
  {
    path: '/posts',
    title: 'Posts',
    rtlTitle: 'لوحة القيادة',
    icon: 'icon-components',
    class: ''
  },
  {
    path: '/midia',
    title: 'Mídia',
    rtlTitle: 'لوحة القيادة',
    icon: 'icon-image-02',
    class: ''
  },
  {
    path: '/aparencia',
    title: 'Aparência',
    rtlTitle: 'لوحة القيادة',
    icon: 'icon-palette',
    class: ''
  },
  {
    path: '/icons',
    title: 'Icons',
    rtlTitle: 'الرموز',
    icon: 'icon-caps-small',
    class: ''
  },
  {
    path: '/maps',
    title: 'Maps',
    rtlTitle: 'خرائط',
    icon: 'icon-pin',
    class: '' },
  {
    path: '/notifications',
    title: 'Notificações',
    rtlTitle: 'إخطارات',
    icon: 'icon-bell-55',
    class: ''
  },

  {
    path: '/user',
    title: 'Usuários',
    rtlTitle: 'ملف تعريفي للمستخدم',
    icon: 'icon-single-02',
    class: ''
  },
  {
    path: '/tables',
    title: 'Table List',
    rtlTitle: 'قائمة الجدول',
    icon: 'icon-puzzle-10',
    class: ''
  },
  {
    path: '/typography',
    title: 'Configurações',
    rtlTitle: 'طباعة',
    icon: 'icon-settings-gear-63',
    class: ''
  },
  {
    path: '/rtl',
    title: 'RTL Support',
    rtlTitle: 'ار تي ال',
    icon: 'icon-world',
    class: ''
  }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() {}

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
    if (window.innerWidth > 991) {
      return false;
    }
    return true;
  }
}
