// import { serviceGetBlog } from '@/service/blog';

export const updateBlog = (data) => async (dispatch) => {
  // const { data } = await serviceGetBlog();
  dispatch({
    type: 'blog_success',
    payload: {
      blog: data,
      loading: false,
    },
  });
};

// export const updateBlog = (data) => {
//   return {
//     type: 'blog_success',
//     data,
//   };
// };

export const updateBlogDetail = (data) => async (dispatch) => {
  // console.log(data);
  dispatch({
    type: 'blog_detail_success',
    payload: {
      blogDetail: data,
      loading: false,
    },
  });
};
