
let trees = 0
let treeGain = 1
let treeAutomator = false
let treeAutomatorEffeciency = 100
let treeAutomatorPrice = 50
let totaltrees = 0

function Treecut() {
    trees = trees + treeGain
    totaltrees = totaltrees + treeGain
    document.getElementById('IDd').innerHTML = trees + " logs"

}

function check() {
    if (treeAutomator === true) {
         setInterval (() => {
             trees = (trees * 10 + treeGain) / 10
              totaltrees = (totaltrees * 10 + treeGain * 10) / 10
                document.getElementById('IDd').innerHTML = trees + " logs"
          }, treeAutomatorEffeciency )
    }
}

function BuyAutomator() {
    if (trees >= treeAutomatorPrice) 
        { if (treeAutomator === false)
             {
                treeAutomator = true
                trees = trees - treeAutomatorPrice
                document.getElementById('IDd').innerHTML = trees + " logs"
                treeAutomatorPrice = treeAutomatorPrice * 2.5
                check()
              }
              else { treeAutomatorEffeciency = treeAutomatorEffeciency / 1.1
                   trees = trees - treeAutomatorPrice
                   document.getElementById('IDd').innerHTML = trees + " logs"
                   treeAutomatorPrice = treeAutomatorPrice * 2.5
              }
               
    }
    
    
}
