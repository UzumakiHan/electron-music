import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    { path: '/', redirect: '/index'},
    { path: '/index', name: 'index', meta:{keepAlive:true},component: () => import('@/views/index/index.vue')},
    { path: '/rank', name: 'rank', meta:{keepAlive:true}, component: () => import('@/views/rank/index.vue')},
    { path: '/playlist', name: 'playlist', meta:{keepAlive:true}, component: () => import('@/views/playlist/index.vue')},
    { path: '/playlist/detail', name: 'playlistdetail', component: () => import('@/views/playlist/detail.vue')},
    { path: '/artist', name: 'artist',  meta:{keepAlive:true},component: () => import('@/views/artist/index.vue')},
    { path: '/mvlist', name: 'mvlist', meta:{keepAlive:true}, component: () => import('@/views/mvlist/index.vue')},
    { path: '/mvlist/mv', name: 'mv', component: () => import('@/views/mvlist/detail.vue')},
    { path: '/my', name: 'my', component: () => import('@/views/my/index.vue')},
    { path: '/song', name: 'song', component: () => import('@/views/song/index.vue')},
    { path: '/singer', name: 'singer', component: () => import('@/views/singer/index.vue')},
    { path: '/album', name: 'album', component: () => import('@/views/album/index.vue')},
    { path: '/search', name: 'search', component: () => import('@/views/search/index.vue')},



   

   
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router