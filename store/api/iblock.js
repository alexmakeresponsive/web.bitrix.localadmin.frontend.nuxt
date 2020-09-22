export const state = () => ({
    listType: [],
    catalogListType: [],

    listSection: {

    },
    listElement: {

    },
    lastElement: {}
})

export const mutations = {
    updateListType(state, l)
    {
        state.listType = l;
    },
    updateCatalogListType(state, l)
    {
        state.catalogListType = l;
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
    updateLastElement(state, data)
    {
        state.lastElement = data.data;
    },
}
