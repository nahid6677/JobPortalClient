import Lottie from "lottie-react";
import { useContext, useRef, useState } from "react";
import registerLottieData from "../../assets/Lottie/Register.json";
import AuthContext from "../authContext/AuthContext";
// import {
//   GoogleAuthProvider,
//   signInWithPopup,
//   signInWithRedirect,
// } from "firebase/auth";
// import auth from "../firebase/Firebase.init";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const Register = () => {
  const { popupSign, createUser,setLoading } = useContext(AuthContext);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [passError, setPassError] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    function validPassword(password) {
      const regExpression = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$/;
      return regExpression.test(password);
    }
    if (validPassword(password)) {
      setPassError("");
      createUser(email, password)
        .then((result) => {
          if (result.user) {
            setLoading(false);
            // console.log(result.user);
          }
        })
        .catch((err) => {
          console.log(err);
          setLoading(false)
        });
      console.log(email, password, validPassword(password));
    } else {
      setPassError("Atlest 6 digits one uppercase one lowercase later");
    }
  };
  const handlePopUp = () => {
    popupSign()
      .then((result) => {
        setLoading(false);
        console.log(result.user);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left w-96">
          <Lottie animationData={registerLottieData}></Lottie>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h1 className="text-3xl  font-bold">Register now!</h1>
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                ref={emailRef}
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                ref={passwordRef}
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              {passError && (
                <label className="label text-red-400 text-xs">
                  {passError}
                </label>
              )}
            </div>
            <div className="form-control mt-6 space-y-3">
              <button className="btn btn-primary">Register</button>
              <button onClick={handlePopUp} className="btn ">
                <FcGoogle className="" />
                Continue with Google
              </button>
            </div>

            <p className="">
              I have a account
              <Link to={"/signin"}>
                <span className="text-green-600"> Sign In</span>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
