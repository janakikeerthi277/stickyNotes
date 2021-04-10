import './Note.css'
import {useState,useReducer,useEffect} from 'react';
import {v4 as uuid} from 'uuid';
import axios from 'axios';
const initialNotesState = {
  lastNoteCreated: null,
  totalNotes: 0,
  notes: []
}

const initialFiltered = [] ;
const notesReducer = (prevState, action) => {
  switch (action.type) {
    case 'ADD_NOTE': {
      const newState = {
        lastNoteCreated: new Date().toTimeString().slice(0, 8),
        totalNotes: prevState.notes.length + 1,
        notes: [...prevState.notes, action.payload]
      };
      console.log('After add note', newState);
      return newState;
    }
    case 'DELETE_NOTE': {
      const newState = {
        ...prevState,
        totalNotes: prevState.notes.length - 1,
        notes: prevState.notes.filter(note => note.id !== action.payload.id)
      };
      axios.patch(`http://localhost:5000/api/notes/deletenote${window.location.pathname}/${action.payload.id}`
                  ).then(res=>{
                      console.log(res.data)}
                  )
      console.log('After delete note', newState);
      return newState;
    }
  }
}
const Note = (props) => {
  const [noteInput,setNoteInput] = useState('');
  
  const [notesState,dispatch] = useReducer(notesReducer,initialNotesState);

  const [filteredNotes, setFilteredNotes] = useState(initialFiltered);
  
  useEffect(() => {
    getAllNotes();
    }, []);

  const getAllNotes = () =>{
    axios.get(`http://localhost:5000/api/notes/readNotes${window.location.pathname}`)
    .then((response) => {
      const allNotes = response.data.notes;
      allNotes.map((note,index) => {
        const addNote = {
          id : note.uuid,
          text : note.body,
          rotate : Math.floor(Math.random() * 20),
        };
        dispatch({type:'ADD_NOTE',payload:addNote});
      })
      console.log(noteInput)
    })
    .catch(error => console.error(`Error: ${error}`));
  }
  
  const addNote = (event)=>{
    event.preventDefault();
    
    if (!noteInput) {
      return;
    }

    const newNote = {
      id: uuid(),
      text: noteInput,
      rotate: Math.floor(Math.random() * 20),
    };
    event.target.reset();    
    //setNoteInput('Sarath');
   // console.log(noteInput);
    dispatch({ type: 'ADD_NOTE', payload: newNote });
    // console.log()
    axios.patch(`http://localhost:5000/api/notes/addnote${window.location.pathname}`,
                    {
                        notes : [{uuid: newNote.id,
                              body: newNote.text}]
                    }).then(res=>{
                    console.log(res.data)}
                      )
    

  };

  const dropNote = (event) => {
    event.target.style.left = `${event.pageX - 50}px`;
    event.target.style.top = `${event.pageY - 50}px`;

  }

  const dragOver = event => {
    event.stopPropagation();
    event.preventDefault();
  }

  const searchQuery = () =>{
    if(props.searchTerm != '')
    {const test = notesState.notes.filter( note => note.text.toUpperCase().includes(props.searchTerm.toUpperCase()));
      setFilteredNotes(test) ;
    }
    else {
      setFilteredNotes(notesState.notes);
    }  
  }
  
  useEffect(()=>{
    searchQuery() ; 
  }, [notesState,props.searchTerm]);

  return (
    <div className="main" onDragOver={dragOver}>
      {/* header */}

      {/*body */}
      <form onSubmit={addNote} className="note-form">
        <textarea
          onChange={event => setNoteInput(event.target.value)}
          placeholder="Create a new Note..."></textarea>
        <button>Add Note</button>
      </form>

      {filteredNotes
        .map(note => (
          <div className="note"
            style={{ transform: `rotate(${note.rotate}deg)` }}
            draggable="true"
            onDragEnd={dropNote}
            key={note.id}>

            <div onClick={() => dispatch({ type: 'DELETE_NOTE', payload: note })} className="close">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
            <pre className="text">{note.text}</pre>
          </div>
        ))}

      {/* save button and delete button */}



    </div>
  )
}

export default Note;

