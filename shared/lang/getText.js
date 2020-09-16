function getText(pageList, pagePath)
{
    const pagePathParts = pagePath.split('/');

    let text = null;

    for (let part of pagePathParts)
    {
        if(!text)
        {
            text = pageList[part];
            continue;
        }
            text = text[part];
    }

    return text;
}

export default async (pagePath, store) =>
{
    let data;

    const langCurrent = localStorage.getItem('langCurrent');

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

    const text = getText(data[langCurrent].data, pagePath);

    return text;
};
