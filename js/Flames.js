
function flameFormula() {
    x = new Decimal("0")
    if (gamedata.trees.gte(gamedata.flameThreshold)) {
        x = gamedata.trees.div((gamedata.flameThreshold.pow(1.3)))
    }
    document.getElementById('flames').innerHTML = "Sacrifice all your logs for " + x.toFixed(2) + " Flames"
}

function flameSac() {
    flameFormula()
    if (gamedata.trees >= gamedata.flameThreshold) {
        gamedata.flames = gamedata.flames.add(x)
        gamedata.trees = Decimal("0")
        gamedata.BurnerCost = Decimal("25")
        gamedata.treeCutterPrice = Decimal("5")
        gamedata.Burners = Decimal("0")
        gamedata.treeCutters = Decimal("0")
        document.getElementById('flamesCounter').innerHTML = gamedata.flames.toFixed(2) + " Flames"
    }
}

function flameHeatCalc() {
    y = Decimal("0.01")
    if (gamedata.flames.gt("0")) {
        x.mul(gamedata.flames.mul(10).pow(1.35))
    }
}

function flameHeat() {
    if (gamedata.flames.gt("0")) {
        setInterval(() => {
            flameHeatCalc()
                gamedata.flameheat = gamedata.flameheat.add(y)
        }, 100) 

        
    }
}