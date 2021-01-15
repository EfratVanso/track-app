import axios from 'axios';

export default axios.create({
    baseURL: 'http://939d8baa7c12.ngrok.io' //it changes every 9 hours
});

//restart server:
//on track-server : node index.js
//ngrok http 3000   