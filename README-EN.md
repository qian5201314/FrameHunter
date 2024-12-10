# FrameHunter

[🇨🇳 中文版本](README.md)

**FrameHunter** is a Chrome extension designed to extract all iframe URLs from the current page and provide convenient options to open or copy them.

---

## Features

- **Extract iframe URLs**: Quickly scan the current page and retrieve the `src` attributes of all iframes.
- **Detect empty `src`**: For iframes with no `src`, a message will display: `Current iframe src is empty`.
- **One-click actions**:
    - **Open**: Open the URL in a new tab.
    - **Copy**: Copy the URL to the clipboard.
- **Modern design**: A clean, user-friendly interface with automatic line breaks for long URLs and a fixed-width window for consistency.
- **User-friendly messaging**: If no iframes are found on the page, the plugin will display: `No iframes found on this page.`

---

## Installation

1. Download and unzip this project to your local machine.
2. Open the Chrome browser and navigate to [chrome://extensions](chrome://extensions).
3. Enable "Developer mode" in the top-right corner.
4. Click "Load unpacked" and select the folder containing the unzipped files.
5. After installation, you'll see the **FrameHunter** icon in your browser toolbar.

---

## How to Use

1. Open any webpage that contains iframes.
2. Click on the **FrameHunter** icon in the toolbar.
3. The popup will display:
    - The full URL of each iframe.
    - A message for empty iframes: `Current iframe src is empty`.
    - Buttons for each URL:
        - **Open**: Opens the URL in a new tab.
        - **Copy**: Copies the URL to the clipboard.

---

## Example Use Case

1. Visit a webpage with embedded content (e.g., ads, videos, maps).
2. Click on **FrameHunter** to view all iframe URLs on the page.
3. Choose an action:
    - **Open the URL** directly by clicking the `Open` button.
    - **Copy the URL** for saving or sharing using the `Copy` button.

---

## Notes

- **Cross-origin restriction**: Some iframe URLs may not display correctly due to cross-origin policies.
- **Privacy compliance**: FrameHunter only extracts iframe information from the current page and does not collect any user data.

---

## User Responsibility Statement

This plugin is intended for educational and research purposes only. The developer assumes no responsibility for any legal issues or disputes arising from its use. Users must ensure compliance with the following:

1. Adhere to the terms of use and privacy policies of target websites.
2. Abide by the laws and regulations of their respective countries or regions.
3. Use this plugin solely for retrieving publicly available iframe information and not for any unlawful activities.

This project is provided "as is" without any warranties, either expressed or implied, including but not limited to merchantability, fitness for a particular purpose, or non-infringement. Users assume all risks associated with using the plugin.

---

## License

This plugin is licensed under the [MIT License](LICENSE). You are free to use, modify, and distribute it.

---

Enjoy hunting frames with **FrameHunter**! 🎉
