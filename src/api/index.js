import axios from 'axios';

const URL = 'http://localhost:3000';

/* POST */
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

/* USER */
export const addNewsletter = async data => {
  try {
    const findUser = await axios.get(`${URL}/newsletter?email=${data.email}`);
    if(!Array.isArray(findUser.data) || !findUser.data.length) {
      //Add user
      const res = await axios({
        method: 'POST',
        url: `${URL}/newsletter`,
        data: {
          email: data.email
        }
      });

      return { 
        newsletter: 'added',
        email: res.data,
      };
    } else {
      return {newsletter: 'failed'};
    }
  } catch (err) {
    console.log(err);
    throw err;
  }
};