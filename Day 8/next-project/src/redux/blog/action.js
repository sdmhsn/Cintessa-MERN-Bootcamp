export const updateBlog = (data) => async (dispatch) => {
  dispatch({
    type: 'blog_success',
    payload: {
      blog: data,
      loading: false,
    },
  });
};
