const params = new URLSearchParams(window.location.search);
const text = params.get("text") || "Reminder";

document.getElementById("message").textContent = text;
document.getElementById("closeBtn").addEventListener("click", () => window.close());