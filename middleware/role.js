export default async function ({ store, redirect, route })
{
    // console.log(route.name);

    if(!route.name)
    {
        // redirect('/local/dashboard/');
    }

    if (store.state.token.csrf.length !== 0)
    {
        return;
    }
    //
    // await fetch(
    //     'http://192.168.100.6/api/auth/check',
    // ).then(response => {
    //     console.log(response.json())
    // })
    //
    // return;
    //




    // await fetch(
    //     'http://192.168.100.6/api/auth/check',
    // ).then(response => {
    //     return response.json();
    // })
    //     .then(data => {
    //         // console.log(route);
    //         console.log(data);
    //
    //         if (data.status !== 200)
    //         {
    //             // redirect('/local/dashboard/');
    //         }
    //         else
    //         {
    //             store.commit('token/updateCsrf', data.TOKEN_CSRF);
    //         }
    //     });
}
