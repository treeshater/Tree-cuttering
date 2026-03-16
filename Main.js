


let trees =  OmegaNum("0")
let treeGain =  OmegaNum("0.10")
let treeAutomator = false
let treeAutomatorEffeciency = 100
let treeCutters =  OmegaNum("0")
let treeAutomatorPrice =  OmegaNum("50")
let totaltrees =  OmegaNum("1")

function treegainCalculate(x) {
    x = OmegaNum(0.10)
    if (treeCutters >= 1) {
        x.add((treeCutters).div(10))
    } 
}

function Treecut() {
    treegainCalculate(treeGain)
    trees = trees.add(treeGain)
    totaltrees = totaltrees.add(treeGain)
       document.getElementById('IDd').innerHTML = trees.toFixed(2) + " logs"

}

function check() {
    if (treeAutomator === true) {
         setInterval (() => {
            treegainCalculate(treeGain)
             trees = trees.add(treeGain)
             Math.round(trees * 10 ^ 2) / 10 ^ 2
             totaltrees = totaltrees.add(treeGain)
                document.getElementById('IDd').innerHTML = trees.toFixed(2) + " logs"
          }, treeAutomatorEffeciency )
    }
}

function BuyAutomator() {
    if (trees >= treeAutomatorPrice) 
        { if (treeAutomator === false)
             {
                treeAutomator = true
                trees = trees.sub(treeAutomatorPrice)
                document.getElementById('IDd').innerHTML = trees.toFixed(2) + " logs"
                treeAutomatorPrice = treeAutomatorPrice.mul(2.5)
                check()
              }
              else { treeAutomatorEffeciency = treeAutomatorEffeciency / 1.1
                   trees = trees.sub(treeAutomatorPrice)
                   document.getElementById('IDd').innerHTML = trees.toFixed(2) + " logs"
                   treeAutomatorPrice = treeAutomatorPrice.mul(2.5)
              }
               
    }
    
    
}

let treeCutterPrice = OmegaNum(5)
function buyCutter() {
    if (trees >= treeCutterPrice) {
        trees.sub(treeCutterPrice)
        treeCutters.add(1)
        treeCutterPrice.mul(1.35)
        document.getElementById('IDd').innerHTML = trees.toFixed(2) + " logs"
    }
}
