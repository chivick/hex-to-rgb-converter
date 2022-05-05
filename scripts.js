// A function that receives an hex color code as argument and return a RGB color code
function getRGB(hex){
  hex = Array.from(hex) // Converts the string argument to an array
  hex = hex.slice(1) // Removes the # from the input
  const hexarr = []
  hexarr.push(hex.slice(0,2)) // Pushes the first two strings in the empty array "hexarr"
  hexarr.push(hex.slice(2,4)) // Pushes the next two strings
  hexarr.push(hex.slice(4)) // Pushes the remaining two strings
  
  const r = parseInt(hexarr[0].join(""),16) // Joins the first two strings, and convert from base 16 
  
  const g = parseInt(hexarr[1].join(""),16) // -----
  
  const b = parseInt(hexarr[2].join(""),16) // Joins the last two strings, and convert from base 16
  
  const result = `rgb(${r}, ${g}, ${b})` // Stores all values in the variable
  
  return result
}

// Adds an event listener to the button in the index.html
document.querySelector("button").addEventListener("click",()=>{

  document.getElementById("result").innerHTML = getRGB(document.querySelector("input[type=text]").value)

})
