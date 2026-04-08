
let flametemp = new Decimal("100")
let flameThresholdPow = new Decimal("1.3")

function flameFormula() {
    x = new Decimal("0")
    if (gamedata.trees.gte(gamedata.flameThreshold)) {
        x = gamedata.trees.div((gamedata.flameThreshold.mul(1.15)).pow(flameThresholdPow))
    }
    if (gamedata.logUpgrades.five.bought === true) {
        x = x.mul(gamedata.World.worlds.pow(1.25))
    }
    document.getElementById('flames').innerHTML = "Sacrifice all your logs for " + x.toFixed(2) + " Flames"
    return x
}

function flameSac() {
    flameFormula()
    if (gamedata.trees.gte(gamedata.flameThreshold)) {
        gamedata.flames = gamedata.flames.add(x)
        gamedata.trees = new Decimal("0")
        gamedata.BurnerCost = new Decimal("25")
        gamedata.burnerEffect = new Decimal("1")
        gamedata.treeCutterPrice = new Decimal("5")
        gamedata.Burners = new Decimal("0") 
        gamedata.treeCutters = new Decimal("0")
        gamedata.Paper = {
            paperCost: new Decimal("1250"),
            paperEffect: new Decimal("1"),
            papers: new Decimal("0"),
        }
        gamedata.Chair = {
            chairCost: new Decimal("15000"),
            chairs: new Decimal("0"),
            chairEffect: new Decimal("1")
        }
        if (gamedata.worldmilestones.three.unlocked === true) {
             treeAutomator = true
        }
        else {
            gamedata.treeAutomator = false
            gamedata.treeAutomatorPrice = new Decimal(1000)
            gamedata.treeAutomatorEffeciency = new Decimal(1100)
        }
        flameHeat()
        updateUI()
        document.getElementById('flameA').style.display = "flex"
    }
}

function flameHeatCalc() {
    y = new Decimal("0.01")
    y.mul(gamedata.flames.add(1))
    return y

}

function flameHeat() {
    setInterval(() => {
        if (gamedata.flames.gt("0")) {

            flameHeatCalc()
                gamedata.flameheat = gamedata.flameheat.add(y)
                flametemp = gamedata.flameheat.log(2)
                document.getElementById('flametempText').innerHTML = " Flame Temperature: " + flametemp.toFixed(2) + " K"
        if (gamedata.logUpgrades.five.bought === true) {
            document.getElementById('flameHeatText').innerHTML = " The temperature of the flames are multiplying log gain by " + ((gamedata.flameheat.mul(4)).pow(1.35)).toFixed(2) + "x"
        }
        else {
            document.getElementById('flameHeatText').innerHTML = " The temperature of the flames are multiplying log gain by " + (gamedata.flameheat.pow(1.35)).toFixed(2) + "x"
        }
               
        }

        
    }, 100) 
}