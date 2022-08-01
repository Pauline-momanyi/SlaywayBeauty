import React from "react";
import Calender from "./Calender/Calender";
// import Slots from "./Slots/Slots";
// import Bookbutton from "./Bookbutton/Bookbutton";
import Pricing from "./Pricing";
import "./Book.css";



function Book({user}) {
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
