import axios from 'axios';

const URL = 'http://localhost:3000';

export const getPosts = 
    async (prevState, pagination={page: 1, limit: 10, order:'asc'}) => {
      try {
        const response = await axios.get(
          `${URL}/posts?_page=${pagination.page}&_limit=${pagination.limit}
        &_order=${pagination.order}&_sort=id`);
        return {
          posts: prevState.posts ? 
            [...prevState.posts, ...response.data] : response.data,
          page: pagination.page,
          end: response.data.length === 0 ? true : false
        };
      } catch (err) {
        console.log(err);
        throw err;
      }
    };