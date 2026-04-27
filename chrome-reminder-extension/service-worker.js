const ALARM_NAME = "simpleReminderAlarm";

chrome.alarms.onAlarm.addListener(async (alarm) => {
  if (alarm.name !== ALARM_NAME) return;

  const { reminderText = "Reminder" } = await chrome.storage.sync.get(["reminderText"]);

  chrome.windows.create({
    url: `reminder.html?text=${encodeURIComponent(reminderText)}`,
    type: "popup",
    width: 360,
    height: 220,
    focused: true
  });
});