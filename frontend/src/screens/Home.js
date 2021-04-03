import './Home.css'
import { useState } from 'react'
import axios from 'axios'





const Home = (props) => {
    //
    const [UUID, setUUID] = useState('')
    const [visibility, setVisibility] = useState(true);
    const generateUUID = (event) => {
        event.preventDefault();
        axios.post('http://localhost:5000/api/notes/generateuuid')
            .then(res => {
                // console.log(res.data)
                setUUID(res.data);
                setVisibility(true);

            })
        console.log(UUID);

    }

    const redirect = () => {
        console.log(props);
        const path = `/${UUID}`;

        props.history.push(path);

    }

    const checkUUID = () => {
        axios.get(`http://localhost:5000/api/notes/checkUUID/${UUID}`)
            .then(res => {
                console.log(res.data);
                if (res.data)
                    setVisibility(false);
                else
                    setVisibility(true);
            })
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
                    <button className="btn purple" onClick={generateUUID}>generate uuid</button>
                    <input onChange={event => setUUID(event.target.value)} placeholder="url" />

                    <button className="btn green" onClick={checkUUID}>check</button>
                    <button className="btn gray" style={visibility ? { visibililty: 'visible' } : { display: 'none' }} onClick={redirect}>Create</button>
                    <br />
                    <h2>Your links:</h2>
                    <h2> {`http://localhost/` + UUID}</h2>

                    {/*
                Put the button Here
                */}

                </div>

            </div>



        </div>
    )
}

export default Home
