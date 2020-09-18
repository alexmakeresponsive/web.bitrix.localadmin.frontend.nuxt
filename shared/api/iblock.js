import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class IBlock extends Vue {

    url = "http://192.168.100.6/local/admin/api/iblock";

    bindStore(store)
    {
        this.store = store;
    }

    bindRoute(route)
    {
        this.route = route;
    }

    async getListIblock()
    {
        if(this.store.state.api.iblock.listType.length)
        {
            return
        }

        try
        {
            await fetch(
                `${this.url}?q=getListIblock`,
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
                    // console.log(data);

                    if(data.status !== 200)
                    {
                        console.log('error in server');
                        return;
                    }

                    this.store.commit('api/iblock/updateListType', data.data);
                });
        }
        catch (e)
        {
            console.log(e);
            alert("catch!");
        }
    }

    async getListIblockSection(id)
    {
        // const id = this.route.query.id

        // if(this.store.state.api.iblock.listSection.hasOwnProperty(id))
        // {
        //     return
        // }

        try
        {
            await fetch(
                `${this.url}?q=getListIblockSection&id=` + id,
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
                    // console.log(data);

                    if(data.status !== 200)
                    {
                        console.log('error in server');
                        return;
                    }

                    this.store.commit('api/iblock/updateListSection', data);
                });
        }
        catch (e)
        {
            console.log(e);
            alert("catch!");
        }
    }

    async getListIblockElement(id, idsection)
    {
        // if(this.store.state.api.iblock.listSection.hasOwnProperty(id))
        // {
        //     return
        // }
        if(!idsection)
        {
            idsection = "";
        }

        try
        {
            await fetch(
                `${this.url}?q=getListIblockElement&id=` + id + '&idsection=' + idsection + '&nPageSize=' + 50,
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
                    // console.log(data);

                    if(data.status !== 200)
                    {
                        console.log('error in server');
                        return;
                    }

                    this.store.commit('api/iblock/updateListElement', data);
                });
        }
        catch (e)
        {
            console.log(e);
            alert("catch!");
        }
    }

    async getIblockElement(id, idElement)
    {
        try
        {
            return await fetch(
                `${this.url}?q=getIblockElement&id=` + id + '&idElement=' + idElement,
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
                    // console.log(data);

                    if(data.status !== 200)
                    {
                        console.log('error in server');
                        return;
                    }

                    return data;
                    // this.store.commit('api/iblock/updateLastElement', data);
                });
        }
        catch (e)
        {
            console.log(e);
            alert("catch!");
        }
    }

    async getIblockSection(id, idSection)
    {

    }

    async setIblockElement(idIblock, idSection, idElement, refs)
    {
        const formData = new FormData();
              formData.append('idIblock', idIblock);
              formData.append('idSection', idSection);
              formData.append('idElement', idElement);

        let values = {};

        for(let name in refs)
        {
            values[name] = refs[name].value;
        }

        // formData.append(name, refs[name].value);
        formData.append('values', JSON.stringify(values));

        try
        {
            return await fetch(
                `${this.url}?q=setIblockElement`,
                {
                    method: 'POST',
                    body: formData
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
                    // console.log(data);

                    if(data.status !== 200)
                    {
                        console.log('error in server');
                        return;
                    }

                    return data;
                });
        }
        catch (e)
        {
            console.log(e);
            alert("catch!");
        }
    }

    async setIblockSection(id, idSection)
    {

    }
}
