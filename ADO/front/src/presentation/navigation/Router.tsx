import 'reflect-metadata';
import {container} from 'tsyringe';
import React, {useEffect} from 'react';
import Login from '../components/Login';
import {IStorageInfrastructure} from '../../domain/interfaces/infrastructure/storage';
import {STORAGE_KEY_USER_TOKEN} from '../../domain/types/StorageKeyTypes';
import DashboardContainer from '../page/DashboardContainer';
import {IsAuth} from '../../Services/authService';
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import LoginContainer from '../page/LoginContainer';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginContainer />} />
      <Route path="/login" element={<LoginContainer />} />
      <Route
        path="/home"
        element={!IsAuth() ? <Navigate to="/login" /> : <DashboardContainer />}
      />
    </Routes>
  );
};
export default Router;
