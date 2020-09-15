export default {
    router: {
        base: '/local/admin/app/',
        middleware: ['auth', 'role']
    },
    css: [
        '~/assets/current/main.css',
        '~/assets/vendor/twitter/bootstrap.slate.min.css'
    ],

    build: {
        extractCSS: true
    }
}
