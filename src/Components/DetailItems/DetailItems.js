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
      <div>
        <h2>{country}</h2>
        <li className="country-detail h">
          <small>{todayConfirmed}</small>
          <span className="hd">Total Confirmed</span>
        </li>
      </div>
    </div>
    <div className="stat">Stat Breakdown</div>
    <ul className="details-wrapper">
      <li className="source country-detail">
        <span>Source</span>
        <span>
          <small>{source}</small>
          <small>
            <BsArrowRightCircle className="infos-circle" />
          </small>
        </span>
      </li>
      <li className="country-detail">
        <span>Total Deaths</span>
        <span>
          <small>{todayDeaths}</small>
          <small>
            <BsArrowRightCircle className="infos-circle" />
          </small>
        </span>
      </li>
      <li className="country-detail">
        <span>Yesterday&apos;s Deaths</span>
        <span>
          <small>{yesterdayDeaths}</small>
          <small>
            {' '}
            <BsArrowRightCircle className="infos-circle" />
          </small>
        </span>
      </li>

      <li className="country-detail">
        <span>Today Recovered</span>
        <span>
          <small>{todayRecovered}</small>
          <small>
            <BsArrowRightCircle className="infos-circle" />
          </small>
        </span>
      </li>
      <li className="country-detail">
        <span>Today New Confirmed</span>
        <span>
          <small>{todayNewConfirmed}</small>
          <small>
            <BsArrowRightCircle className="infos-circle" />
          </small>
        </span>
      </li>
      <li className="country-detail">
        <span>Today New Deaths</span>
        <span>
          <small>{todayNewDeaths}</small>
          <small>
            <BsArrowRightCircle className="infos-circle" />
          </small>
        </span>
      </li>
      <li className="country-detail">
        <span>Today New Recovered</span>
        <span>
          <small>{todayNewRecovered}</small>
          <small>
            <BsArrowRightCircle className="infos-circle" />
          </small>
        </span>
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
