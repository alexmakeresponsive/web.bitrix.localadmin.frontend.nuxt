export default async function ({ store, redirect, route })
{
    let cache, cacheState, cacheKeys;
    const request = 'http://192.168.100.6/local/admin/settings/lang?q=getJson';

        cacheState = await caches.has('lang');
    if (!cacheState)
    {
        cache = await caches.open('lang');
        cache.add(new Request(request));
    }


    // const response = await caches.match(request);
    //
    //       response.json().then(data => {
    //         console.log(data);
    //       });
}
