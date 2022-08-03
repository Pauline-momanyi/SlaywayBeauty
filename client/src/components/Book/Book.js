import React, {useEffect} from "react";
import {useNavigate} from 'react-router-dom'
import Calender from "./Calender/Calender";
import Pricing from "./Pricing";
import "./Book.css";


function Book({user}) {
  let navigate = useNavigate()
  useEffect(() => {
  if(user===null){
    navigate('/auth')
  }
  }, []);
  console.log(user)
  return (
    <div className="mainbook">
      <h3 className="text-center">BOOK APPOINTMENT</h3>
      <div className="mx-10 space-x-8">
        <div>
          <Calender user={user}/>
        </div>
        <div className="blur"></div>
      </div>
      <Pricing />
    </div>
  );
}

export default Book;
