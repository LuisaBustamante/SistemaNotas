import { useState } from 'react';

const NoteForm = ({ onAddNote, onEditNote, note }) => {
  const [subject, setSubject] = useState(note ? note.subject : '');
  const [grade, setGrade] = useState(note ? note.grade.toString() : '');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!subject.trim() || !grade.trim()) {
      alert('Por favor, rellene todos los campos.');
      return;
    }
    if (note) {
      onEditNote(note.id, { ...note, subject, grade: Number(grade) });
    } else {
      onAddNote({ subject, grade: Number(grade) });
    }
    setSubject('');
    setGrade('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ width: '100%' }}>
      <input
        type="text"
        placeholder="Nombre de la materia"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Nota final"
        value={grade}
        onChange={(e) => setGrade(e.target.value)}
        required
      />
      <div className="form-actions">
      <button type="submit" >{note ? 'Editar nota' : 'Agregar nota'}</button>
      </div>
    </form>
  );
};

export default NoteForm;