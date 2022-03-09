import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';
import { date, newDate } from '../../Redux/Items/Items';
import DetailItems from '../../Components/DetailItems/DetailItems';

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
          <DetailItems
            country={data.name}
            key={data.id}
            todayConfirmed={data.today_confirmed}
            todayDeaths={data.today_deaths}
            todayNewConfirmed={data.today_new_confirmed}
            todayNewDeaths={data.today_new_deaths}
            source={data.source}
            todayNewRecovered={data.today_new_recovered}
            todayRecovered={data.today_recovered}
            yesterdayDeaths={data.yesterday_deaths}
          />
        ))}
      </div>
    </div>
  );
};
export default Details;
