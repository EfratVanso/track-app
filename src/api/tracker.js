import axios from 'axios';

export default axios.create({
    baseURL: 'http://54fc38c41639.ngrok.io' //it changes every 9 hours
}); 

//restart server:
//on track-server : node index.js
//ngrok http 3000    
