
// step 1 || GET HTML ELEMENTS
const chatBody = document.querySelector('.chat-body');
const userInput = document.getElementById('user-input')

// setp 2 || CREATE A FUNCTION TO ADD MESSAGE TO THE CHAT  🧑 🤖
function addMessage(text, sender = 'user'){
   const message = document.createElement('div');
   message.className = `message ${sender}`;
   message.innerHTML = `
    <div class='avatar'>${sender ==='user' ? '🧑' : '🤖'}</div>
    <div class='bubble'>${text}</div>
   `;
   chatBody.appendChild(message);
   chatBody.scrollTop= chatBody.scrollHeight;
}

// step 3 || AI ANSER GENERATING FUNCTION
function getAIResponse(msg){
    if(msg.toLowerCase().includes('hi')) return 'Hello, How may I help you today?';
    if(msg.toLowerCase().includes('how are you')) return 'I am just a program, but thanks for asking!';
    if(msg.toLowerCase().includes('what is html')) return 'HTML stands for HyperText Markup Language. It is the standard language for creating web pages.';
    if(msg.toLowerCase().includes('what is css')) return 'CSS stands for Cascading Style Sheets. It is used to style HTML elements on a web page.';
    if(msg.toLowerCase().includes('what is javascript?')) return 'JavaScript is a programming language that allows you to implement complex features on web pages. It is used for client-side scripting.';
    if(msg.toLowerCase().includes('what is ai')) return 'AI stands for Artificial Intelligence. It refers to the simulation of human intelligence in machines that are programmed to think and learn.';
    if(msg.toLowerCase().includes('how ai work')) return 'AI works by using algorithms and statistical models to analyze data, learn from it, and make decisions or predictions based on that data.';
    return "I'm not sure how to respond to that. Can you ask something else?";
}


// step 4 || CREATE A FUNCTION TO SEND MESSAGE
function sendMessage(){
    const msg = userInput.value.trim();
    if(!msg) return;
    addMessage(msg, 'user');
    userInput.value = ' ';
    setTimeout(() => {
        const reply = getAIResponse(msg);
        addMessage(reply, 'bot')
    }, 600)
}


