
function playSong() {
    const songPlayer = document.getElementById("music");

    songPlayer.load();
    songPlayer.play();
}
let lastSentTime = 0;
const cooldownTime = 60000; // Set the cooldown time in milliseconds (e.g., 5000 milliseconds = 5 seconds)

function sendMail() {
    const currentTime = Date.now();
    if (currentTime - lastSentTime < cooldownTime) {
        alert("Please wait 60 seconds before sending another message!");
        return;
    }

    const inputElement = document.getElementById("mailtext");
    const textToSend = inputElement.value;
    const webhookUrl = "https://discord.com/api/webhooks/1133316379181842492/hCb02PWJNby1BFTXCYDzcJt7dPB-rCXYVMrKIlcuEW6wWrvv4rxF931d4I6LhzkuwIEP";
    const messageContent = textToSend;

    fetch(webhookUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            content: messageContent,
        }),
    })
    .then(response => {
        if (response.ok) {
            console.log("Webhook message sent successfully.");
            inputElement.value = ""; // Clear the input field after sending the message
            inputElement.placeholder = "Message sent successfully!";
            lastSentTime = Date.now();
        } else {
            console.error("Failed to send webhook message. Status:", response.status);
        }
    })
    .catch(error => {
        console.error("Error sending webhook message:", error);
    });
}
