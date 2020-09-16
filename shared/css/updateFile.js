export default (id) => {
    try
    {
        fetch(
            'http://192.168.100.6/local/admin/settings/theme/style?q=updateFile&id=' + id,
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

                console.log(data);

                if(data.status !== 200)
                {
                    console.log('error in server');
                    return;
                }

                document.head.querySelectorAll('link').forEach(el => {
                    if(el.href.indexOf('.css') !== -1)
                    {
                        const pos = el.href.indexOf('?cache-refresh=');

                        let hrefNew = '';

                        if(pos !== -1)
                        {
                            hrefNew = el.href.substring(0, pos);
                        }
                        else
                        {
                            hrefNew = el.href;
                        }

                        el.href = hrefNew + "?cache-refresh=" + Math.random();
                    }
                });

                return {};
            });
    }
    catch (e)
    {
        console.log(e);
        alert("catch!");
    }
}
