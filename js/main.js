document.querySelector('header > h1').innerText = "Inspector Clouseau"
document.querySelector('header > h2').innerText = "The greatest detective of all time."


function reDisplay {
    

let windowSizes = `Window size is ${window.innerWidth} pixels wide by ${window.innerHeight} pixels tall`

let offset = `Window offset is ${window.screenX} from the left edge and ${window.screenY} pixels from the top of the display.`

let myWindow = document.querySelector('#myWindow').innerText = `${windowSizes} \n 
${offset}`
}
reDisplay()
