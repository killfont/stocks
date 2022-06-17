let tabNbrStocks = [50, 30, 2]
let tabProduits = ["gros caillou : ", "phasme : ", "olive : "]
let cmd = document.querySelectorAll("input")
let tabContainerStock = [
    document.querySelector("#nbrcaillou"),
    document.querySelector("#nbrphasme"),
    document.querySelector("#nbrolive")
]

function showStocks(element, value) {
    element.innerHTML = value
}

function showProduits() {
    document.querySelector("#caillou").innerHTML = tabProduits[0]
    document.querySelector("#phasme").innerHTML = tabProduits[1]
    document.querySelector("#olive").innerHTML = tabProduits[2]
    document.querySelector("#inputcaillou").innerHTML = tabProduits[0]
    document.querySelector("#inputphasme").innerHTML = tabProduits[1]
    document.querySelector("#inputolive").innerHTML = tabProduits[2]
}

function sous() {
    for (let i = 0; i < tabNbrStocks.length; i++) {
        if (cmd[i].value == "") {
            cmd[i].value = 0
        }
        if (parseInt(cmd[i].value) <= tabNbrStocks[i]) {
            tabNbrStocks[i] = parseInt(tabNbrStocks[i]) - parseInt(cmd[i].value)
            if (tabNbrStocks[i] == 0) {
                showStocks(tabContainerStock[i], "plus de stock")
                cmd[i].value = 0
                cmd[i].disabled = "disabled"
              
            } else {
                showStocks(tabContainerStock[i], tabNbrStocks[i])
            }
        } else {
            showStocks(tabContainerStock[i], "erreur")
        }
    }
}


for (let i = 0; i < tabNbrStocks.length; i++) {
    showStocks(tabContainerStock[i], tabNbrStocks[i])
}




showProduits()
