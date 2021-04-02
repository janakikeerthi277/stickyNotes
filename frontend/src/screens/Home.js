import './Home.css'
import {useState} from 'react'
import axios from 'axios'





const Home = (props) => {
   // 
    const [UUID,setUUID] = useState('')
    const [flag,setFlag] = useState(false)
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
       
        props.history.push(path);
   
    }

    const checkurl = () => {
        console.log(UUID);
        axios.get(`http://localhost:5000/api/notes/findurl/${UUID}`)
        .then(res=>{
            console.log(res.data);
             if(Object.keys(res.data).length === 0)
             {
                setFlag(true)
             }
             else
             {
               setFlag(false);
             }
         })


    return (
         <div className="homescreen">
             <div className="firstBox">
                      <h1 className="homescreen-title">STICKY NOTES</h1>
             </div>


             <div className="secondBox">

                             {/* Create a input area with a button(generate a url). user can provide his own if want.
            and then pass with url to the Note component. */}
            {/* <Link to = {}> */}
            <div className="createButton">
                <button className="btn purple" onClick ={generateUUID}>generate uuid</button>
                <input onChange = {event =>setUUID(event.target.value)} placeholder="url"/>
                
                <button className="btn green" onClick={checkurl}>check</button>
                <button style={flag?{}:{display:'none'}}className="btn gray"onClick={redirect}>Create</button>
                <br/>
                <h2>Your links:</h2>
                <h2> {`http://localhost/`+UUID}</h2>

                {/*
                Put the button Here
                */}

            </div>

             </div>
          


        </div>
    )
}

export default Home
