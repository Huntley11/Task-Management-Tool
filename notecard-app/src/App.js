import React, { useState, useEffect } from 'react';
import './App.css';

function NoteCard({ id, header, content, updateNote, deleteNoteCard }) {
  const handleHeaderChange = (e) => {
    updateNote(id, 'header', e.target.value);
  };

  const handleContentChange = (e) => {
    updateNote(id, 'content', e.target.value);
  };

  const handleDelete = () => {
    deleteNoteCard(id);
  };

  return (
    <div className="notecard">
      <input
        type="text"
        className="note-header"
        placeholder="Enter Task"
        value={header}
        onChange={handleHeaderChange}
      />
      <textarea
        className="note-content"
        placeholder="Enter your notes here"
        value={content}
        onChange={handleContentChange}
      />
      <button className="delete-button" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const savedNotes = localStorage.getItem('notes');
    if (savedNotes) {
      setNotes(JSON.parse(savedNotes));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const addNoteCard = () => {
    const newNoteCard = {
      id: Date.now(),
      header: '',
      content: '',
    };
    setNotes([...notes, newNoteCard]);
  };

  const deleteNoteCard = (id) => {
    const updatedNotes = notes.filter((noteCard) => noteCard.id !== id);
    setNotes(updatedNotes);
  };

  const updateNote = (id, field, value) => {
    const updatedNotes = notes.map((noteCard) => {
      if (noteCard.id === id) {
        return { ...noteCard, [field]: value };
      }
      return noteCard;
    });
    setNotes(updatedNotes);
  };

  return (
    <div className="App">
      <h1>Notecard App</h1>
      <div className="hold">
        <div className="column" id="column-1">
          <h2>Column 1</h2>
          <div className="notecard-container">
            {notes.map((noteCard, index) => (
              <NoteCard
                key={noteCard.id}
                id={noteCard.id}
                header={noteCard.header}
                content={noteCard.content}
                updateNote={updateNote}
                deleteNoteCard={deleteNoteCard}
              />
            ))}
          </div>
        </div>
        <div className="column" id="column-2">
          <h2>Column 2</h2>
          <div className="notecard-container"></div>
        </div>
        <div className="column" id="column-3">
          <h2>Column 3</h2>
          <div className="notecard-container"></div>
        </div>
      </div>
      <button className="add-button" onClick={addNoteCard}>
        Add Note
      </button>
    </div>
  );
}

export default App;
