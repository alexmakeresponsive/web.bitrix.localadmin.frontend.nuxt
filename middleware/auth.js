export default async function ({ store, redirect, route })
{
    const host = store.state.env.host;

    if(!route.name)
    {
        redirect(`${host}/local/admin/app/`);
        return;
    }

    if (store.state.token.csrf.length !== 0)
    {
        return;
    }


    const s1        = route.path.substring(1);
    const pathSplit = s1.split('/');

    // if(pathSplit[0] === 'error' || pathSplit[0].length === 0)
    if(pathSplit[0] === 'error')
    {
        return;
    }

    let role = "SOMEBODY"

    switch (pathSplit[0])
    {
        case 'admin':
            role = 'ADMIN'
        break;
    }

    switch (pathSplit[0] + '/' + pathSplit[1])
    {
        case 'content/admin':
            role = 'CONTENT_ADMIN'
        break;
    }

    const formData = new FormData();
          formData.append('role', role);

    try
    {
        await fetch(
            'http://192.168.100.6/api/auth/check',
            {
                method: 'POST',
                body: formData
            }
        ).then(response => {
            console.log(response)

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

                if (!data.hasOwnProperty('status'))
                {
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

                if(data.space === 'SOMEBODY' && pathSplit[0].length !== 0)
                {
                    redirect(`/error/role`);
                    return;
                }

                let redirectPathFirst = ''

                switch (data.space)
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

                    store.commit('http/updateRedirectPathFirst', redirectPathFirst);
                    store.commit('token/updateCsrf', data.TOKEN_CSRF);
            });
    }
    catch (e)
    {
        console.log(e);
        alert(e);
        redirect(`/error/http/error`);
    }
}
