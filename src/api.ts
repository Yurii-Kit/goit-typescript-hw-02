import axios from 'axios';

axios.defaults.baseURL = `https://api.unsplash.com`;

export const fetchPhotos = async (input, currentPage) => {
  const AccessKey = 'QqOptRXwPPZpniHhBq9tkY5UVVyQ3wiSGt6RQauxpdw';
  const response = await axios.get('/search/photos', {
    params: {
      query: input,
      page: currentPage,
      per_page: 12,
    },
    headers: {
      Authorization: `Client-ID ${AccessKey}`,
      'Accept-Version': 'v1',
    },
  });
  return response.data.results;
};
