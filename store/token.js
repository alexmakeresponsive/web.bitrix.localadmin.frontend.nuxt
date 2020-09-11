export const state = () => ({
    jwt:  '',
    csrf: '',
})

export const mutations = {
    updateCsrf(state, t) {
        state.csrf = t;
    },
}
