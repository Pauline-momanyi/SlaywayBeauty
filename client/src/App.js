import React, {useState, useEffect} from 'react';
import './App.css';
import Slayway from './components/Header/Slayway';
import Header from './components/Header/Header';
import Home from './components/Home';
import Auth from './components/Auth/Auth';
import Book from './components/Book/Book';
import Mybookings from './components/Book/Mybookings/Mybookings';
import Footer from './components/Footer/Footer';
import {Routes, Route, useNavigate} from 'react-router-dom'
// import Login from './components/Auth/Login';
import Admin from './components/Admin/Admin';



function App() {
  const [user, setUser] = useState(null);

  const [bookings, setBookings] = useState([])

  let navigate = useNavigate()
  // navigate('/book')

  useEffect(() => {
    // auto-login
    fetch("/api/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          navigate('/book')
          console.log(user);
          setUser(user)});
          // if(user){
          //   navigate('/book')
          // }else{
          //   navigate('/auth')
          // }
         
      }
    });
  }, []);

  // useEffect(()=>{
  //   if (user){
  //     navigate('/book')
  //   }else{
  //     return <Auth onLogin={setUser} />;
  //   }
  // },[])
  // if (user) return <Book/>;

 
  // if (!user) return <Auth onLogin={()=>setUser} />;
  // if (user){
  //   navigate('/book')
  // }else{
  //   return <Auth onLogin={setUser} />;
  // }
  // if(bookings.length>0){console.log(bookings)}
  return (
    
      <div className="App">
        <Slayway user={user}/>
        <Header user={user} setUser={setUser}/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/admin' element={<Admin/>}/>
          <Route path='/book' element={<Book user={user}/>}/>
          <Route path='/auth' element={<Auth user={user} setUser={setUser} />}/>
          <Route path='/mybookings' element={<Mybookings bookings={()=>setBookings}/>}/>
        </Routes> 
      <Footer/>
      </div>
    

  );
  }


export default App;
