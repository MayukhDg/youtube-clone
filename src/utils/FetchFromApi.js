import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com"

const options = {
  url: BASE_URL,
    params: {
     maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key': '4db3e04167msh8daea1a9ed25076p14f871jsn84f6b43251ff',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };


  export const fetchFromAPI = async(url)=>{
  const { data} = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
  }
  
