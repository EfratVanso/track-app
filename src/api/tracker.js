import axios from 'axios';

export default axios.create({
    baseURL: 'https://9c03119acc15.ngrok.io' //it changes every 9 hours
}); 

//restart server:
//on track-server : node index.js
//ngrok http 3000    
