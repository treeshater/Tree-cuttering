
let gamedata = {
 trees: new Decimal("0"),
 treeGain:   new Decimal("0"),
 treeAutomator:  false,
 treeAutomatorEffeciency: 1000,
 treeCutters:  new Decimal("0"),
 treeAutomatorPrice:  new Decimal(1100),
 treeCutterPrice: new Decimal("2.5"),
 BurnerCost: new Decimal("12.5"),
 Burners: new Decimal("0"),
 burnerEffect: new Decimal("1"),
 flames: new Decimal("0"),
 flameThreshold: new Decimal("5e6"),
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

function buyMax(n1 ,n2, func) {
    do {
       func
    }
    while (n1.gte(n2) === true)
}



function treegainCalculate() {
    let x = new Decimal("0.10")
    if (gamedata.treeCutters.gte(1)) {
        x = x.add(gamedata.treeCutters.div(10))
    } 
    x = x.mul(gamedata.burnerEffect)
    if (gamedata.flameheat.gt("0")) {
        if (gamedata.logUpgrades.five.bought === true) {
            x = (x.mul(gamedata.flameheat.mul(4)).pow(1.35))
        }
        else {
            x = x.mul(gamedata.flameheat.pow(1.35))
        }
    }
    x = x.mul(gamedata.Paper.paperEffect)
    x = x.pow(gamedata.Chair.chairEffect)
    if (gamedata.worldmilestones.three.unlocked === true) {
        x = x.mul(gamedata.World.worlds.add(1).pow(1.75))
    }
     gamedata.treeGain = x
}

function Treecut() {
    treegainCalculate()
    gamedata.trees = gamedata.trees.add(gamedata.treeGain)
    flameFormula()
    worldcheck()
    document.getElementById('IDd').innerHTML = formatscientific(gamedata.trees) + " logs"
}

function check() {
     setInterval (() => {
    if (gamedata.treeAutomator === true) {
        
            treegainCalculate(gamedata.treeGain)
            flameFormula()
            worldcheck()
            gamedata.trees = gamedata.trees.add(gamedata.treeGain)
            document.getElementById('IDd').innerHTML = formatscientific(gamedata.trees) + " logs"

        }
    }, gamedata.treeAutomatorEffeciency )
}

function buyCutter() {
    if (gamedata.trees.gte(gamedata.treeCutterPrice)) {
        gamedata.trees = gamedata.trees.sub(gamedata.treeCutterPrice)
        if (gamedata.logUpgrades.three.bought === true) {
            gamedata.treeCutters = gamedata.treeCutters.add(2)
        }
        else {
            gamedata.treeCutters = gamedata.treeCutters.add(1)
        }
        gamedata.treeCutterPrice = gamedata.treeCutterPrice.mul(1.35)
        document.getElementById('IDd').innerHTML = formatscientific(gamedata.trees) + " logs"
        document.getElementById('cutterbutton').innerHTML = "Buy a cutter, cost: " + formatscientific(gamedata.treeCutterPrice) + " logs, " + " Effect: Get " + formatscientific(gamedata.treeCutters.div(10)) + " more logs per tree"
    }
}

function BuyAutomator() {
    if (gamedata.trees.gte(gamedata.treeAutomatorPrice)) 
        { 
                gamedata.treeAutomator = true
                gamedata.trees = gamedata.trees.sub(gamedata.treeAutomatorPrice)
                document.getElementById('IDd').innerHTML = formatscientific(gamedata.trees) + " logs"
                check()
                gamedata.treeAutomatorPrice = gamedata.treeAutomatorPrice.mul(2.5)
                gamedata.treeAutomatorEffeciency = gamedata.treeAutomatorEffeciency / 1.1
                document.getElementById('automatorbutton').innerHTML = "Make the automator faster, cost: " + gamedata.treeAutomatorPrice.toFixed(2) + " logs, " + " Effect: Cut 1 tree every " + (gamedata.treeAutomatorEffeciency / 1000).toFixed(2) + " seconds"
                   
              }

}
              

               
    
function burnercalc() {
    let a = new Decimal("1")
    
    for (let i = 1; i <= gamedata.Burners; i++) {
        if (gamedata.logUpgrades.one.bought === true) {
                    a = a.mul(1.2)
        }
        else {
            a = a.mul(1.15)
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
        document.getElementById('IDd').innerHTML = formatscientific(gamedata.trees) + " logs"
        document.getElementById('burnerbutton').innerHTML = "Buy a burner, Cost: " + formatscientific(gamedata.BurnerCost) + " Logs, Effect: get " + formatscientific(gamedata.burnerEffect) + " times more logs"
       
        


    }
}

function formatscientific(num) {
    if (num.gte("1e6")) {
        return num.toExponential(2)
    }
    else {
        return num.toFixed(2)
    } 
}
