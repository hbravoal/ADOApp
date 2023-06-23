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
        onSubmit={(values, {setSubmitting}) => {
          onHandleSubmit(values);
          setSubmitting(false);
        }}>
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            {errors.email && touched.email && errors.email}
            <input
              type="password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
            {errors.password && touched.password && errors.password}
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
