import axios from "axios";
import { GET_PROFILE_SUCCESS, GET_PROFILE_ERROR } from "./types";

// get current users profile
export const getUsersProfile = () => async dispatch => {
  try {
    const res = await axios.get("api/profile/me");

    dispatch({
      type: GET_PROFILE_SUCCESS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: GET_PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};
