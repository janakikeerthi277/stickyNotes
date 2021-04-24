import './NoteScreen.css'
import Note from '../components/Note'
import Header from '../components/Header'
import axios from 'axios';
import { useEffect, useState } from 'react'
const NoteScreen = (props) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [isValid, setisValid] = useState(false);
    const getAllNotes = async () => {
        try {
            console.log("getAllNotes called");
            const test = await axios.get(`http://localhost:5000/api/notes/readNotes${window.location.pathname}`)
            console.log(test.data)
            if (test.data === "") {
                props.history.replace('');
            }
            else {
                setisValid(true);
            }

        }
        catch (error) {
            console.error(`Error: ${error}`)
        };

    }
    useEffect(() => {
        console.log("use Effect")
        getAllNotes()
    }, []);
    return (
        <>
            <div>
                {isValid && <div className="notescreen">
                    <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                    <Note searchTerm={searchTerm} props={props} />
                </div>}
            </div>
        </>
    )
}

export default NoteScreen
