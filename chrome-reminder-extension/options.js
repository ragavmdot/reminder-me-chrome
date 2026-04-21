const reminderTextEl = document.getElementById("reminderText");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const saveBtn = document.getElementById("saveBtn");
const cancelBtn = document.getElementById("cancelBtn");
const statusEl = document.getElementById("status");
const charCountEl = document.getElementById("charCount");

const ALARM_NAME = "simpleReminderAlarm";

function updateCharCount() {
  charCountEl.textContent = reminderTextEl.value.length;
}

async function loadSettings() {
  const data = await chrome.storage.sync.get(["reminderText", "hours", "minutes"]);

  reminderTextEl.value = data.reminderText || "";
  hoursEl.value = data.hours ?? 0;
  minutesEl.value = data.minutes ?? 0;
  updateCharCount();
}

async function saveSettings() {
  const reminderText = reminderTextEl.value.trim();
  const hours = parseInt(hoursEl.value || "0", 10);
  const minutes = parseInt(minutesEl.value || "0", 10);

  if (!reminderText) {
    statusEl.textContent = "Please enter a reminder message.";
    statusEl.style.color = "#b00020";
    return;
  }

  if (reminderText.length > 100) {
    statusEl.textContent = "Reminder must be 100 characters or less.";
    statusEl.style.color = "#b00020";
    return;
  }

  if ((hours === 0 && minutes === 0) || hours < 0 || minutes < 0 || minutes > 59) {
    statusEl.textContent = "Please enter a valid timer greater than 0.";
    statusEl.style.color = "#b00020";
    return;
  }

  await chrome.storage.sync.set({ reminderText, hours, minutes });

  await chrome.alarms.clear(ALARM_NAME);
  chrome.alarms.create(ALARM_NAME, {
    delayInMinutes: hours * 60 + minutes
  });

  statusEl.textContent = "Reminder saved and timer started.";
  statusEl.style.color = "#1b5e20";
}

function cancelChanges() {
  loadSettings();
  statusEl.textContent = "Changes canceled.";
  statusEl.style.color = "#555";
}

reminderTextEl.addEventListener("input", updateCharCount);
saveBtn.addEventListener("click", saveSettings);
cancelBtn.addEventListener("click", cancelChanges);

document.addEventListener("DOMContentLoaded", loadSettings);