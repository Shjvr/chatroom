function sendMessage() {
  var usernameElement = document.getElementById("username");
  var inputElement = document.getElementById("input");

  var username = usernameElement.value.trim();
  var message = inputElement.value.trim();

  if (username && message) {
    var chatboxElement = document.getElementById("chatbox");
    var newMessageElement = document.createElement("p");
    newMessageElement.textContent = username + ": " + message;
    chatboxElement.appendChild(newMessageElement);

    inputElement.value = "";
  }
}

function handleKeyDown(event) {
  if (event.key === "Enter") {
    sendMessage();
    event.preventDefault();
  }
}
