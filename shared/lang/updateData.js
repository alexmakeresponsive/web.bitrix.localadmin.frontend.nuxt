export default async (langQuery, pageName, store) =>
{
    let data;

    try {
        data = store.state.lang.text;
    }
    catch (e)
    {
        console.log(e);
    }

    if (!data)
    {
        return null;
    }

    return data[langQuery].data.page[pageName];
};
