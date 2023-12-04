const colorBtn = document.getElementById('color-btn')
const colorPicker = document.getElementById('color-picker')
const colorMode = document.getElementById('color-select')
const colorScheme = document.getElementById('color-scheme')
const hexEl = document.getElementById('hex-el')
 
 
     
/*clearing both color palette and hex el values before getting the new color palette when the button is clicked*/ 
             
colorBtn.addEventListener('click', function(){
    colorScheme.innerHTML = ''
    hexEl.innerHTML = ''
    showColors()
})

 /* render the color color palette and hex el html */ 

function renderColor(dataObj) {
    const colorPicked = dataObj.colors.map(color => {
        colorScheme.innerHTML += 
        `<div class="color-display" style="background-color:${color.hex.value}"></div>`
         hexEl.innerHTML += 
         `<button class="hex" id="hex" data-color="${color.hex.value}">${color.hex.value}</button>`
    })
    return colorPicked 
}


/* get the color palette from the color api*/ 

function showColors() {
    const colorPicked = colorPicker.value.slice(1)
    fetch(`https://www.thecolorapi.com/scheme?hex=${colorPicked}&mode=${colorMode.value}&count=5`)
        .then(res => res.json())
        .then(data => renderColor(data))
}

 /* to copy the clicked hex */         

document.addEventListener("click", (e) => {
  if (e.target.id.includes("hex")) {
        navigator.clipboard.writeText(e.target.dataset.color)
    }
}); 
    

