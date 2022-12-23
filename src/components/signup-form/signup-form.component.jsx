import { Fragment, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.util";
import Button from "../button/button.component";

// ################ Signup form Componment  ###############
const SignupForm = ({ auth, setShowForm, setAuth }) => {
  // ###################### VARIBALES #####################
  const signUpFieldsObj = {
    displayName: "",
    email: "",
    password: "",
    confrimPassword: "",
  };
  const [signUpFields, setSignUpFields] = useState(signUpFieldsObj);
  const { displayName, email, password, confrimPassword } = signUpFields;

  // ############################## HELPER METHODS #############################
  // get the form width
  const getFormWidth = () => {
    const form = document.querySelector(".login");
    return form.getBoundingClientRect().width;
  };
  // Handle The chnage event of the textinput fields
  const handleChangeEvent = (event) => {
    const { name, value } = event.target;

    setSignUpFields({ ...signUpFields, [name]: value });
  };

  // Handle the submit event of the form
  const handleSubmit = async ({ auth }) => {
    if (password !== confrimPassword) {
      alert("Password and confrim password must be the same");
      return;
    }
    try {
      const userCredentials = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      // If the userDocRef is not then user already exists
      const userDocRef = await createUserDocumentFromAuth(
        userCredentials.user,
        { displayName }
      );
      console.log(userCredentials);
      console.log(` Authentication: ${userDocRef}`);
    } catch (ex) {
      switch (ex.code) {
        case "auth/email-already-in-use":
          alert("Account with this email registered");
          break;
        default:
          alert("Something went wrong");
          break;
      }
    }
  };

  return (
    <Fragment>
      {/* ########################## SIGN UP PAGE ####################   */}
      <div
        className="login__boxTwo"
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
          <p className="login__header-text">SIGN UP</p>
          <AiOutlineClose
            className="login__header-icon"
            onClick={() => {
              setShowForm(false);
            }}
          />
        </div>

        <div className="login__form">
          {/* Display Name */}
          <div className="form-group">
            <label htmlFor="">
              Username <span className="req">*</span>
            </label>
            <input
              type="text"
              name="displayName"
              id="displayName"
              className="form-control"
              value={displayName}
              onChange={handleChangeEvent}
              required
            />
          </div>

          {/* Email */}
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
              onChange={handleChangeEvent}
              required
            />
          </div>

          {/* Password */}
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
              onChange={handleChangeEvent}
              required
            />
          </div>

          {/* ConfrimPassword */}
          <div className="form-group">
            <label htmlFor="">
              Confrim Password <span className="req">*</span>
            </label>
            <input
              type="password"
              name="confrimPassword"
              id="confrimPassword"
              className="form-control"
              value={confrimPassword}
              onChange={handleChangeEvent}
              required
            />
          </div>

          {/* SignUp BTN */}

          <Button className="form-submit" onClick={handleSubmit}>
            SIGNUP
          </Button>
        </div>

        <div className="login__detail">
          <p
            onClick={() => {
              setAuth("login");
            }}
          >
            <span className="light">Already Registered?</span>{" "}
            <span className="underline">Login Now!</span>
          </p>
          <p>
            <span className="light">Lost password?</span> Recover password
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default SignupForm;
