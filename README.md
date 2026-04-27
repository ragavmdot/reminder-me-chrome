# Reminder Me Chrome Extension

A simple Chrome extension that helps you set reminders directly from your browser.

## Features

1. Set quick reminders with customizable messages and times
2. Popup interface for easy access
3. Options page to configure default settings
4. Background service worker to manage notifications

## Installation

1. Download or clone this repository.
2. Open Chrome and navigate to `chrome://extensions/`.
3. Enable "Developer mode" in the top right corner.
4. Click "Load unpacked" and select the `chrome-reminder-extension` folder from this repository.
5. The extension should now be installed and visible in your extensions list.

## Usage

1. Click the extension icon in the toolbar to open the reminder popup.
2. Enter your reminder message and select a time.
3. Click "Set Reminder" to schedule it.
4. You'll receive a notification when the time comes.
5. Use the options page to customize default behaviors.

## Development

To modify the extension:

1. Edit the files in the `chrome-reminder-extension` directory.
2. Reload the extension in `chrome://extensions/` after making changes.

## Files Structure

1. `manifest.json`: Extension manifest file
2. `service-worker.js`: Background script for handling reminders
3. `reminder.html` & `reminder.js`: Popup interface
4. `options.html` & `options.js`: Options page
5. `icons/`: Extension icons

## Permissions

This extension requires the following permissions:

1. `storage`: To save reminder settings
2. `notifications`: To display reminder notifications

## License

[Add your license here, e.g., MIT]