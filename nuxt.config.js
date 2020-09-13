export default {
    router: {
        base: '/local/admin/app/',
        middleware: ['auth', 'role']
    },
    css: [
        '~/assets/vendor/twitter/bootstrap.slate.min.css'
    ],
}
