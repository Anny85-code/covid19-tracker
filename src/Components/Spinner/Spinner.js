import React from 'react';
import ScaleLoader from 'react-spinners/ScaleLoader';
import './Spinner.css';

const Loader = () => (
  <div className="spinner">
    <ScaleLoader color="#4369B2" />
  </div>
);

export default Loader;
