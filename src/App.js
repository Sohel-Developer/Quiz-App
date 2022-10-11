
import './App.css';
import MainLayout from './components/MainLayout/MainLayout';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Header from './components/Header/Header';
import Quiz from './components/Quiz/Quiz';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        {
          path: '/',
          loader: async () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Header />
        },
        {
          path: 'quiz/:id',
          element: <Quiz />
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
