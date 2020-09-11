export default async function ()
{
    if (!window)
    {
        return;
    }

    const body_wrapper = document.getElementById('body_wrapper');

    console.log('async!');

    await fetch(
        'http://192.168.100.6/api/auth/check',
    ).then(response => response.json())
        .then(data => {
            console.log(data);
            // console.log(JSON.parse(data))
            if (data.status !== 200) {
                window.location = '/local/admin/'
            } else {
                body_wrapper.style.display = 'block';
            }
        });
}
