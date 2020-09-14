export const state = () => ({
    errorText: '',
    redirectPathFirst: '',
})

export const mutations = {
    updateErrorText(state, e) {
        state.errorText = e;
    },
    updateRedirectPathFirst(state, p) {
        state.redirectPathFirst = p;
    },
}
