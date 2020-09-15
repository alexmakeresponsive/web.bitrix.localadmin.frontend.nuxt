export default async (pageName) =>
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

    if (!data.langData[langCurrent].data.hasOwnProperty('page'))
    {
        return null;
    }

    return data.langData[langCurrent].data.page[pageName];
};