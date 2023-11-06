const initialState = {
  loading: false,
  isAuthenticate: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'user_loading':
      return {
        ...state,
        loading: action.payload.loading,
      };
    case 'user_register':
      return {
        ...state,
        loading: action.payload.loading,
      };
    default:
      return state;
  }
}
