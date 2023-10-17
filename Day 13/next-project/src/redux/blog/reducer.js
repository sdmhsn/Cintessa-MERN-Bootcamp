const initialState = {
  loading: false,
  blog: [],
  blogDetail: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'blog_success':
      return {
        ...state,
        blog: action.payload.blog,
      };
    case 'blog_detail_success':
      return {
        ...state,
        blogDetail: action.payload.blogDetail,
      };
    default:
      return state;
  }
}
