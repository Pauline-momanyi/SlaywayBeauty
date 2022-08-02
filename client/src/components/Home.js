import React, {useEffect, useState} from 'react'
import Follow from './Follow/Follow';
import Stats from './Stats/Stats';
import Services from './Services/Services';
import Reviews from './Reviews';
import Contact from './Contact/Contact';


function Home() {
  const [reviews, setReviews] = useState([])
  const [errors, setErrors] = useState([])
  useEffect(()=>{
    fetch("/api/reviews")
    .then(r=>{
      if(r.ok){
        r.json().then(data=>{
          console.log(data);
          setReviews(data)})
      }else{
        r.json().then(errors=>setErrors(errors))
      }
    })
 
  },[])
  return (
    <>
    <Follow/> 
    <Services/>
    <Stats/>
    <Reviews reviews={reviews}/>
    <Contact/>
    </>
  )
}

export default Home