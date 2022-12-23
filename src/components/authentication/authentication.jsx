import { useState, Fragment } from "react";
import "./authentication.style.scss";
import SignupForm from "../signup-form/signup-form.component";
import SigninForm from "../signin-form/signin-form.component";

const Authentication = ({ setShowForm }) => {
  const [auth, setAuth] = useState(null);

  return (
    <Fragment>
      <div className="login">
        {/* Sign in Form  */}

        <SigninForm auth={auth} setAuth={setAuth} setShowForm={setShowForm} />

        {/* Sign up form */}
        <SignupForm auth={auth} setAuth={setAuth} setShowForm={setShowForm} />
      </div>

      <div className="overlay"></div>
    </Fragment>
  );
};

export default Authentication;
