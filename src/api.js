import axios from 'axios';

export let appData = [];

async function getData() {
  const request = await axios.get('https://demo4176211.mockable.io/data')
  return appData = request.data 
}

getData();

