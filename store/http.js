export const state = () => ({
    errorText: '',
})

export const mutations = {
    updateErrorText(state, e) {
        state.errorText = e;
    },
}
