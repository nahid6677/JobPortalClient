import { useContext, useRef, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import AuthContext from "../authContext/AuthContext";
import Lottie from "lottie-react";
import loginLottie from "../../assets/Lottie/Login.json";
import { LiaEyeSlash, LiaEyeSolid } from "react-icons/lia";
import axios from "axios";
import { tr } from "motion/react-client";
const LogIn = () => {
  const { popupSign, setLoading, loginUser } = useContext(AuthContext);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [show, setShow] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  // console.log( location)
  const from = location?.state || "/";

  const handlePupUpSign = () => {
    popupSign()
      .then((result) => {
        if (result.user) {
          setLoading(false);
          navigate(from)
          // console.log(result.user.email);
        //   const user = { email: result.user.email }
        //   // navigate(from);
        //   // send a request and "ONLY" create a jwt token
        //   axios.post('http://localhost:3000/jwt', user,{
        //     withCredentials: true
        //   })
        //     .then(data => {
        //       console.log(data.data);
        //     })
        //     .catch(err => console.log(err));

        }
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };
  const handleLogin = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    console.log(email, password);
    loginUser(email, password)
      .then((result) => {
        if (result?.user) {
          setLoading(false);
          navigate(from);
          // console.log(result.user);
          // axios.post('http://localhost:3000/jwt', user,{
          //   withCredentials: true
          // })
          //   .then(data => {
          //     console.log(data.data);
          //   })
          //   .catch(err => console.log(err));
        }
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };
  const handleShow = () => { };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center w-96 lg:text-left">
          <Lottie animationData={loginLottie}></Lottie>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h1 className="text-3xl font-bold">Login now!</h1>
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                ref={emailRef}
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type={show ? "text" : "password"}
                ref={passwordRef}
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
              <button
                onClick={() => handleShow(setShow(!show))}
                type="button"
                className="absolute top-[52px] right-4"
              >
                {show ? <LiaEyeSolid /> : <LiaEyeSlash />}
              </button>
            </div>
            <div className="form-control space-y-2 mt-6">
              <button className="btn btn-primary">Login</button>
              <button type="button" onClick={handlePupUpSign} className="btn ">
                <FcGoogle></FcGoogle> Continue with Google
              </button>
            </div>
            <p className="">
              I d`nt have a account
              <Link to={"/register"}>
                <span className="text-green-600"> Sign Up</span>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
