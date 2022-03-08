import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';
import { date, newDate } from '../../Redux/Items/Items';
import ItemItems from '../../Components/ItemItems/ItemItems';

const Details = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [countryDetails, setCountryDetails] = useState([]);

  const handleNavigate = () => {
    navigate('/');
  };

  const countryData = location.pathname
    .match(/[a-zA-Z0-9]/gm)
    .join('')
    .replaceAll('20', ' ');

  const url = `https://api.covid19tracking.narrativa.com/api/${date}/country/${countryData}`;
  const fetchCountryDetails = async () => {
    const request = await fetch(url);
    const response = await request.json();
    const data = Object.values(response.dates[newDate].countries);
    if (data) {
      setCountryDetails(data);
    }
  };
  useEffect(() => {
    fetchCountryDetails();
  }, []);
  return (
    <div>
      <div>
        <IoIosArrowBack onClick={handleNavigate} />
        {countryDetails.map((data) => (
          <ItemItems
            key={data.id}
            id={data.id}
            name={data.name}
            todayConfirmed={data.today_confirmed}
            source={data.source}
          />
        ))}
      </div>
    </div>
  );
};
export default Details;
