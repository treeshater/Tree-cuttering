let gamedata = {
 trees: new Decimal("0"),
 treeGain:   new Decimal("0"),
 treeAutomator:  false,
 treeAutomatorEffeciency: 1000,
 treeCutters:  new Decimal("0"),
 treeAutomatorPrice:  new Decimal("100000"),
 treeCutterPrice: new Decimal("2.5"),
 BurnerCost: new Decimal("12.5"),
 Burners: new Decimal("0"),
 burnerEffect: new Decimal("1"),
 flames: new Decimal("0"),
 flameThreshold: new Decimal("5000000"),
 flameheat: new Decimal("0"),
 Paper: {
    papers: new Decimal("0"),
    paperEffect: new Decimal("1"),
    paperCost: new Decimal("1250")
 },
 Chair: {
    chairs: new Decimal("0"),
    chairEffect: new Decimal("1"),
    chairCost: new Decimal("15000"),
 },
}



function treegainCalculate() {
    let x = new Decimal("0.10")
    if (gamedata.treeCutters.gte(1)) {
        x = x.add(gamedata.treeCutters.div(10))
    } 
    x = x.mul(gamedata.burnerEffect)
    if (gamedata.flameheat.gt("0")) {
        x = x.mul(gamedata.flameheat.pow(1.35))
    }
    x = x.mul(gamedata.Paper.paperEffect)
    x = x.pow(gamedata.Chair.chairEffect)
     gamedata.treeGain = x
}

function Treecut() {
    treegainCalculate()
    gamedata.trees = gamedata.trees.add(gamedata.treeGain)
    flameFormula()
    worldcheck()
    if (gamedata.trees.gte("10000000")) {
         document.getElementById('IDd').innerHTML = gamedata.trees.toExponential(2) + " logs" 
        }
    else {
        document.getElementById('IDd').innerHTML = gamedata.trees.toFixed(2) + " logs" 
        }

}

function check() {
    if (gamedata.treeAutomator === true) {
         setInterval (() => {
            treegainCalculate(gamedata.treeGain)
            flameFormula()
            worldcheck()
            gamedata.trees = gamedata.trees.add(gamedata.treeGain)
            if (gamedata.trees.gte("10000000")) {
             document.getElementById('IDd').innerHTML = gamedata.trees.toExponential(2) + " logs" }
            else {
            document.getElementById('IDd').innerHTML = gamedata.trees.toFixed(2) + " logs" 
            }

        }, gamedata.treeAutomatorEffeciency )
    }
}

function buyCutter() {
    if (gamedata.trees.gte(gamedata.treeCutterPrice)) {
        gamedata.trees = gamedata.trees.sub(gamedata.treeCutterPrice)
        gamedata.treeCutters = gamedata.treeCutters.add(1)
        gamedata.treeCutterPrice = gamedata.treeCutterPrice.mul(1.35)
            if (gamedata.trees.gte("10000000")) {
             document.getElementById('IDd').innerHTML = gamedata.trees.toExponential(2) + " logs" }
            else {
            document.getElementById('IDd').innerHTML = gamedata.trees.toFixed(2) + " logs" 
            }
        document.getElementById('cutterbutton').innerHTML = "Buy a cutter, cost: " + gamedata.treeCutterPrice.toFixed(2) + " logs, " + " Effect: Get " + gamedata.treeCutters.div(10).toFixed(2) + " more logs per tree"
    }
}

function BuyAutomator() {
    if (gamedata.trees.gte(gamedata.treeAutomatorPrice)) 
        { if (gamedata.treeAutomator === false)
             {
                gamedata.treeAutomator = true
                gamedata.trees = gamedata.trees.sub(gamedata.treeAutomatorPrice)
                if (gamedata.trees.gte("10000000")) {
             document.getElementById('IDd').innerHTML = gamedata.trees.toExponential(2) + " logs" }
            else {
            document.getElementById('IDd').innerHTML = gamedata.trees.toFixed(2) + " logs" 
            }
                gamedata.treeAutomatorPrice = gamedata.treeAutomatorPrice.mul(2.5)
                document.getElementById('automatorbutton').innerHTML = "Make the automator faster, cost: " + gamedata.treeAutomatorPrice.toFixed(2) + " logs, " + " Effect: Cut 1 tree every " + (gamedata.treeAutomatorEffeciency / 1000).toFixed(2) + " seconds"
               
                check()
              }
              else { gamedata.treeAutomatorEffeciency = gamedata.treeAutomatorEffeciency / 1.1
                   gamedata.trees = gamedata.trees.sub(gamedata.treeAutomatorPrice)
                    if (gamedata.trees.gte("10000000")) {
                        document.getElementById('IDd').innerHTML = gamedata.trees.toExponential(2) + " logs" }
                    else {
                        document.getElementById('IDd').innerHTML = gamedata.trees.toFixed(2) + " logs" 
            }
                   gamedata.treeAutomatorPrice = gamedata.treeAutomatorPrice.mul(2.75)
                   document.getElementById('automatorbutton').innerHTML = "Make the automator faster, cost: " + gamedata.treeAutomatorPrice.toFixed(2) + " logs, " + " Effect: Cut 1 tree every " + (gamedata.treeAutomatorEffeciency / 100).toFixed(2) + " seconds"
                   
              }
               
    }
    
    
}

function burnercalc() {
    let a = new Decimal("1")
    
    for (let i = 1; i <= gamedata.Burners; i++) {
        if (gamedata.logUpgrades.one.bought === true) {
                    a = a.mul(1.45)
        }
        else {
            a = a.mul(1.3)
        }

    }
    gamedata.burnerEffect = a
}



function BuyBurner() {
    if (gamedata.trees.gte(gamedata.BurnerCost)) {
        gamedata.Burners = gamedata.Burners.add(1)
        gamedata.trees = gamedata.trees.sub(gamedata.BurnerCost)
        gamedata.BurnerCost = gamedata.BurnerCost.mul(1.65)
        burnercalc()
            if (gamedata.trees.gte("10000000")) {
                document.getElementById('IDd').innerHTML = gamedata.trees.toExponential(2) + " logs" }
            else {
                document.getElementById('IDd').innerHTML = gamedata.trees.toFixed(2) + " logs" 
            }
        document.getElementById('burnerbutton').innerHTML = "Buy a burner, cost: " + gamedata.BurnerCost.toFixed(2) + " logs, " + "Effect: Get " + gamedata.burnerEffect.toFixed(2) + " times more logs "
        


    }
}


