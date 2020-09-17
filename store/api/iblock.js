export const state = () => ({
    listType: [],
    listSection: {

    },
    listElement: {

    },
})

export const mutations = {
    updateListType(state, l)
    {
        state.listType = l;
    },
    updateListSection(state, data)
    {
        state.listSection[data.id] = data.data;
    },
    updateListElement(state, data)
    {
        if(!data.idsection)
        {
            data.idsection = "root"
        }

        state.listElement[data.id] = {...state.listElement[data.id]};
        state.listElement[data.id][data.idsection] = data.data;

        // console.log(state.listElement);
    },
}
