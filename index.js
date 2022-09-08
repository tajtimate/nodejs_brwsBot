const axios = require('axios').default;

async function main(){
    const session = axios.create();
    session.defaults.withCredentials = true;
    session.defaults.headers['User-Agent'] = 'Chrome/105.0.0.0';

    const res = await session.get('https://en.grepolis.com/');
    console.log(res);
}

main();