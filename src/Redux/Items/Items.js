const FETCHITEMDATA = 'covid-19-data/items/fetch';

const url = 'https://api.covid19tracking.narrativa.com/api/2022-03-07';
export const fetchItemData = () => async (dispatch) => {
  const response = await fetch(url);
  const data = await response.json();
  const payload = data.map(
    ({ id, countries, link }) => ({
      id,
      countries,
      link,
    })
  );
  dispatch({
    type: FETCHITEMDATA,
    payload,
  });
};

const itemsReducer = (state = [], action) => {
  switch (action.type) {
    case FETCHITEMDATA:
      return action.payload;
    default:
      return state;
  }
};
export default itemsReducer;
