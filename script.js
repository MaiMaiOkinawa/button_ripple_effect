const buttons = document.querySelectorAll('.ripple')

buttons.forEach(button => {
  button.addEventListener('click', function(e){
    //it's getting where we click in the entire viewport.
    const x = e.clientX
    const y = e.clientY

    // The element that that the event fires off of - btn location
    const buttonTop = e.target.offsetTop
    const buttonLeft = e.target.offsetLeft

    // Calculate the target location in the button
    const xInside = x - buttonLeft
    const yInside = y - buttonTop

    // Create a spam element in HTML and add a circle class
    const circle = document.createElement('span')
    circle.classList.add('circle')

    // Getting a clicked location value and apply to CSS
    circle.style.top = yInside + 'px'
    circle.style.left = xInside + 'px'

    //Add circles 
    // Make sure you don't use FAT ARROW func when you use 'this'
    this.appendChild(circle)

    // Remove added circles added in DOM
    setTimeout(() => circle.remove(), 500)
  })
})


// <<--- CLIENTX & Y --->>
// https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/clientX

// <<--- e.TARGET --->>
//https://developer.mozilla.org/en-US/docs/Web/API/Event/target