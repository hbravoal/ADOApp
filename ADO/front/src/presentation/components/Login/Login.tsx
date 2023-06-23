import React, {Fragment, useEffect, useReducer, useContext} from 'react';

const Login = () => {
  return (
    <Fragment>
      <div className="container-fluid animated fadeIn">
        <div className="row">
          <div className="col-md-6 d-none d-block p-0">
            <img
              className="img-login w-100"
              // src={bannerImage}
              alt="BannerImage"
            />
          </div>
          <div className="col-md-6 d-flex align-items-center justify-content-center">
            <div className="content-login">
              <h5 className="pb-4">Welcome!</h5>
              <p> HBravoAl's Test for Weelo.</p>
              <form
                className="h-100 "
                onSubmit={e => e.preventDefault()}
                id="FormLogin">
                <div className="group mb-4">
                  <label className="none">Email</label>
                  <input
                    className="user"
                    id="Email"
                    name="Email"
                    type="text"
                    // onChange={(handleEmailChange)}
                    required
                    placeholder="hbravoalgmail.com"
                  />
                  <span className="bar"></span>
                  {/* {state.Email.error && (
                    <p className="error"> {state.Email.error}</p>
                  )} */}
                </div>
                <div className="group mb-4">
                  <label className="none">Password</label>
                  <input
                    className="user"
                    id="Password"
                    name="Password"
                    type="password"
                    // onChange={handlePasswordChange}
                    required
                    placeholder="mypasss"
                  />
                </div>
                <div className="py-3 d-flex justify-content-center align-items-center">
                  <a className="mx-3 button" href="./">
                    Cancelar
                  </a>
                  <a
                    className={`mx-3 button button-yellow `}
                    href="Submit"
                    // onClick={handleFOrmSubmitChange}
                  >
                    Continuar
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Login;
