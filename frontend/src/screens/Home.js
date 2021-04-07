import './Home.css'
import {useState} from 'react'
import axios from 'axios'





const Home = (props) => {
   // 
    const [UUID,setUUID] = useState('');
    const [valid,setValid] = useState(false);
    const generateUUID = (event)=>{
        setValid(false);
            event.preventDefault();
            axios.post('http://localhost:5000/api/notes/generateuuid')
            .then(res=>{
               // console.log(res.data)
                setUUID(res.data)
             
            })
           console.log(UUID);

    }

    const redirect = ()=>{
    //console.log(props);
    // create an instance in the backend
    if(UUID)
       {
            axios.post(`http://localhost:5000/api/notes/generateuuid/${UUID}`)
            .then(res =>{
                //const validity = res.data;
                console.log(res);
                // if(validity ===false)
                //     setValid(true);
            })
       } 
    const path = `/${UUID}`;
    props.history.push(path);
   
    }

    const validUUID = (event)=>{
        event.preventDefault();
        if(UUID){
            axios.get(`http://localhost:5000/api/notes/validuuid/${UUID}`)
            .then(res =>{
                const validity = res.data;
                console.log(res.data);
                if(validity ===false)
                    setValid(true);
            })
        }
    }

    const setUUIDMandually = (event)=>{
        setValid(false);
        setUUID(event.target.value);
    }






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
                <input onChange = {setUUIDMandually} placeholder="url"/>
                
                <button onClick={validUUID} className="btn green">check</button>
                { valid && <button className="btn gray" onClick={redirect}> Create</button> }
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
