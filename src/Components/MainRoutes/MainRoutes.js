import { Route, Routes } from 'react-router-dom';
import Items from '../../Pages/Items/Items';

const MainRoutes = () => (
  <Routes>
    <Route path="/" element={<Items />} />
  </Routes>
);

export default MainRoutes;
