export default async function ({ store, redirect, route })
{
    const host = store.state.env.host;

    if(!route.name)
    {
        redirect(`${host}/local/admin/app/`);
    }

    if(route.name === 'error')
    {
        return;
    }

    if (store.state.token.csrf.length !== 0)
    {
        return;
    }


    const s1        = route.path.substring(1);
    const pathSplit = s1.split('/');

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
                store.commit('http/updateErrorText', "Many request per second& try arain later");
                redirect(`${host}/local/admin/app/error`);
                return {};
            }

            if(response.status !== 200)
            {
                store.commit('http/updateErrorText', "Server unavailable");
                redirect(`${host}/local/admin/app/error`);
                return {};
            }
            else
            {
                return response.json();
            }
        })
            .then(data => {
                // console.log(route);
                console.log(data);

                if (data.status !== 200)
                {
                    redirect(`${host}/local/admin/app/`);
                }
                else
                {
                    store.commit('token/updateCsrf', data.TOKEN_CSRF);
                }
            });
    }
    catch (e)
    {
        console.log(e)
        // redirect(`${host}/local/admin/app/error`);

        // store.commit('http/updateErrorText', e);
        // setTimeout(() => {
        //     redirect(`${host}/local/admin/app/error`);
        // }, 1000)

    }
}
