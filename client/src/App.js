import React, {useState, useEffect} from 'react';
import './App.css';
import Slayway from './components/Header/Slayway';
import Home from './components/Home';
import Auth from './components/Auth/Auth';
import Book from './components/Book/Book';
import Mybookings from './components/Book/Mybookings/Mybookings';
import Footer from './components/Footer/Footer';
import {Routes, Route, useNavigate} from 'react-router-dom'
import Admin from './components/Admin/Admin';



function App() {
  const [user, setUser] = useState(null);


  let navigate = useNavigate()
  // navigate('/book')

  useEffect(() => {
    // auto-login
    fetch("/api/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          if(user.admin){navigate('/admin')
          }else if(!user.admin){navigate('/book')
          // console.log(user);
        }else{}
          // console.log(user);
          setUser(user)});
          // if(user){
          //   navigate('/book')
          // }else{
          //   navigate('/auth')
          // }
         
      }
    });
  }, []);

  return (
    
      <div className="App">
        <Slayway user={user} setUser={setUser}/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/admin' element={<Admin user={user}/>}/>
          <Route path='/book' element={<Book user={user}/>}/>
          <Route path='/auth' element={<Auth user={user} onLogin={()=>setUser}/>}/>
          <Route path='/mybookings' element={<Mybookings user={user}/>}/>
        </Routes> 
      <Footer/>
      </div>
    

  );
  }


export default App;
