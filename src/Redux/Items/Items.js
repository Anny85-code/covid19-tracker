import date from "../../Components/ItemItems/Dates";
const FETCHITEMDATA = 'covid-19-data/items/fetch';
const newDate = '2022-03-07';

const url = 'https://api.covid19tracking.narrativa.com/api/2022-03-07';
export const fetchItemData = () => async (dispatch) => {
  const response = await fetch(url);
  const data = await response.json();
  const dateItems = data.dates[newDate].countries;
  const obj = Object.entries(dateItems);
  // console.log(data.dates[date()])

  const payload = obj.map(
    (array) => {
      console.log(array)
      return ({
        id: array[1].id,
        name: array[1].name,
        // links: array[1].links,
      });
    }
  );
  dispatch({
    type: FETCHITEMDATA,
    payload,
  });

};

const itemsReducer = (state = [], action) => {
  switch (action.type) {
    case FETCHITEMDATA:
      return [...state, action.payload]
      // return state.concat(action.payload);
    default:
      return state;
  }
};
export default itemsReducer;
