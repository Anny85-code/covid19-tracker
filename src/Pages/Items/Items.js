import { useSelector } from 'react-redux';
import ItemItems from '../../Components/ItemItems/ItemItems';
import './Items.css';

const Items = () => {
  const itemData = useSelector((state) => state.items);
  return (
    <div className='main-container'>
      <ul>
        {itemData.map((item) => (
        <ItemItems key={item.id} id={item.id} name={item.name} todayConfirmed={item.today_confirmed}  />)
        )}
      </ul>
    </div>
  );
};

export default Items;
