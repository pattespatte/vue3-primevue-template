import type { RouteRecordRaw } from 'vue-router'
import { RouteName } from '@/shared/constants/route-name'

export const homeRoute: RouteRecordRaw = {
  path: '/',
  name: RouteName.HOME,
  component: () => import('@/home/views/HomeView.vue'),
}

export const aboutRoute: RouteRecordRaw = {
  path: '/about',
  name: RouteName.ABOUT,
  component: () => import('@/home/views/AboutView.vue'),
}
