export default async function ({ store, redirect, route })
{
    const host = store.state.env.host;

    if(!route.name)
    {
        redirect(`${host}/local/admin/app/`);
    }

    if (store.state.token.csrf.length !== 0)
    {
        return;
    }


    await fetch(
        'http://192.168.100.6/api/auth/check',
    ).then(response => {
        console.log(response)

        if(!response)
        {
            redirect(`${host}/local/admin/app/`);
            return {};
        }

        if(response.status !== 200)
        {
            redirect(`${host}/local/admin/app/`);
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
