import './NoteScreen.css'
import Note from '../components/Note'
import Header from '../components/Header'
import { useState } from 'react'
const NoteScreen = () => {
    const[searchTerm, setSearchTerm] = useState('');
    return (
        <div className="notescreen">
                <Header searchTerm ={searchTerm} setSearchTerm={setSearchTerm} />
                <Note searchTerm = {searchTerm}/>
        </div>
    )
}

export default NoteScreen
