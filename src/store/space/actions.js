import axios from "axios";
import { apiUrl } from "../../config/constants";

export const startLoading = () => {
  return {
    type: "homepage/startLoading",
  };
};
export const spacesFetched = (data) => {
  return {
    type: "homepage/spacesFetched",
    payload: data,
  };
};

export function fetchSpaces() {
  return async (dispatch, getState) => {
    dispatch(startLoading);
    try {
      const response = await axios.get(`${apiUrl}/spaces`);
      // console.log(response.data);
      dispatch(spacesFetched(response.data));
    } catch (e) {
      console.log(e.message);
    }
  };
}

export const spacesById = (data) => {
  return {
    type: "detailsPage/spacesFetched",
    payload: data,
  };
};

export function spaceById(id) {
  return async (dispatch, getState) => {
    dispatch(startLoading);
    try {
      const response = await axios.get(`${apiUrl}/spaces/${id}`);

      dispatch(spacesById(response.data));
    } catch (e) {
      console.log(e.message);
    }
  };
}
