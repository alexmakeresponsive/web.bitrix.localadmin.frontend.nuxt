// import storeToken from '~/store/token';

export default async function (component)
{
    if (!component)
    {
        return;
    }

    const body_wrapper = document.getElementById('body_wrapper');

    // console.log(component.$store.state.token);

    if (component.$store.state.token.csrf.length !== 0)
    {
        console.log('t:', component.$store.state.token.csrf);
        return;
    }

    await fetch(
        'http://192.168.100.6/api/auth/check',
    ).then(response => response.json())
        .then(data => {
            console.log(data);
            // console.log(JSON.parse(data))
            if (data.status !== 200) {
                // window.location = '/local/admin/'
            } else {

                component.$store.commit('token/updateCsrf', data.TOKEN_CSRF);
                body_wrapper.style.display = 'block';
            }
        });
}
