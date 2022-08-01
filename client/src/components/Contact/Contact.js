import React, {useRef, useState} from 'react'
import './Contact.css'
// import emailjs from '@emailjs/browser';


function Contact() {
    const form = useRef();
    // const [done, setDone] = useState(false) 

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs.sendForm('service_7ilo39r', 'template_kkbmsrr', form.current, 'pZncpHqhv3szr8J3z')
//       .then((result) => {
//           console.log(result.text);
//           setDone(true)
//       }, (error) => {
//           console.log(error.text);
//       });
//   };
  return (
    <div className="contact-form text-center" id='contacts'>
        <div className="w-left">
            <div className="awesome">
                <span className='text-black'>Stay in the loop</span>
                <span>About all things beauty</span>
                <div 
                className="blur s-blur1"
                ></div>
            </div>
        </div>
        <div className="c-right">
            <form>
                {/* ref={form} onSubmit={sendEmail} */}
                <h3>Subscribe to our Newsletter</h3>
                <input type="email" name='user_email' className='user' placeholder='Email' />
                {/* <input type="submit" value='send' className='button' /> */}
                <button className="bg-pink hover:bg-red-200 text-white font-bold py-2 px-2 rounded outline-none mr-10">Submit</button>
                {/* <span>{done && 'Subscried to our NewsLetter.'}</span> */}
                <div 
                className="blur c-blur1"
                style={{background: '#fe7d6a40'}}
                ></div>
            </form>
        </div>
    </div>
  )
}

export default Contact