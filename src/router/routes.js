
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { 
        path: '', 
        name: 'Home', 
        component: () => import('pages/Index.vue') }
    ]
  },
  {
    path: '/new-post',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { 
        path: '', 
        name: 'New Post', 
        component: () => import('pages/NewPost.vue') }
    ]
  },
  {
    path: '/post/:id/:slug',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { 
        path: '', 
        name: 'Post', 
        component: () => import('pages/Post.vue') }
    ]
  },
  {
    path: '/login',
    component: () => import('layouts/LoginLayout.vue'),
    children: [
      { 
        path: '',
        name: 'Login',
        component: () => import('pages/Login.vue')
      }
    ]
  },
  

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
