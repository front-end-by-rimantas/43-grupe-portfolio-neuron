//chat bot js kodas

const chatToggleDOM = document.getElementById('chat-toggle');

const chatExitDOM = document.getElementById('exit');

chatToggleDOM.onclick = function chatChange() {
    let chatBoxDOM = document.getElementById('chat-box');
    chatBoxDOM.classList.toggle('chat-hidden');
}

chatExitDOM.onclick = function chatChange() {
    let chatBoxDOM = document.getElementById('chat-box');
    chatBoxDOM.classList.toggle('chat-hidden');
}