import axios from 'axios';

export default axios.create({
    baseURL: 'http://d869ae42d318.ngrok.io' //it changes every 9 hours
}); 

//restart server:
//on track-server : node index.js
//ngrok http 3000    
