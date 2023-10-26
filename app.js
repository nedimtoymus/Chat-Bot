const chatContainer = document.getElementById('chat');
const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('send-button');
const clearButton = document.getElementById('clear-button');

sendButton.addEventListener('click', sendMessage);
clearButton.addEventListener('click', clearChat);

userInput.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    const userMessage = userInput.value;
    userInput.value = '';

    addMessage('You', userMessage);

   
    if (userMessage.toLowerCase().includes('hello')) {
        addMessage('Chatbot', 'Hello! How can I help you?');
    } else if (userMessage.toLowerCase().includes('what is javascript')) {
        addMessage('Chatbot', 'JavaScript is a scripting language that enables you to create dynamically updating content, control multimedia, animate images, and pretty much everything else. (Okay, not everything, but it is amazing what you can achieve with a few lines of JavaScript code.)');
    } else if (userMessage.toLowerCase().includes('how are you' )) {
        addMessage('Chatbot', 'I am a chatbot so I have no emotions, but I am ready to help you!');
    }  else if (userMessage.toLowerCase().includes('what is array' )) {  
        addMessage('Chatbot', 'Arrays are generally described as "list-like objects"; they are basically single objects that contain multiple values stored in a list.');
    }  else if (userMessage.toLowerCase().includes('thank you' )) {  
        addMessage('Chatbot', 'You are welcome. I am happy to help you.');
    }  else  {
        addMessage('Chatbot', 'I\'m sorry, I don\'t understand this question. Would you like to ask another question?');
    }
}

function clearChat() {
    chatContainer.innerHTML = '';
}

function addMessage(sender, message) {
    const messageElement = document.createElement('div');
    messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
    chatContainer.appendChild(messageElement);
    chatContainer.scrollTop = chatContainer.scrollHeight;
}
