export const updateBlog = (data) => async (dispatch) => {
  dispatch({
    type: 'blog_success',
    payload: {
      blog: data,
      loading: false,
    },
  });
};

export const updateBlogDetail = (data) => async (dispatch) => {
  dispatch({
    type: 'blog_detail_success',
    payload: {
      blogDetail: data,
      loading: false,
    },
  });
};
