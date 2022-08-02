import React, {useState} from "react";
import {useNavigate} from 'react-router-dom'

const Signup = ({onLogin}) => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [password, setPassword] = useState("");    
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    let navigate = useNavigate()
    function handleSubmit(e) {
        e.preventDefault();
        // console.log(username + email + phone + password + passwordConfirmation);
        setErrors([]);
        setIsLoading(true);
        fetch("/api/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username,
            email,
            phone,
            password,
            password_confirmation: passwordConfirmation,
           
          }),
        }).then((r) => {
          console.log(r);
          setIsLoading(false);
          if (r.ok) {
            r.json().then((user) => {
              // console.log(user);
              onLogin(user)});            
              navigate('/book')
          } else {
            r.json().then((err) => setErrors(err.errors));
          }
        });
       
      }
  return (
    <div className="container mx-auto">
      <div className="flex justify-center px-6">
        <div className="w-full xl:w-3/4 lg:w-11/12 flex">
          <div className="w-full h-auto bg-gray-400 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg"></div>

          <div className="w-full lg:w-7/12 bg-white rounded-lg lg:rounded-l-none">
            <h3 className="pt-4 text-2xl text-center">Create an Account!</h3>
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
                  id="username"
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>

              <div className="mb-4 md:mr-2 md:mb-0 mt-2">
                <label
                  className="block mb-2 text-sm font-bold text-gray-700"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="w-64 px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-4 md:mr-2 md:mb-0">
                <label
                  className="block mb-2 text-sm font-bold text-gray-700"
                  htmlFor="phone"
                >
                  Phone Number
                </label>
                <input
                  className="w-64 px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="phone"
                  type="number"
                  placeholder="Phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              {/* <div className="mb-4 md:flex md:justify-between"> */}
              <div className=" mb-4 md:mr-2 md:mb-0">
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
              <div className=" mb-4 md:mr-2 md:mb-0">
                <label
                  className="block mb-2 text-sm font-bold text-gray-700"
                  htmlFor="c_password"
                >
                  Confirm Password
                </label>
                <input
                  className="w-64 px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="c_password"
                  type="password"
                  placeholder="*********"
                  value={passwordConfirmation}
                  onChange={(e) => setPasswordConfirmation(e.target.value)}
                />
              </div>
              {/* </div> */}
              <div className="mb-3 mt-3 text-center">
                <button
                  className="w-64 px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                  type="submit"
                  onClick={handleSubmit}
                >
                  Create Account
                </button>
              </div> 
              <div>
                {errors.map((err) => (
                <p key={err}>{err}</p>
            ))}
            </div>        
        
            </form>
            <div className="text-center">
                <p>Already have an account? </p>
                <a
                  className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                  href="./index.html"
                >
                  Login
                </a>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
