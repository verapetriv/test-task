import axios from "axios";
import * as peopleActions from "./people-actions";

const { fetchPeopleSuccess, fetchPeopleError } = peopleActions;

export const fetchPeople = () => (dispatch) => {
  axios
    .get("https://venbest-test.herokuapp.com/")
    .then(({ data }) => dispatch(fetchPeopleSuccess(data)))
    .catch((error) => dispatch(fetchPeopleError(error)));
};
