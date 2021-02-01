import axios from 'axios';

export default axios.create({
    baseURL: 'https://3239784ec719.ngrok.io' //it changes every 9 hours
}); 

//restart server:
//on track-server : node index.js
//ngrok http 3000    
