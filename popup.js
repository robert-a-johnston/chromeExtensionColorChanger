const changeColor = document.getElementById('changeColorButton')
const buttonOptions = document.getElementById('buttonDiv')
const selectedClassName = "current"
const buttonColors = [ '#3aa757', '#e8453c', '#f9bb2d', '#4688f1']

chrome.storage.sync.get('color', ({ color })=> {
  changeColor.style.backgroundColor = color
})


function handleButtonClick(event) {
  const current = event.target.parentElement.querySelector(`.${selectedClassName}`)
  // on button click remove class name
  if(current && current !== event.target) {
    current.classList.remove(selectedClassName)
  }

  const color = event.target.dataset.color
  event.target.classList.add(selectedClassName)
  // takes color from above and sets it to local storage
  chrome.storage.sync.set({ color })
  changeColor.style.backgroundColor = color
}

function constructOptions(buttonColors) {
 chrome.storage.sync.get('color', (data) => {
   const currentColor = data.color
   for(let buttonColor of buttonColors) {
     const button = document.createElement('button')
     button.dataset.color = buttonColor
     button.style.backgroundColor = buttonColor

     if(buttonColor === currentColor) {
       button.classList.add(selectedClassName)
     }

     button.addEventListener('click', handleButtonClick)
     buttonOptions.appendChild(button)
   }
 }) 
}

constructOptions(buttonColors)