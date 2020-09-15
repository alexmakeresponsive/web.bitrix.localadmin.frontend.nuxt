export default async (langQuery, pageName) =>
{
    let cache, cacheState, data;
    const request = 'http://192.168.100.6/local/admin/settings/lang?q=getJson';

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

    if (!data.langData[langQuery].data.hasOwnProperty('page'))
    {
        return null;
    }

    return data.langData[langQuery].data.page[pageName];
};
