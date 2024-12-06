let filterWords = [];

// Function to filter videos
function filterVideos() {
  const videoElements = document.querySelectorAll(
    "ytd-rich-item-renderer, ytd-compact-video-renderer"
  );

  videoElements.forEach((video) => {
    const titleElement = video.querySelector("#video-title");
    if (titleElement) {
      const title = titleElement.textContent.toLowerCase();
      if (filterWords.some((word) => title.includes(word.toLowerCase()))) {
        video.style.display = "none";
      } else {
        video.style.display = "";
      }
    }
  });
}

// Load filter words from storage and apply filter
chrome.storage.sync.get(["filterWords"], function (result) {
  if (result.filterWords) {
    filterWords = result.filterWords;
    filterVideos();
  }
});

// Listen for changes in storage
chrome.storage.onChanged.addListener(function (changes, namespace) {
  if (changes.filterWords) {
    filterWords = changes.filterWords.newValue;
    filterVideos();
  }
});

// Observe DOM changes to catch dynamically loaded videos
const observer = new MutationObserver(filterVideos);
observer.observe(document.body, { childList: true, subtree: true });
