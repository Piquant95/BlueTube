import axios from 'axios';

const BASE_URL = 'https://youtube-v31.p.rapidapi.com/search';

const options = {
    url: BASE_URL,
    params: {
      maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key': '1eb4450e5cmsh92e2ffdd0619d74p1bfff2jsn35b929556910',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };