const msgBtn = document.querySelector('.msg-btn');
const partiBtn = document.querySelector('.parti-btn');
const notesBtn = document.querySelector('.notes-btn');

const chatTyping = document.getElementById('send');
const chat = document.getElementById('chat');
const participants = document.getElementById('participants');
const notes = document.getElementById('notes');

if(msgBtn !== null)
msgBtn.addEventListener('click',fMsg);

if(partiBtn !== null)
partiBtn.addEventListener('click',fParti);

if(notesBtn !== null)
notesBtn.addEventListener('click',fNotes);


function fMsg(){
    chat.style.display = 'block';
    participants.style.display ='none';
    notes.style.display ='none';

    partiBtn.classList.remove('chat-header-active');
    notesBtn.classList.remove('chat-header-active');
    msgBtn.classList.add('chat-header-active');
}


function fParti(){
    participants.style.display ='block';
    chat.style.display = 'none';
    chatTyping.style.display= 'none';
    notes.style.display ='none';

    partiBtn.classList.add('chat-header-active');
    msgBtn.classList.remove('chat-header-active');
    notesBtn.classList.remove('chat-header-active');
}

function fNotes(){
    chat.style.display = 'none';
    participants.style.display ='none';
    chatTyping.style.display= 'none';
    notes.style.display ='block';

    partiBtn.classList.remove('chat-header-active');
    notesBtn.classList.add('chat-header-active');
    msgBtn.classList.remove('chat-header-active');
}