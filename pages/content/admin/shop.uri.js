export default {
    "marketing": {
        "head": "",
        "menu": {
            "items": [

            ]
        }
    },
    "shop": {
        "head": "",
        "menu": {
            "items": [
                {
                    debug: 'To catalog page',
                    to: '/content/admin/edit/shop/catalog',
                    key: 'catalog',
                    childs: [

                    ]
                },
                {
                    debug: 'To catalog template page',
                    to: '/content/admin/edit/shop/order/history/order',
                    key: 'order',
                    childs: [
                        '/content/admin/edit/shop/order/history/order',
                        '/content/admin/edit/shop/order/history/pay',
                    ]
                },
                {
                    to: '/content/admin/edit/shop/store/document',
                    key: 'document',
                    childs: [
                        '/content/admin/edit/shop/store/document',
                        '/content/admin/edit/shop/store/provider',
                        '/content/admin/edit/shop/store/list',
                    ]
                },
                {
                    to: '/content/admin/edit/shop/delivery',
                    key: 'delivery',
                    childs: [

                    ]
                },
                {
                    to: '/content/admin/edit/shop/payment',
                    key: 'payment',
                    childs: [

                    ]
                },
                {
                    to: '/content/admin/edit/shop/price/type',
                    key: 'price',
                    childs: [
                        '/content/admin/edit/shop/price/type',
                        '/content/admin/edit/shop/price/round',
                        '/content/admin/edit/shop/price/over',
                    ]
                },
                {
                    to: '/content/admin/edit/shop/price/measure',
                    key: 'measure',
                    childs: [

                    ]
                }
            ]
        }
    }
};
