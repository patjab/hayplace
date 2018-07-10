document.addEventListener('DOMContentLoaded', () => {
  const gridContainerEl = document.querySelector(".grid-container")

    // Render the board
    for ( let row = 0; row < 10; row++ ) {
      for ( let col = 0; col < 10; col++ ) {
        const divSpotEl = document.createElement("div")
        divSpotEl.innerHTML = `a`
        divSpotEl.setAttribute("class", "grid-item")
        divSpotEl.setAttribute("data-row", row)
        divSpotEl.setAttribute("data-col", col)
        gridContainerEl.appendChild(divSpotEl)
      }
    }

  })
