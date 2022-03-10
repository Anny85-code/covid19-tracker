import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import MainRoutes from './Components/MainRoutes/MainRoutes';
import { fetchItemData } from './Redux/Items/Items';
import Navbar from './Components/Navbar/Navbar';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchItemData());
  }, []);

  return (
    <div>
      <Navbar />
      <MainRoutes />
    </div>
  );
}

export default App;
