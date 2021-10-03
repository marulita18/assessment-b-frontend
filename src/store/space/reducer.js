const initialState = {
  loading: true,
  spaces: [],
  details: null,
};

export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
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
        spaces: [...payload],
      };
    }

    case "detailsPage/spacesFetched": {
      const newState = {
        loading: false,
        spaces: payload,
        details: payload,
      };
      console.log("my newstate is", newState);
      return newState;
    }
    default: {
      return state;
    }
  }
}
