const inputBoxes = document.getElementsByClassName("form-input")
const inputBoxesArray = [...inputBoxes]

inputBoxesArray.forEach(element => {
    element.addEventListener("blur", () => {
        element.classList.add("not-valid")
    })
})

const passBoxes = document.getElementsByClassName("pass")
const passBoxesArray = [...passBoxes]
const errormsg = document.getElementById('errormsg')

let pass1 = passBoxes[0]
let pass2 = passBoxes[1]

function checkPassword() {
    if (pass1.value == pass2.value) {
        errormsg.innerText = ""
        pass1.classList.remove("manualerror")
        pass2.classList.remove("manualerror")
    } else {
        errormsg.innerText = "Passwords must match."
        pass1.classList.add("manualerror")
        pass2.classList.add("manualerror")
    }
}

pass1.addEventListener('keyup', () => {
    if (pass2.value.length != 0) {
        checkPassword()
    }
})

pass2.addEventListener('keyup', checkPassword)