import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ItemItems from '../../Components/ItemItems/ItemItems';
import './Items.css';

const Items = () => {
  const itemData = useSelector((state) => state.items);
  return (
    <div className="main-container">
      <ul>
        {itemData.length > 0
          ? itemData.map((item) => (
            <Link
              key={item.id}
              to={{
                pathname: `${item.name}`,
              }}
            >
              <ItemItems
                id={item.id}
                name={item.name}
                todayConfirmed={item.today_confirmed}
              />
            </Link>
          ))
          : ''}
      </ul>
    </div>
  );
};

export default Items;
