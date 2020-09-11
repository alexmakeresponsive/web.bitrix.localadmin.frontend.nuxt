export default async function (context) {
    // context.userAgent = process.server
    //     ? context.req.headers['user-agent']
    //     : navigator.userAgent

    await fetch(
        'http://192.168.100.6/api/auth/check',
    ).then(response => response.json())
        .then(data => {
            console.log(data);
            // console.log(JSON.parse(data))
            // if (data.status == 200) {
            //
            // }
        });

    // console.log('check auth');
}
