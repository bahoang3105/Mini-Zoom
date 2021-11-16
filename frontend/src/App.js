import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

// Pages
const Register = React.lazy(() => import('./pages/Register'));
const Login = React.lazy(() => import('./pages/Login'));
const About = React.lazy(() => import('./pages/About'));
const Homepage = React.lazy(() => import('./pages/Homepage'));
const Room = React.lazy(() => import('./pages/Room'));
function App() {
  return (
    <BrowserRouter>
      <React.Suspense fallback={loading}>
        <Routes>
          <Route exact path='/register' name='Register Page' element={<Register />} />
          <Route exact path='/about' name='About Page' element={<About />} />
          <Route exact path='/login' name='Login Page' element={<Login />} />
          <Route exact path='/' name='Home Page' element={<Homepage />} />
          <Route exact path='/room/:id' name='Room Page' element={<Room />} />
        </Routes>
      </React.Suspense>
    </BrowserRouter>
  );
}

export default App;
