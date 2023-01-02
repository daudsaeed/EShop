import { Fragment, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { emailSignIn, googleSignIn } from "../../store/user/user-action";

import {
  signInWithGooglePopup,
  signInWithAuthEmailAndPassword,
} from "../../utils/firebase/firebase.util";
import Button from "../button/button.component";

const SigninForm = ({ auth, setAuth, setShowForm }) => {
  const dispatch = useDispatch();
  const setLoginFieldsObj = {
    email: "",
    password: "",
  };

  const [loginFields, setLoginFields] = useState(setLoginFieldsObj);
  const { email, password } = loginFields;

  // #######H HELPER METHDS #################################
  const getFormWidth = () => {
    const form = document.querySelector(".login");
    return form.getBoundingClientRect().width;
  };

  // When the inout text chnages this function will get ex
  const handleChange = (event) => {
    const { name, value } = event.target;
    setLoginFields({ ...loginFields, [name]: value });
  };

  const handleSubmit = async () => {
    if (!email || !password) {
      alert("Email and passowrd are required");
    }

    // try {
    //   const userCredentails = await signInWithAuthEmailAndPassword(
    //     email,
    //     password
    //   );
    //   console.log(userCredentails.user);
    // } catch (ex) {
    //   switch (ex.code) {
    //     case "auth/wrong-password":
    //       alert("Wrong password");
    //       break;
    //     case "auth/user-not-found":
    //       alert("No user with this email");
    //       break;
    //     default:
    //       alert(ex.code);
    //       break;
    //   }
    // }

    dispatch(emailSignIn(email, password));
  };

  // ################# JSX #################################
  return (
    <Fragment>
      {/* ########################## LOGIN PAGE########################  */}
      <div
        className="login__boxOne"
        style={
          auth === "signup"
            ? {
                transition: `all 0.3s ease`,
                transform: `translate(-${getFormWidth()}px)`,
              }
            : {
                animation: `formAnimation 0.5s`,
              }
        }
      >
        <div className="login__header">
          <p className="login__header-text">LOGIN</p>
          <AiOutlineClose
            className="login__header-icon"
            onClick={() => {
              setShowForm(false);
            }}
          />
        </div>

        <div className="login__form">
          <div className="form-group">
            <label htmlFor="">
              Email <span className="req">*</span>
            </label>
            <input
              type="text"
              name="email"
              id="email"
              className="form-control"
              value={email}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="">
              Password <span className="req">*</span>
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="form-control"
              value={password}
              onChange={handleChange}
            />
          </div>

          <Button className="form-submit" onClick={handleSubmit}>
            SIGNIN
          </Button>

          {/* Google Login Button */}
          <div
            className="google-btn"
            onClick={async () => {
              // const userCredentails = await signInWithGooglePopup();
              // console.log(userCredentails.user);

              dispatch(googleSignIn());
            }}
          >
            <div className="google-icon-wrapper">
              <img
                className="google-icon"
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt="Google Login button"
              />
            </div>
            <p className="btn-text">
              <b>Sign in with google</b>
            </p>
          </div>
        </div>

        <div className="login__detail">
          <p
            onClick={() => {
              setAuth("signup");
            }}
          >
            <span className="light">New customer?</span>{" "}
            <span className="underline">Create your account</span>
          </p>
          <p>
            <span className="light">Lost password?</span>{" "}
            <span className="underline">Recover the password</span>
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default SigninForm;
