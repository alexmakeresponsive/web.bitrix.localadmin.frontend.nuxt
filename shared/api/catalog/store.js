import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class Store extends Vue {

    url = "http://192.168.100.6/local/admin/api/catalog";

    bindStore(store)
    {
        this.store = store;
    }

    bindRoute(route)
    {
        this.route = route;
    }



    async getListStore()
    {
        try
        {
            await fetch(
                `${this.url}?q=getListStore`,
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
                .then(async data => {
                    console.log(data);

                    if(data.status !== 200)
                    {
                        console.log('error in server');
                        return;
                    }


                });
        }
        catch (e)
        {
            console.log(e);
            alert("catch!");
        }
    }

    async getListDocument()
    {
        try
        {
            await fetch(
                `${this.url}?q=getListDocument`,
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
                .then(async data => {
                    console.log(data);

                    if(data.status !== 200)
                    {
                        console.log('error in server');
                        return;
                    }


                });
        }
        catch (e)
        {
            console.log(e);
            alert("catch!");
        }
    }

    async getListProvider()
    {
        try
        {
            await fetch(
                `${this.url}?q=getListProvider`,
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
                .then(async data => {
                    console.log(data);

                    if(data.status !== 200)
                    {
                        console.log('error in server');
                        return;
                    }


                });
        }
        catch (e)
        {
            console.log(e);
            alert("catch!");
        }
    }
}
