import './Home.css'
//import Note from '../components/Note'
import {useState} from 'react'
import axios from 'axios'
import {Redirect} from 'react-router-dom'
import { useHistory } from "react-router-dom";




const Home = (props) => {
   // 
    const [UUID,setUUID] = useState('')
    const generateUUID = (event)=>{
            event.preventDefault();
            axios.post('http://localhost:5000/api/notes/generateuuid')
            .then(res=>{
               // console.log(res.data)
                setUUID(res.data)
             
            })
           console.log(UUID);

    }

    const redirect = ()=>{
    console.log(props);
        const path = `/${UUID}`;
        console.log(path)
        // history.push(path);
        props.history.push(path);
    //    return <Redirect to = "/asda" />
    }



    // const updateUUID = (event)=>{
    //     event.preventDefault();

    // }

    return (
         <div className="homescreen">
            <h1 className="homescreen-title">Sticky Notes 1</h1>

            {/* Create a input area with a button(generate a url). user can provide his own if want.
            and then pass with url to the Note component. */}
            {/* <Link to = {}> */}
            <div className="createButton">
                <button onClick ={generateUUID}>generate uuid</button>
                <input onChange = {event =>setUUID(event.target.value)} placeholder="url"/>
                
                <button>check</button>
                <button onClick={redirect}>Create</button>
                <br/>
                <h3>your links: </h3>{`http://localhost/`+UUID}

                {/*
                Put the button Here
                */}

            </div>
        </div>
    )
}

export default Home
