import React, {Fragment, useEffect, useReducer, useContext} from 'react';
import {Formik} from 'formik';
import {LoginFormInitialValues} from '../../../domain/auth/state/InitialValues';
import {LoginByEmailFormSchema} from '../../../domain/auth/validations/LoginByEmailFormSchema';
const Login = ({
  loading,
  error,
  onHandleResetErrors,
  onHandleSubmit,
}: {
  loading: boolean;
  error: string | undefined;
  onHandleResetErrors: () => void;
  onHandleSubmit: (parameter: any) => void;
}) => {
  return (
    <div>
      <h1>Anywhere in your app!</h1>
      <Formik
        validationSchema={LoginByEmailFormSchema}
        initialValues={LoginFormInitialValues}
        onSubmit={values => {
          onHandleSubmit(values);
        }}>
        {props => (
          <form onSubmit={props.handleSubmit}>
            <input
              type="text"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              value={props.values.email}
              name="email"
            />
            <input
              type="password"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              value={props.values.password}
              name="password"
            />
            {props.errors.email && (
              <div id="feedback">{props.errors.email}</div>
            )}
            <button type="submit">Submit</button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
