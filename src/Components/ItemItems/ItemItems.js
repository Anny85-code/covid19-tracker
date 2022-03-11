import './ItemItems.css';
import propTypes from 'prop-types';
import { BsArrowRightCircle } from 'react-icons/bs';

const ItemItems = ({
  id, name, todayConfirmed, map,
}) => (
  <ul key={id} className="li-content">
    <li>
      <BsArrowRightCircle className="infos-circle" />
    </li>
    <li>
      <img className="country-map" alt="country-map" src={map} />
    </li>
    <li>
      <div className="content name">{name}</div>
      <div className="content status center-container">
        {new Intl.NumberFormat().format(todayConfirmed)}
      </div>
    </li>
  </ul>
);
ItemItems.propTypes = {
  id: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  todayConfirmed: propTypes.number.isRequired,
  map: propTypes.string.isRequired,
};

export default ItemItems;
