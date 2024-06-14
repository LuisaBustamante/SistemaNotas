import React from 'react';
import NoteItem from './NoteItem';

const NoteList = ({ notes, onEditNote, onDeleteNote }) => {
  return (
    <ul>
      {notes.map((note) => (
        <NoteItem
          key={note.id}
          id={note.id}
          subject={note.subject}
          grade={note.grade}
          onEditNote={onEditNote}
          onDeleteNote={onDeleteNote}
        />
      ))}
    </ul>
  );
};

export default NoteList;