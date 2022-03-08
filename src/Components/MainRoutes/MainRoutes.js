import { Route, Routes } from 'react-router-dom';
import Items from '../../Pages/Items/Items';
import Details from '../../Pages/Details/Details';

const MainRoutes = () => (
  <Routes>
    <Route path="/" element={<Items />} />
    <Route path="/:details" element={<Details />} />
  </Routes>
);

export default MainRoutes;
