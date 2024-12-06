document.addEventListener("DOMContentLoaded", function () {
  const textarea = document.getElementById("filterWords");
  const saveButton = document.getElementById("saveButton");

  // Load existing filter words
  chrome.storage.sync.get(["filterWords"], function (result) {
    if (result.filterWords) {
      textarea.value = result.filterWords.join("\n");
    }
  });

  // Save filter words
  saveButton.addEventListener("click", function () {
    const filterWords = textarea.value
      .split("\n")
      .filter((word) => word.trim() !== "");
    chrome.storage.sync.set({ filterWords: filterWords }, function () {
      console.log("Filter words saved");
    });
  });
});
