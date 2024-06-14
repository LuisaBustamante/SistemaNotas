import React from 'react';
import { useState } from 'react';

const NoteItem = ({ subject, grade, onEditNote, onDeleteNote, id }) => {
  const [editing, setEditing] = useState(false);
  const [newSubject, setNewSubject] = useState(subject);
  const [newGrade, setNewGrade] = useState(grade);

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSave = () => {
    onEditNote(id, { subject: newSubject, grade: Number(newGrade) });
    setEditing(false);
  };

  const handleCancel = () => {
    setEditing(false);
  };

  const handleDelete = () => {
    if (window.confirm('¿Estás seguro de que deseas eliminar esta nota?')) {
      onDeleteNote(id);
    }
  };

  return (
    < div className="button-container">
    <li>
      {editing ? (
        <>
          <input
            type="text"
            placeholder="Nombre de la materia"
            value={newSubject}
            onChange={(e) => setNewSubject(e.target.value)}
            className="input-field"
          />
          <input
            type="number"
            placeholder="Nota final"
            value={newGrade}
            onChange={(e) => setNewGrade(e.target.value)}
            className="input-field"
          />
          <button type="buttonSave" onClick={handleSave}>
            Guardar
          </button>
          <button type="buttonCancel" onClick={handleCancel}>
            Cancelar
          </button>
        </>
      ) : (
        <>
          <strong>{subject}:</strong> {grade}
          <button type="buttonEdit" onClick={handleEdit} className="form-button"  >Editar</button>
        </>
      )}
      <button type="buttonDelete" onClick={handleDelete} className="form-button" >Eliminar</button>
    </li>  </div>

  );
};

export default NoteItem;