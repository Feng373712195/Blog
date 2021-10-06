import { lazy } from 'react'

export const menu = [
  { name:'发布文章',path:'/articles/publish',hide:true,Component:lazy(()=>import('@/pages/Publish')) },
  { name:'文章管理',path:'/articles',Component:lazy(()=>import('@/pages/Articles')) },
  { name:'草稿管理',path:'/drafts',Component:lazy(()=>import('@/pages/Drafts')) },
  { name:'标签管理',path:'/lables',Component:lazy(()=>import('@/pages/Lables')) }
]


export type MenuType = typeof menu
