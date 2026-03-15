
let trees = 0
let treeGain = 1
let treeAutomator = false
let treeAutomatorEffeciency = 200
let treeAutomatorPrice = 50
let totaltrees = 0

function Treecut() {
    if (treeAutomator = false) {
    trees = trees + treeGain
    totaltrees = totaltrees + treeGain
    document.getElementById('IDd').innerHTML = trees + " logs"
    }
    else {
        setInterval (() => {
            trees = trees + treeGain
            totaltrees = totaltrees + treeGain
        }, treeAutomatorEffeciency
    )
    }

}

function BuyAutomator() {
    if (trees >= treeAutomatorPrice) 
        { if (treeAutomator = false)
             {
                treeAutomator = true
                treeAutomatorPrice = treeAutomatorPrice * 2.5
              }
              else { treeAutomatorEffeciency = treeAutomatorEffeciency / 1.1
                treeAutomatorPrice = treeAutomatorPrice * 2.5
              }
               
    }
    
    
}


