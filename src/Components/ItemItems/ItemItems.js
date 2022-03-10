import './ItemItems.css';
import propTypes from 'prop-types';
import { BsArrowRightCircle } from 'react-icons/bs';

const ItemItems = ({
  id, name, todayConfirmed, source,
}) => (
  <li key={id} className="li-content">
    <BsArrowRightCircle className="infos-circle" />
    <div className="content name">{name}</div>
    <div className="content status center-container">
      {new Intl.NumberFormat().format(todayConfirmed)}
    </div>

    <div>{source}</div>
  </li>
);
ItemItems.propTypes = {
  id: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  todayConfirmed: propTypes.number.isRequired,
  source: propTypes.string.isRequired,
};

export default ItemItems;
