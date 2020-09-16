export const state = () => ({
    text: {},
})

export const mutations = {
    updateLangText(state, text) {
        state.text = text;
    },
}
