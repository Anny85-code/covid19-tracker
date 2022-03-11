import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Loader from 'react-spinners/ScaleLoader';
import ImageSource from '../../Components/ImageSource/ImageSource';
import ItemItems from '../../Components/ItemItems/ItemItems';
import './Items.css';

const url = 'https://raw.githubusercontent.com/rachidelaid/worldMaps/main/maps/world/vector.svg';
let imageLink = '';

const Items = () => {
  const itemData = useSelector((state) => state.items);

  const [filterItems, setFilterItems] = useState(itemData);
  const handleChange = (e) => {
    const typedCountries = e.target.value;
    const filtered = itemData.filter((value) => value.name
      .toLowerCase().startsWith(typedCountries.toLowerCase()));
    setFilterItems(filtered);
  };
  let sum = 0;
  itemData.forEach((element) => {
    sum += element.today_confirmed;
  });

  return (
    <div className="main-container">
      <div className="header">
        <img src={url} className="world-map" alt="world-map" />
        <div>
          <h2>Countries</h2>
          <p>
            {new Intl.NumberFormat().format(sum)}
            <span className="total">Total</span>
          </p>
        </div>
        {!itemData.length && <Loader />}
      </div>
      <div className="stat">
        <p className="stat-text">Stats by Country</p>
        <input
          type="text"
          placeholder="Enter Country..."
          onChange={handleChange}
        />
      </div>

      <div className="countries-details">
        {filterItems.length > 0
          ? filterItems.slice(0, 10).map((item) => {
            imageLink = ImageSource(item.name);
            return (
              <Link
                key={item.id}
                to={{
                  pathname: `${item.name}`,
                }}
              >
                <ItemItems
                  id={item.id}
                  map={imageLink}
                  name={item.name}
                  todayConfirmed={item.today_confirmed}
                />
              </Link>
            );
          })
          : itemData.slice(0, 10).map((item) => {
            imageLink = ImageSource(item.name);
            return (
              <Link
                key={item.id}
                to={{
                  pathname: `${item.name}`,
                }}
              >
                <ItemItems
                  id={item.id}
                  map={imageLink}
                  name={item.name}
                  todayConfirmed={item.today_confirmed}
                />
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default Items;
