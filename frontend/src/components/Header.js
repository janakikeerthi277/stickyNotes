import './Header.css';
import {Link} from 'react-router-dom'
import * as emailjs from 'emailjs-com';
import { useState } from 'react';
import axios from 'axios';

const Header = () =>{

        const [email,setEmail] = useState('')
        const handleSubmit = () => {
            
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

        const deleteurl = () => {
            axios.delete(`http://localhost:5000/api/notes/deleteurl${window.location.pathname}`)
            // props.history.push('http://localhost:3000')
            // props.history.goBack();
        }
  
    return (
        <div className="navbar">
            {/*  Logo*/}

            <div className="header_logo" style={{display:"flex", justifyContent:"center"}}>
                <h2>Sticky Notes</h2>
                <button className="btn-header delete gray" onClick={deleteurl} style={{ marginLeft:"80%"}}>Delete</button>
            </div>

            {/* Root Actions Button */}

            <div className="header_links" style={{display:"flex", justifyContent:"center"}}>
                    <input onChange = {event =>setEmail(event.target.value)} id="email" placeholder="enter your email here"/>
                    <button className="btn-header gray" onClick={handleSubmit}>Send</button>
                    <input id="search" placeholder="search for a note here"/>
                    <button className="btn-header gray">Search</button>              
            </div>

        </div>
    )
}


export default Header;