const initialState = {
  loading: false,
  blog: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'blog_success':
      return {
        ...state,
        blog: action.payload.blog,
      };
    default:
      return state;
  }
}
