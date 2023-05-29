
function highlightSearchText() {
    const searchText = document.getElementById('search-text').value;
    const contentEditableDiv = document.getElementById('content-editable-div');
    const text = contentEditableDiv.innerText;

    // Clear previous highlights
    contentEditableDiv.innerHTML = text;

    // Highlight the searched text
    if (searchText.trim() !== '') {
      const regex = new RegExp(searchText, 'gi');
      const highlightedText = text.replace(regex, '<span class="highlight">$&</span>');
      contentEditableDiv.innerHTML = highlightedText;
    }
  }