let trees =  OmegaNum("0")
let treeGain =  OmegaNum("0")
let treeAutomator = false
let treeAutomatorEffeciency = 100
let treeCutters =  OmegaNum("0")
let treeAutomatorPrice =  OmegaNum("50")
let totaltrees =  OmegaNum("1")
let treeCutterPrice = OmegaNum("5")

function treegainCalculate() {
    x = OmegaNum("0.10")
    if (treeCutters >= 1) {
        x = x.add(treeCutters.div(10))
    } 
    x = x.mul(burnerEffect)
    treeGain = x
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
             totaltrees = totaltrees.add(treeGain)
                document.getElementById('IDd').innerHTML = trees.toFixed(2) + " logs"
          }, treeAutomatorEffeciency )
    }
}

function buyCutter() {
    if (trees >= treeCutterPrice) {
        trees = trees.sub(treeCutterPrice)
        treeCutters = treeCutters.add(1)
        treeCutterPrice = treeCutterPrice.mul(1.35)
        document.getElementById('IDd').innerHTML = trees.toFixed(2) + " logs"
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

let BurnerCost = OmegaNum("25")
let Burners = OmegaNum("0")
let burnerEffect = OmegaNum("1")

function BuyBurner() {
    if (trees >= BurnerCost) {
        Burners = Burners.add(1)
        trees = trees.sub(BurnerCost)
        BurnerCost = BurnerCost.mul(1.75)
        burnerEffect = burnerEffect.mul(1.25)
        document.getElementById('IDd').innerHTML = trees.toFixed(2) + " logs"

    }
}


