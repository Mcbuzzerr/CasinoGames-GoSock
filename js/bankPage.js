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
    document.getElementById("bank").innerHTML = `Bank Account: $${bankAccount}`
}

const handleWithdraw = () => {
    const amount = parseInt(document.getElementById("cashOut").value)
    let cash = parseInt(localStorage.getItem("cash"))
    let bankAccount = parseInt(localStorage.getItem("bankAccount"))
    bankAccount -= amount
    cash += amount
    localStorage.setItem("cash", cash)
    localStorage.setItem("bankAccount", bankAccount)
    document.getElementById("cash").innerHTML = `Cash: $${cash}`
    document.getElementById("bank").innerHTML = `Bank Account: $${bankAccount}`
}

const handleDeposit = () => {
    const amount = parseInt(document.getElementById("cashIn").value)
    let cash = parseInt(localStorage.getItem("cash"))
    let bankAccount = parseInt(localStorage.getItem("bankAccount"))
    if (amount <= cash) {
        bankAccount += amount
        cash -= amount
        localStorage.setItem("cash", cash)
        localStorage.setItem("bankAccount", bankAccount)
        document.getElementById("cash").innerHTML = `Cash: $${cash}`
        document.getElementById("bank").innerHTML = `Bank Account: $${bankAccount}`
    } else {
        alert("Insufficent Funds")
    }
}

window.onload = handleLoad