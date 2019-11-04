import axios from 'axios';

var accessTokenIndex = window.location.hash.indexOf('access_token='),
    accessToken      = ~accessTokenIndex && window.location.hash.substr(accessTokenIndex + 13),
    symbolsIndex =  window.location.hash.indexOf('symbols='),
    symbols =  ~symbolsIndex && window.location.hash.substr(accessTokenIndex + 8);


export default axios.create({
    //reates an instance of the axios client with default values like headers pre defined for specific use
    baseURL: 'https://api.stocktwits.com/api/2/streams/symbols.json',
    headers: {
        access_token: accessToken
    },
    params: {
      symbols: symbols
    }
});
