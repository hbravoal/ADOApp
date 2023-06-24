import 'reflect-metadata';
import {container} from 'tsyringe';
import Login from '../components/Login';
import {ILogInApplication} from '../../domain/interfaces/application/auth/ILogInApplication';
import {useState} from 'react';
import {Navigate, useNavigate} from 'react-router-dom';

const LoginContainer = () => {
  const _login = container.resolve<ILogInApplication>('ILogInApplication');
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const onHandleResetErrors = () => {};
  const onHandleSubmit = async (params: any) => {
    try {
      await _login.LogIn(params.email, params.password);
      navigate('/home');
    } catch (error: any) {
      setError(error?.message.toString() ?? 'User n2ot found.');
    }
  };
  return (
    <Login
      onHandleResetErrors={onHandleResetErrors}
      loading={false}
      error={error}
      onHandleSubmit={onHandleSubmit}></Login>
  );
};

export default LoginContainer;
