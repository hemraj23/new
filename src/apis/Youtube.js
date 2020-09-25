import axios from 'axios';

const KEY = 'AIzaSyBesYnBtpyvs0du9yIt-ZZhTS2PvfyPWFs';

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxresult:'4',
        key:KEY
    }
});