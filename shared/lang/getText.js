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

export default async (pagePath) =>
{
    let cache, cacheState, data;

    const request     = 'http://192.168.100.6/local/admin/settings/lang?q=getJson';
    const langCurrent = localStorage.getItem('langCurrent');


         cacheState = await caches.has('lang');
    if (!cacheState)
    {
        return null;
    }

    const response = await caches.match(request);

    try {
        data = await response.json();
    }
    catch (e)
    {
        console.log(e);
    }

    if (!data)
    {
        return null;
    }

    const text = getText(data.langData[langCurrent].data, pagePath);

    return text;
};
