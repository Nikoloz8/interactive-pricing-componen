let value = document.querySelector("h2")
let input = document.getElementById("input")
input.addEventListener("input", () => {
    if (input.value <= 9) {
        value.innerHTML = `$0${input.value}.00 <span>/ month</span>`
    } else {
        value.innerHTML = `$${input.value}.00 <span>/ month</span>`
    }
})

let viewBill = document.querySelector(".views-bill")
let rangeContainer = document.querySelector(".range-container")

let cut = document.querySelector("h6")

function moveChild() {
    if (window.innerWidth <= 400) {
        cut.textContent = "25%"
    } else {
        cut.textContent = "25% discount"
    }
    if (window.innerWidth <= 600) {
        if (!viewBill.contains(input)) {
            viewBill.appendChild(input);
        }
    } else {
        if (!rangeContainer.contains(input)) {
            rangeContainer.appendChild(input);
        }
    }
}



moveChild()

window.addEventListener("resize", moveChild)
