import DashboardContainer from '../page/DashboardContainer';
import {IsAuth} from '../../Services/authService';
import {Navigate, Route, Routes} from 'react-router-dom';
import LoginContainer from '../page/LoginContainer';

const Router = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={IsAuth() ? <Navigate to="/home" /> : <LoginContainer />}
      />
      <Route
        path="/login"
        element={IsAuth() ? <Navigate to="/home" /> : <LoginContainer />}
      />
      <Route
        path="/home"
        element={!IsAuth() ? <Navigate to="/login" /> : <DashboardContainer />}
      />
    </Routes>
  );
};
export default Router;
