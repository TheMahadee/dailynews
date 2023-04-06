import axios from 'axios';

const URL = 'http://localhost:3000/';

export const getPosts = async () => {
  try {
    const response = await axios.get(URL + 'posts');
    return {
      posts: response.data
    };
  } catch (err) {
    console.log(err);
    throw err;
  }
};