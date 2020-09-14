function getSpaceForCheck(pathSplit, store)
{
    let spacePathParts = [];
    let spacePathPartsIndex = 0;

    for(let pathSplitItem of pathSplit)
    {
        if (spacePathPartsIndex === 2)
        {
            break;
        }

        spacePathParts.push(pathSplitItem);

        spacePathPartsIndex++;
    }

    // console.log(pathSplit)

    const spaceRouteMap    = store.state.routes.spaceRouteMap;
    const spaceRouteMapKey = spacePathParts.join('/');

    return spaceRouteMap[spaceRouteMapKey];
}

export default async function ({ store, redirect, route })
{
    // console.log(store.state.spaces.spaceList);

    const s1        = route.path.substring(1);
    const pathSplit = s1.split('/');

    if(!route.name)
    {
        redirect(`/`);
        return;
    }

    if(pathSplit[0] === 'error')
    {
        return;
    }

    if(store.state.spaces.spaceList.length !== 0)
    {
        const spaceForCheck = getSpaceForCheck(pathSplit, store);

        if(store.state.spaces.spaceList.indexOf(spaceForCheck) === -1 && spaceForCheck)
        {
            redirect(`/error/forbidden`);
        }

        return;
    }

    const formData = new FormData();

    try
    {
        await fetch(
            'http://192.168.100.6/api/auth/check',
            {
                method: 'POST',
                body: formData
            }
        ).then(response => {
            // console.log(response)

            if(!response)
            {
                redirect(`/error/http/block`);
                return {};
            }

            if(response.status !== 200)
            {
                redirect(`/error/http/unavailable`);
                return {};
            }

                return response.json();
        })
            .then(data => {
                console.log(data);
                console.log(route.path);

                if (!data.hasOwnProperty('status'))
                {
                    return;
                }

                if(data.status_authorized === "N" && route.path !== "/redirect/auth/login")
                {
                    redirect(`/redirect/auth/login`);
                    return;
                }

                if (data.status !== 200)
                {
                    redirect(`/error/forbidden`);
                    return;
                }

                if(data.status_role !== 200)
                {
                    redirect(`/error/role`);
                    return;
                }

                if(data.spaceList.length === 0 && pathSplit[0].length !== 0)
                {
                    redirect(`/error/role`);
                    return;
                }

                let redirectPathFirst = ''

                switch (data.spaceList[0])
                {
                    case "ADMIN":
                        redirectPathFirst = `/admin`;
                    break;
                    case "CONTENT_ADMIN":
                        redirectPathFirst = `/content/admin`;
                    break;
                    default:
                        redirectPathFirst = `no-redirect`;
                    break;
                }


                // check access in spaceList
                const spaceForCheck = getSpaceForCheck(pathSplit, store);

                if(data.spaceList.indexOf(spaceForCheck) === -1 && spaceForCheck)
                {
                    redirect(`/error/forbidden`);
                    return;
                }

                    store.commit('http/updateRedirectPathFirst', redirectPathFirst);
                    store.commit('token/updateCsrf', data.TOKEN_CSRF);

                    store.commit('spaces/updateSpaceList', data.spaceList);
            });
    }
    catch (e)
    {
        console.log(e);
        alert("catch!");
        redirect(`/error/http/error`);
    }
}
