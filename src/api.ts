import axios from 'axios';

const DATA_URL = 'https://demo4176211.mockable.io/data';

export async function getData() {
  const request = await axios.get(DATA_URL);
  return request.data; 
}


