
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { routes } from './pages/routes/Routes';
import Nav from './pages/sharePage/Nav';

function App() {
  return (
    <div>
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
