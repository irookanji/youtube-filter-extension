# YouTube Title Filter Chrome Extension

This Chrome extension allows users to filter out YouTube video recommendations based on specified keywords in the video titles.

## Features

- Filter out YouTube videos from recommendations and search results based on user-defined keywords
- Easy-to-use popup interface for managing filter words
- Real-time filtering without page reload
- Case-insensitive matching

## Installation

1. Clone this repository or download the ZIP file and extract it.
2. Open Google Chrome and navigate to `chrome://extensions/`.
3. Enable "Developer mode" by toggling the switch in the top right corner.
4. Click "Load unpacked" and select the directory containing the extension files.

## Usage

1. Click on the extension icon in the Chrome toolbar to open the popup.
2. Enter the words or phrases you want to filter, one per line.
3. Click "Save" to apply the filter.
4. Browse YouTube, and videos containing the filtered words in their titles will be hidden.

## Files

- `manifest.json`: Extension manifest file
- `content.js`: Content script that performs the filtering on YouTube pages
- `popup.html`: HTML file for the extension popup
- `popup.js`: JavaScript file for handling user input in the popup

## Development

To modify or enhance the extension:

1. Make changes to the relevant files.
2. If you add new files, make sure to update the `manifest.json` file accordingly.
3. Reload the extension in `chrome://extensions/` by clicking the refresh icon.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

If you have any questions or suggestions, please open an issue in this repository.