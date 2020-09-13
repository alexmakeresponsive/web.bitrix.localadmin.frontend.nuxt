export const state = () => ({
    jwt:  '',
    csrf: '',

    host: "http://localhost:3000",
    // host: "http://192.168.100.6",
})

export const mutations = {
    updateCsrf(state, t) {
        state.csrf = t;
    },
}
