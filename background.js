let color = "#3AA757"

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color })
  console.log(`default background color set to ${color}`)
})