import React, {useEffect} from 'react';
import Login from '../components/Login';
const LoginContainer = () => {
  const onHandleResetErrors = () => {};
  const onHandleSubmit = (params: any) => {
    console.log(params);
  };
  return (
    <Login
      onHandleResetErrors={onHandleResetErrors}
      loading={false}
      error=""
      onHandleSubmit={onHandleSubmit}></Login>
  );
};

export default LoginContainer;
