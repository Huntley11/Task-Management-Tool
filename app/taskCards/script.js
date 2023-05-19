// Function to create a new notecard
function createNotecard(noteHeader, noteContent) {

  const notecard = document.createElement('div');
  notecard.classList.add('notecard');
  notecard.draggable = true;

  const headerInput = document.createElement('input');
  headerInput.classList.add('note-header');
  headerInput.placeholder = 'Enter Task';
  headerInput.value = noteHeader;

  const textarea = document.createElement('textarea');
  textarea.classList.add('note-content');
  textarea.placeholder = 'Enter your note here';
  textarea.value = noteContent;

  const deleteButton = document.createElement('button');
  deleteButton.classList.add('delete-button');
  deleteButton.textContent = 'Delete';

  // Add event listeners for drag and drop
  notecard.addEventListener('dragstart', dragStart);
  notecard.addEventListener('dragover', dragOver);
  notecard.addEventListener('dragleave', dragLeave);
  notecard.addEventListener('drop', drop);

  // Add event listener to the delete button
  deleteButton.addEventListener('click', function () {
    notecard.remove();
    saveNotes();
  });

  // Append elements to the notecard
  notecard.appendChild(headerInput);
  notecard.appendChild(textarea);
  notecard.appendChild(deleteButton);

  // Append the notecard to the container
  const container = document.querySelector('.notecard-container');
  container.appendChild(notecard);
}

// Function to save notes to Local Storage
function saveNotes() {
  const notecards = document.querySelectorAll('.notecard');
  const notes = [];
  notecards.forEach((notecard) => {
    const headerInput = notecard.querySelector('.note-header');
    const textarea = notecard.querySelector('.note-content');
    const note = {
      header: headerInput.value,
      content: textarea.value
    };
    notes.push(note);
  });
  localStorage.setItem('notes', JSON.stringify(notes));
}

// Function to load notes from Local Storage
function loadNotes() {
  const savedNotes = localStorage.getItem('notes');
  if (savedNotes) {
    const notes = JSON.parse(savedNotes);
    notes.forEach((note) => {
      createNotecard(note.header, note.content);
    });
  }
}

// Drag and drop event handlers
let dragStartIndex;

function dragStart(event) {
  const notecards = document.querySelectorAll('.notecard');
  dragStartIndex = Array.from(notecards).indexOf(this);
  event.dataTransfer.effectAllowed = 'move';
  event.dataTransfer.setData('text/plain', dragStartIndex);
  this.classList.add('dragging');
}

function dragOver(event) {
  event.preventDefault();
  this.classList.add('dragover');
  event.dataTransfer.dropEffect = 'move';
}

function dragLeave() {
  this.classList.remove('dragover');
}

function drop(event) {
  event.preventDefault();
  const dragEndIndex = Array.from(document.querySelectorAll('.notecard')).indexOf(this);
  swapNotecards(dragStartIndex, dragEndIndex);
  this.classList.remove('dragover');
}

function swapNotecards(fromIndex, toIndex) {
  const notecards = document.querySelectorAll('.notecard');
  const container = document.querySelector('.notecard-container');
  const fromNotecard = notecards[fromIndex];
  const toNotecard = notecards[toIndex];
  container.insertBefore(fromNotecard, toNotecard);
  saveNotes();
}

// Add event listener to the add button
const addButton = document.querySelector('#add-button');
addButton.addEventListener('click', function () {
  createNotecard('', '');
  saveNotes();
});

// Load notes on page load
window.addEventListener('load', loadNotes);

// Save notes when the window is unloaded (e.g., refresh or close)
window.addEventListener('beforeunload', saveNotes);