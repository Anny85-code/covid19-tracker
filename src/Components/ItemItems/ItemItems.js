import './ItemItems.css';
import propTypes from 'prop-types';
// import { useDispatch } from 'react-redux';

const ItemItems = ({id, name, todayConfirmed}) => {
  // const newItems = props;
  // const { id, name, todayConfirmed } = newItems;

  return (
    <li key={id} className='li-content'>
      <div className='content name'>{name}</div>
      <div className='content status center-container'>{todayConfirmed}</div>
    </li>
  );
};
ItemItems.propTypes = {
  id: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  todayConfirmed: propTypes.string.isRequired,
};

export default ItemItems;
