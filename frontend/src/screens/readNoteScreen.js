import '../components/Note.css'
import axios from 'axios'
import { useEffect, useState } from 'react';
const ReadNoteScreen = () => {
    let Initialnotes = [];
    const [notes,setNotes] = useState(Initialnotes);
    
    useEffect (()=>{
        getNotes(); }
        , []);

    const getNotes=() =>{
         axios.get(`http://localhost:5000/api/notes/${window.location.pathname}`)
        .then(res => {
                const result = res.data.notes ;
                if(res.data)
                setNotes(result);
                console.log(notes);
        })
        .catch(err =>{
            console.log(err);
        });
    }
        const dropNote = (event) => {
            event.target.style.left = `${event.pageX - 50}px`;
            event.target.style.top = `${event.pageY - 50}px`;
        
          }
        
          const dragOver = event => {
            event.stopPropagation();
            event.preventDefault();
          }
        if(notes.length > 0){
    return(
        <div className="main" onDragOver={dragOver}>
            {notes
            .map(note => (
                <div className="note"
                    // style={{ transform: `rotate(${note.rotate}deg)` }}
                    draggable="true"
                    onDragEnd={dropNote}
                    key={note.uuid}>

                    {/* <div > */}
                        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"> */}
                            {/* <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /> */}
                        {/* </svg> */}
                    {/* </div> */}
                    <pre className="text">{note.body}</pre>
                </div>
            ))}
    </div>
)
            }
            else{
                return (
                    <h2>No notes !!</h2>
                )
            }
          }
export default ReadNoteScreen;
