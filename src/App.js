import Login from './Login_User';
import Register from './Register_User';
import {BrowserRouter, Routes, Route, createBrowserRouter, RouterProvider} from 'react-router-dom';

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<><Login/></>
    },
    {
      path:'/register',
      element:<><Register/></>
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
