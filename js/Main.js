let gamedata = {
 trees: new Decimal("0"),
 treeGain:   new Decimal("0"),
 treeAutomator:  false,
 treeAutomatorEffeciency: 100,
 treeCutters:  new Decimal("0"),
 treeAutomatorPrice:  new Decimal("50"),
 treeCutterPrice: new Decimal("5"),
 BurnerCost: new Decimal("25"),
 Burners: new Decimal("0"),
 burnerEffect: new Decimal("1"),
 lames: new Decimal("0"),
 flameThreshold: new Decimal("1000"),
 flameheat: new Decimal("0")
}


function treegainCalculate() {
    x = new Decimal("0.10")
    if (gamedata.treeCutters.gte(1)) {
        x = x.add(gamedata.treeCutters.div(10))
    } 
    x = x.mul(gamedata.burnerEffect)
    if (gamedata.flameheat.gt("0")) {
        x = x.mul(gamedata.flameheat.pow(1.35))
    }
    gamedata.treeGain = x
}

function Treecut() {
    treegainCalculate(gamedata.treeGain)
    gamedata.trees = gamedata.trees.add(gamedata.treeGain)
    flameFormula()
       document.getElementById('IDd').innerHTML = gamedata.trees.toFixed(2) + " logs"

}

function check() {
    if (gamedata.treeAutomator === true) {
         setInterval (() => {
            treegainCalculate(gamedata.treeGain)
            flameFormula()
             gamedata.trees = gamedata.trees.add(gamedata.treeGain)
                document.getElementById('IDd').innerHTML = gamedata.trees.toFixed(2) + " logs"
          }, gamedata.treeAutomatorEffeciency )
    }
}

function buyCutter() {
    if (gamedata.trees.gte(gamedata.treeCutterPrice)) {
        gamedata.trees = gamedata.trees.sub(gamedata.treeCutterPrice)
        gamedata.treeCutters = gamedata.treeCutters.add(1)
        gamedata.treeCutterPrice = gamedata.treeCutterPrice.mul(1.35)
        document.getElementById('IDd').innerHTML = gamedata.trees.toFixed(2) + " logs"
        document.getElementById('cutterbutton').innerHTML = "Buy a cutter, cost: " + gamedata.treeCutterPrice.toFixed(2) + " logs, " + " Effect: Get " + gamedata.treeCutters.div(10).toFixed(2) + " logs per tree"
    }
}

function BuyAutomator() {
    if (gamedata.trees.gte(gamedata.treeAutomatorPrice)) 
        { if (gamedata.treeAutomator === false)
             {
                gamedata.treeAutomator = true
                gamedata.trees = gamedata.trees.sub(gamedata.treeAutomatorPrice)
                document.getElementById('IDd').innerHTML = gamedata.trees.toFixed(2) + " logs"
                gamedata.treeAutomatorPrice = gamedata.treeAutomatorPrice.mul(2.5)
                document.getElementById('automatorbutton').innerHTML = "Make the automator faster, cost: " + gamedata.treeAutomatorPrice.toFixed(2) + " logs, " + " Effect: Cut 1 tree every " + (gamedata.treeAutomatorEffeciency / 1000).toFixed(2) + " seconds"
               
                check()
              }
              else { gamedata.treeAutomatorEffeciency = gamedata.treeAutomatorEffeciency / 1.1
                   gamedata.trees = gamedata.trees.sub(gamedata.treeAutomatorPrice)
                   document.getElementById('IDd').innerHTML = gamedata.trees.toFixed(2) + " logs"
                   gamedata.treeAutomatorPrice = gamedata.treeAutomatorPrice.mul(2.5)
                   document.getElementById('automatorbutton').innerHTML = "Make the automator faster, cost: " + gamedata.treeAutomatorPrice.toFixed(2) + " logs, " + " Effect: Cut 1 tree every " + (gamedata.treeAutomatorEffeciency / 100).toFixed(2) + " seconds"
                   
              }
               
    }
    
    
}



function BuyBurner() {
    if (gamedata.trees.gte(gamedata.BurnerCost)) {
        gamedata.Burners = gamedata.Burners.add(1)
        gamedata.trees = gamedata.trees.sub(gamedata.BurnerCost)
        gamedata.BurnerCost = gamedata.BurnerCost.mul(1.75)
        gamedata.burnerEffect = gamedata.burnerEffect.mul(1.25)
        document.getElementById('IDd').innerHTML = gamedata.trees.toFixed(2) + " logs"
        document.getElementById('burnerbutton').innerHTML = "Buy a burner, cost: " + gamedata.BurnerCost.toFixed(2) + " logs, " + "Effect: Get " + gamedata.burnerEffect.toFixed(2) + " times more logs "
        


    }
}


