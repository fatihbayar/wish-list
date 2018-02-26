import axios from 'axios';

const SERVICE_URL = 'http://localhost:8081/wish-list';

export const fetchWishList = () => {
  return axios({
    method: 'get',
    url: SERVICE_URL
  }).then(response => {
    return response.data.data;
  });
};

export const addToWishList = (product) => {
  return axios({
    method: 'post',
    url: SERVICE_URL,
    data: product
  }).then(response => {
    return response.data.data;
  });
};

export const removeFromWishList = (productId) => {
  return axios({
    method: 'delete',
    url: `${SERVICE_URL}/${productId}`
  }).then(response => {
    return response.data.data;
  });
};