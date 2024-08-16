import { useState, useEffect } from 'react';
import { HashRouter } from 'react-router-dom';
import NoteForm from './NoteForm';
import NoteList from './NoteList';

const App = () => {
  const [notes, setNotes] = useState([]);
  const [editingNote, setEditingNote] = useState(null);

  useEffect(() => {
    const savedNotes = localStorage.getItem('notes');
    if (savedNotes) {
      setNotes(JSON.parse(savedNotes));
    }
  }, []); // No cambia, solo se ejecuta una vez

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]); // Se ejecuta cada vez que cambia el estado de notes

  const handleAddNote = (note) => {
    setNotes([...notes, { id: new Date().getTime(), ...note }]);
  };

  const handleEditNote = (id, updatedNote) => {
    setNotes(notes.map(note => (note.id === id ? { ...note, ...updatedNote } : note)));
  };

  const handleDeleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  const averageGrade =
    notes.length > 0
      ? notes.reduce((total, note) => total + note.grade, 0) / notes.length
      : 0;

  return (
    <HashRouter>
      <div className='container'>
        <h1>Gestor de notas</h1>
        <div className="note-form-list-container">
          <NoteForm onAddNote={handleAddNote} note={editingNote} onEditNote={handleEditNote} />
          <NoteList notes={notes} onEditNote={handleEditNote} onDeleteNote={handleDeleteNote} />
        </div>
        <p>Promedio de calificaciones: {averageGrade.toFixed(2)}</p>
      </div>
    </HashRouter>
  );
}

export default App;
