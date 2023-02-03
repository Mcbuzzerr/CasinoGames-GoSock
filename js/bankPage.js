const handleBack = () => {
    window.location.href = "../html/home.html"
}

const handleLoad = () => {
    if (localStorage.getItem("cash") === null) {
        localStorage.setItem("cash", 0)
    }
    if (localStorage.getItem("bankAccount") === null) {
        localStorage.setItem("bankAccount", 5000)
    }
    let cash = parseInt(localStorage.getItem("cash"))
    let bankAccount = parseInt(localStorage.getItem("bankAccount"))
    document.getElementById("cash").innerHTML = `Cash: $${cash}`
    let bankVal = document.getElementById("bankVal")
    if (bankAccount < 0) {
        bankVal.style.color = "red"
        bankVal.innerHTML = `-$${Math.abs(bankAccount)}`
    } else {
        bankVal.style.color = "white"
        document.getElementById("bankVal").innerHTML = `$${bankAccount}`
    }
}

const handleWithdraw = () => {
    const amount = parseInt(document.getElementById("cashOut").value)
    let cash = parseInt(localStorage.getItem("cash"))
    let bankAccount = parseInt(localStorage.getItem("bankAccount"))
    bankAccount -= amount
    cash += amount
    updateVals(cash, bankAccount)
}

const handleDeposit = () => {
    const amount = parseInt(document.getElementById("cashIn").value)
    let cash = parseInt(localStorage.getItem("cash"))
    let bankAccount = parseInt(localStorage.getItem("bankAccount"))
    if (amount <= cash) {
        bankAccount += amount
        cash -= amount
        updateVals(cash, bankAccount)
    } else {
        alert("Insufficent Funds")
    }
}

const updateVals = (cash, bankAccount) => {
    localStorage.setItem("cash", cash)
    localStorage.setItem("bankAccount", bankAccount)
    document.getElementById("cash").innerHTML = `Cash: $${cash}`
    let bankVal = document.getElementById("bankVal")
    if (bankAccount < 0) {
        bankVal.style.color = "red"
        bankVal.innerHTML = `-$${Math.abs(bankAccount)}`
    } else {
        bankVal.style.color = "white"
        document.getElementById("bankVal").innerHTML = `$${bankAccount}`
    }
}

let inputList = []
document.addEventListener("keyup", (event) => {
    console.log(event.key)
    inputList.push(event.key)
    if (inputList.length > 10) {
        inputList.shift()
    }
    if (inputList.join("") == "ArrowUpArrowUpArrowDownArrowDownArrowLeftArrowRightArrowLeftArrowRightba") {
        let cash = parseInt(localStorage.getItem("cash")) + 999999999
        let bankAccount = parseInt(localStorage.getItem("bankAccount")) + 999999999
        updateVals(cash, bankAccount)
    }
    // if (inputList == "ArrowUpArrowUpArrowDownArrowDownArrowLeftArrowRightArrowLeftArrowRightba") {
    //     window.location.href = "../html/cheat.html"
    // }
})
window.onload = handleLoad