import axios from 'axios';


export default axios.create({
    //creates an instance of the axios client with default values like headers pre defined for specific use
    //using CORS anywhere free proxy servicce to address CORS issue :)
    baseURL: 'https://cors-anywhere.herokuapp.com/https://api.stocktwits.com/api/2/streams',

});
