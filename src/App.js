import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import MainRoutes from './Components/MainRoutes/MainRoutes';
import { fetchItemData } from './Redux/Items/Items';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchItemData());
  }, []);

  return (
    <div>
      <MainRoutes />
    </div>
  );
}

export default App;
