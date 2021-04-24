import './Header.css';
import { useHistory } from 'react-router-dom'
import * as emailjs from 'emailjs-com';
import { useState } from 'react';
import axios from 'axios';

const Header = (props) =>{

        const [email,setEmail] = useState('')
        const [query, setQuery] = useState('');
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

        
        const handleSearchSubmit = (event) =>{
            event.preventDefault();
            props.setSearchTerm(query);     
          }

        let history = useHistory(); 
        const deleteurl = () => {
            axios.delete(`http://localhost:5000/api/notes/deleteurl${window.location.pathname}`)
            history.replace('')
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
                    <input id ="search" type='text' value={query} onChange={event => setQuery(event.target.value)} placeholder='search....' ></input>
                    <button className="btn-header gray" onClick = {handleSearchSubmit} >Search</button>              
            </div>

        </div> 
    )
}

export default Header;