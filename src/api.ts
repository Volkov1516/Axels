import axios from 'axios';

const DATA_URL: string = 'https://demo4176211.mockable.io/data';

export async function getData(): Promise<{
  users: {}[],
  products: {}[],
  reviews: {}[]
}> {
  const request = await axios.get(DATA_URL);
  return request.data; 
}


