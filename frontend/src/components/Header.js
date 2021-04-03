import './Header.css';
import {Link} from 'react-router-dom'
import * as emailjs from 'emailjs-com';
import { useState } from 'react';

const Header = () =>{

        const [email,setEmail] = useState('')
        const handleSubmit = () => {
        let templateParams = {
          message: "Hi There",
         }
         console.log("I got clicked")
         console.log(email);
         emailjs.send("service_o6nx135","template_7w9gysj",{
            to_email : email,
            message: `${window.location}`,
            },"user_2YdDi56FH42QWhKtYnkcA").then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
             }, function(error) {
                console.log('FAILED...', error);
             });
        }
  
    return (
        <div className="navbar">
            {/*  Logo*/}

            <div className="header_logo">
                <h2>Sticky Notes</h2>
            </div>

            {/* Root Actions Button */}

            <div className="header_links">
                    <input onChange = {event =>setEmail(event.target.value)} id="email" placeholder="enter your email here"/>
                    <button className="btn gray" onClick={handleSubmit}>Send</button>
                    <input id="search" placeholder="search for a note here"/>
                    <button className="btn gray">Search</button>              
            </div>

        </div>
    )
}


export default Header;