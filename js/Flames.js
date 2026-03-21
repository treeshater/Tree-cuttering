

 gamedata.Flames = {
    flames: new Decimal("0"),
    flameThreshold: new Decimal("1000"),
}

function flameFormula() {
    x = new Decimal("0")
    if (gamedata.trees.gte(gamedata.Flames.flameThreshold)) {
        x = gamedata.trees.div((gamedata.Flames.flameThreshold.pow(1.3)))
    }
    document.getElementById('flames').innerHTML = "Sacrifice all your logs for " + x.toFixed(2) + " Flames"
}

function flameSac() {
    flameFormula()
    if (gamedata.trees >= gamedata.Flames.flameThreshold) {
        gamedata.Flames.flames = gamedata.Flames.flames.add(x)
        document.getElementById('flamesCounter').innerHTML = gamedata.Flames.flames + " Flames"
    }
}