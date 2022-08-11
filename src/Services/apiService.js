import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '29056109-ea4b658fb97f4de5d55a4522c';

export const getArticles = async (text, page) => {
  
  try {
    const response  = await axios.get(
      `${BASE_URL}/?q=${text}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`);
      if (response.data.hits.length === 0) {
        throw new Error('error');
      }
      return response.data;
    } catch (error) {
      throw error;
    }
  };
