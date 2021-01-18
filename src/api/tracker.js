import axios from 'axios';

export default axios.create({
    baseURL: 'http://5e7004f3561b.ngrok.io' //it changes every 9 hours
}); 

//restart server:
//on track-server : node index.js
//ngrok http 3000    
