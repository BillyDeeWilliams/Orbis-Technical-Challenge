import axios from 'axios';

export default axios.create({
    //reates an instance of the axios client with default values like headers pre defined for specific use
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 7e3ac835f1fb68d249e3ab5bbec5f1271ef9934de121b6330212d2ff55c146d9'
    }
});
