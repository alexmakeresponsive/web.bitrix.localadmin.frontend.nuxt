export default async (langCurrent, pageName) =>
{
    let cache, cacheState, data;
    const request = 'http://192.168.100.6/local/admin/settings/lang?q=getJson';

         cacheState = await caches.has('lang');
    if (!cacheState)
    {
        return {};
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
        return {};
    }

    if (!data.langData[langCurrent].data.hasOwnProperty('page'))
    {
        return {};
    }

    return data.langData[langCurrent].data.page[pageName];
};
