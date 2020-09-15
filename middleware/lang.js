export default async function ({ store, redirect, route })
{
    let cache, cacheState, cacheKeys;
    const request = 'http://192.168.100.6/local/admin/settings/lang?q=getJson';

        cacheState = await caches.has('lang');
    if (!cacheState)
    {
        cache = await caches.open('lang');
                await cache.add(new Request(request));
    }

    const langCurrent = localStorage.getItem('langCurrent');

    if (!langCurrent)
    {
        localStorage.setItem('langCurrent', 'ru');
    }
}
