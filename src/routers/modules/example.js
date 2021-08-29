export default [
    {
        path: '/test',
        name: 'Test',
        component: () => import('@/pages/example/test')
    },
    {
        path: '/aio',
        name: 'Aio',
        component: () => import('@/pages/example/aio')
    }
]