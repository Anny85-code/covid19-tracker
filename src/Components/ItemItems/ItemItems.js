import './ItemItems.css';
import propTypes from 'prop-types';

const ItemItems = ({ id, name, todayConfirmed }) => (
  <li key={id} className="li-content">
    <div className="content name">{name}</div>
    <div className="content status center-container">{todayConfirmed}</div>
  </li>
);
ItemItems.propTypes = {
  id: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  todayConfirmed: propTypes.number.isRequired,
};

export default ItemItems;
