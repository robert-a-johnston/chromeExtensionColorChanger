const changeColor = document.getElementById('changeColorButton')

chrome.storage.sync.get('color', ({ color })=> {
  changeColor.style.backgroundColor = color
})