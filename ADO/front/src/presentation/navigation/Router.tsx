import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Login from '../components/Login';

const LazyLoginComponent = React.lazy(() => import('../components/Login'));

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<LazyLoginComponent />} />
      <Route path="/topics" element={<LazyLoginComponent />} />
    </Routes>
  );
};
export default Router;
