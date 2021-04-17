
const routes = [
  {
    path: '',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { 
        path: '', 
        name: 'Home', 
        component: () => import('pages/Index.vue') }
    ]
  },
  {
    path: '/search/:term',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { 
        path: '', 
        name: 'Search', 
        component: () => import('pages/Search.vue'),
        props: true,
      }
    ]
  },
  {
    path: '/tag/:tag',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { 
        path: '', 
        name: 'Tag', 
        component: () => import('pages/Tag.vue'),
        props: true,
      }
    ]
  },
  {
    path: '/new-post',
    component: () => import('layouts/MainLayout.vue'),
    meta: {
      requiresAuth: true,
    },
    children: [
      { 
        path: '', 
        name: 'New Post', 
        component: () => import('pages/NewPost.vue')
      }
    ]
  },
  {
    path: '/post/:id/:slug',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { 
        path: '', 
        name: 'Post', 
        component: () => import('pages/Post.vue')
      }
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
    path: '/*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
