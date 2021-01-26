import axios from 'axios';

export default axios.create({
    baseURL: 'http://d586b18c9b40.ngrok.io' //it changes every 9 hours
}); 

//restart server:
//on track-server : node index.js
//ngrok http 3000    
