import React, {useState} from "react";
import {useNavigate} from 'react-router-dom'
import Mainbg from '../../img/mainbg.jpg'
import {FaArrowRight} from 'react-icons/fa'



function Login({handleChange, onLogin}){
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  let navigate = useNavigate()
  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => {
          // console.log(user);
        onLogin(user)
       
        navigate('/book')
      });
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }
  return (
    <div className="container mx-auto">
      <div className="flex justify-center px-6">
        <div className="w-full xl:w-3/4 lg:w-11/12 flex">
        <img src={Mainbg} alt="image" className="w-full h-auto bg-gray-400 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg m-10"/>

          <div className="w-full lg:w-7/12 bg-white rounded-lg lg:rounded-l-none">
            <h3 className="pt-4 text-2xl text-center">Sign In</h3>
            <form className="px-8 pb-8 mb-4 bg-white rounded flex flex-col justify-center items-center">
              <div className="mb-4 md:mr-2 md:mb-0">
                <label
                  className="block mb-2 text-sm font-bold text-gray-700"
                  htmlFor="firstName"
                >
                  Username
                </label>
                <input
                  className="w-64 px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="firstName"
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>

              {/* <div className="mb-4 md:flex md:justify-between"> */}
              <div className="mt-4 mb-4 md:mr-2 md:mb-0">
                <label
                  className="block mb-2 text-sm font-bold text-gray-700"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  className="w-64 px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="********"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
       
              {/* </div> */}
              <div className="mb-3 mt-3 text-center">
                <button
                  className="w-64 px-4 py-2 my-4 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                  type="submit"
                  onClick={handleSubmit}
                >
                  {isLoading ? "Loading..." : "Login"}
                </button>
                <div>
                {errors.map((err) => (
                  <p key={err}>{err}</p>
                ))}
                </div>
              </div>
              {/* <hr className="mb-3 border-t" /> */}
              {/* <div className="text-center">
                <p>Forgot Password? </p>
                <a
                  className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                  href="./index.html"
                >
                  Reset!
                </a>
              </div> */}
            
              <div className="text-center">
                <p>Don't have an account? </p>
                <FaArrowRight className="text-black"/>
                
                {/* <a
                  className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                  href=""
                >
                  Create One!
                </a> */}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
