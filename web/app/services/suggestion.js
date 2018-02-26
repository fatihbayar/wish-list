import axios from 'axios';

const SERVICE_URL = 'https://www.adidas.co.uk/api/suggestions';

export const getSuggestions = (searchValue) => {
  return axios({
    method: 'get',
    url: `${SERVICE_URL}/${encodeURIComponent(searchValue)}`
  }).then(response => {
    return response.data.products;
  });
};