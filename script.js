// Connect to the server
const socket = io();

// Listen for incoming messages
socket.on('message', message => {
  displayMessage(message);
});

// Handle form submission
const chatForm = document.getElementById('chat-form');
const messageInput = document.getElementById('message-input');
chatForm.addEventListener('submit', e => {
  e.preventDefault();
  const message = messageInput.value;
  if (message.trim() !== '') {
    socket.emit('chatMessage', message);
    messageInput.value = '';
  }
});

// Display a new message
function displayMessage(message) {
  const chatMessages = document.getElementById('chat-messages');
  const messageElement = document.createElement('div');
  messageElement.innerText = message;
  chatMessages.appendChild(messageElement);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}