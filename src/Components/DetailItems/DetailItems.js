import PropTypes from 'prop-types';
import { BsArrowRightCircle } from 'react-icons/bs';
import './DetailItems.css';

const DetailItems = ({
  country,
  source,
  todayConfirmed,
  todayDeaths,
  todayNewConfirmed,
  todayNewDeaths,
  todayNewRecovered,
  yesterdayDeaths,
  todayRecovered,
  map,
}) => (
  <div className="display-items">
    <div className="details-header">
      <img className="country-map" alt="country-map" src={map} />
      <h2>{country}</h2>
    </div>
    <ul className="details-wrapper">
      <li className="country-detail">
        <span>Total Confirmed</span>
        <small>
          {todayConfirmed}
          <BsArrowRightCircle className="infos-circle" />
        </small>
      </li>
      <li className="source">
        <span>Source</span>
        <small>
          {source}
          <BsArrowRightCircle className="infos-circle" />
        </small>
      </li>
      <li className="country-detail">
        <span>Total Deaths</span>
        <small>
          {todayDeaths}
          <BsArrowRightCircle className="infos-circle" />
        </small>
      </li>
      <li className="country-detail">
        <span>Yesterday&apos;s Deaths</span>
        <small>
          {yesterdayDeaths}
          <BsArrowRightCircle className="infos-circle" />
        </small>
      </li>

      <li className="country-detail">
        <span>Today Recovered</span>
        <small>
          {todayRecovered}
          <BsArrowRightCircle className="infos-circle" />
        </small>
      </li>
      <li className="country-detail">
        <span>Today New Confirmed</span>
        <small>
          {todayNewConfirmed}
          <BsArrowRightCircle className="infos-circle" />
        </small>
      </li>
      <li className="country-detail">
        <span>Today New Deaths</span>
        <small>
          {todayNewDeaths}
          <BsArrowRightCircle className="infos-circle" />
        </small>
      </li>
      <li className="country-detail">
        <span>Today New Recovered</span>
        <small>
          {todayNewRecovered}
          <BsArrowRightCircle className="infos-circle" />
        </small>
      </li>
    </ul>
  </div>
);

DetailItems.propTypes = {
  todayConfirmed: PropTypes.number.isRequired,
  todayDeaths: PropTypes.number.isRequired,
  todayNewConfirmed: PropTypes.number.isRequired,
  todayNewDeaths: PropTypes.number.isRequired,
  source: PropTypes.string.isRequired,
  todayNewRecovered: PropTypes.number.isRequired,
  yesterdayDeaths: PropTypes.number.isRequired,
  todayRecovered: PropTypes.number.isRequired,
  country: PropTypes.string.isRequired,
  map: PropTypes.string.isRequired,
};
export default DetailItems;
