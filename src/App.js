
import './App.css';
import MainLayout from './components/MainLayout/MainLayout';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Header from './components/Header/Header';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        {
          path: '/',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Header />
        }
      ]

    }
  ])
  return (
    <div className='container mx-auto'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
