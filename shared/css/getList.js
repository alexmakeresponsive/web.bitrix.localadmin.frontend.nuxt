export default async () => {
    try
    {
        return await fetch(
            'http://192.168.100.6/local/admin/settings/theme/style?q=getMap',
            {
                method: 'GET',
            }
        ).then(response => {
            // console.log(response)

            if(!response)
            {
                console.log('many req per sec');
                return {};
            }

            if(response.status !== 200)
            {
                console.log('server unavailable');
                return {};
            }

            return response.json();
        })
            .then(data => {
                // console.log(data);

                if(data.status !== 200)
                {
                    console.log('error in server');
                    return;
                }

                return data.cssMap;
            });
    }
    catch (e)
    {
        console.log(e);
        alert("catch!");
    }
}
