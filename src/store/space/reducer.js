const initialState = {
  loading: true,
  spaces: [],
  details: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "homepage/startLoading": {
      return {
        ...state,
        loading: true,
      };
    }

    case "homepage/spacesFetched": {
      // console.log("my action payload", action.payload);
      return {
        ...state,
        loading: false,
        spaces: [...action.payload],
      };
    }
    default: {
      return state;
    }
  }
}
