
let flametemp = new Decimal("100")

function flameFormula() {
    x = new Decimal("0")
    if (gamedata.trees.gte(gamedata.flameThreshold)) {
        x = gamedata.trees.div((gamedata.flameThreshold.pow(1.3)))
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
        flameHeat()
        document.getElementById('IDd').innerHTML = gamedata.trees.toFixed(2) + " logs"
        document.getElementById('cutterbutton').innerHTML = "Buy a cutter, cost: " + gamedata.treeCutterPrice.toFixed(2) + " logs, " + " Effect: Get " + gamedata.treeCutters.div(10).toFixed(2) + " more logs per tree"
        document.getElementById('burnerbutton').innerHTML = "Buy a burner, cost: " + gamedata.BurnerCost.toFixed(2) + " logs, " + "Effect: Get " + gamedata.burnerEffect.toFixed(2) + " times more logs "
        document.getElementById('flamesCounter').innerHTML = gamedata.flames.toFixed(2) + " Flames"
        document.getElementById('paperCount').innerHTML = gamedata.Paper.papers.toFixed(2) + " Papers"
        document.getElementById('paperEffect').innerHTML = "Currently: " + gamedata.Paper.paperEffect.toFixed(2) + " x gain"
        document.getElementById('paperCost').innerHTML = "Cost: " + gamedata.Paper.paperCost.toFixed(2) + " logs"
        document.getElementById("chairEffect").innerHTML = "Currently: " + gamedata.Chair.chairEffect.toFixed(2) + "^ More logs"
        document.getElementById('chairCount').innerHTML = gamedata.Chair.chairs.toFixed(2) + " Chairs"
        document.getElementById('chairCost').innerHTML = "Cost: " + gamedata.Chair.chairCost.toFixed(2) + " logs"
        document.getElementById('flameA').style.display = "flex"
    }
}

function flameHeatCalc() {
    y = new Decimal("0.01")
    if (gamedata.flames.gt("0")) {
        y.mul(gamedata.flames.mul(10))
    }
    return y

}

function flameHeat() {
    if (gamedata.flames.gt("0")) {
        setInterval(() => {
            flameHeatCalc()
                gamedata.flameheat = gamedata.flameheat.add(y)
                flametemp = gamedata.flameheat.pow(1.1)
                document.getElementById('flametempText').innerHTML = " Flame Temperature: " + flametemp.toFixed(2) + " K"
                document.getElementById('flameHeatText').innerHTML = " The temperature of the flames are affecting log gain by " + gamedata.flameheat.toFixed(2) + "x"
        }, 100) 

        
    }
}