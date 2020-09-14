export const state = () => ({
    spaceList: [],
})

export const mutations = {
    updateSpaceList(state, l) {
        state.spaceList = l;
    },
}
