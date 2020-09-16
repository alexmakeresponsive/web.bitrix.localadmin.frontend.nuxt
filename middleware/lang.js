export default async function ({ store, redirect, route })
{
    if (store.state.lang.text.hasOwnProperty('en'))
    {
        return;
    }

    try
    {
        await fetch(
            'http://192.168.100.6/local/admin/settings/lang?q=getJson',
            {
                method: 'GET',
            }
        ).then(response => {

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
                // console.log(data);

                if (!data.hasOwnProperty('status'))
                {
                    return;
                }

                if (data.status !== 200)
                {
                    redirect(`/error/http/error`);
                    return;
                }

                store.commit('lang/updateLangText', data.langData);
            });
    }
    catch (e)
    {
        console.log(e);
        alert("catch!");
        redirect(`/error/http/error`);
    }



    const langCurrent = localStorage.getItem('langCurrent');

    if (!langCurrent)
    {
        localStorage.setItem('langCurrent', 'ru');
    }
}
