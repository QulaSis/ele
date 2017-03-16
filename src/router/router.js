export default [
  {path: '/header', component: resolve => require(['components/header/header.vue'], resolve)},
  {path: '/ratings', component: resolve => require(['components/ratings/ratings.vue'], resolve)},
  {path: '/seller', component: resolve => require(['components/seller/seller.vue'], resolve)},
  {path: '/goods', component: resolve => require(['components/goods/goods.vue'], resolve)}
]
