const themes = [
  {
    name: "day",
    message: "aaaaaah! my eyes"
  },
  {
    name: "night",
    message: "much better"
  }];

const switchButton = document.getElementById("theme-switcher-button")
const themesList = document.getElementById("theme-dropdown")

const dayButton = document.getElementById("theme-day") 
const nightButton = document.getElementById("theme-night") 
const themeMessage = document.getElementById("theme-message") 

switchButton.addEventListener("click", ()=> {
  themesList.hidden = !themesList.hidden
  
  switchButton.setAttribute("aria-expanded", themesList.hidden ? "false" : "true")
})

dayButton.addEventListener("click", () => {
  document.body.classList.add("theme-day")
    document.body.classList.remove("theme-night")
  hideMenu()
  themeMessage.innerHTML=themes[0].message
})

nightButton.addEventListener("click", () => {
  document.body.classList.add("theme-night")
  document.body.classList.remove("theme-day")
  hideMenu()
  themeMessage.innerHTML=themes[1].message
})

function hideMenu() {
  themesList.hidden = true
  
  switchButton.setAttribute("aria-expanded", "false")
}