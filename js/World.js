gamedata.World = {
    worlds: new Decimal("0"),
    worldcap: new Decimal("3.04e13")
 }

 function worldcheck() {
    if (gamedata.trees.gte(gamedata.World.worldcap)) {
        gamedata.treeGain = new Decimal("0")
        document.getElementById('WorldTab').style.display = "flex"
        document.getElementById('worldResetButton').style.display = "flex"
    }
 }

function worldReset() {
    if (gamedata.trees.gte(gamedata.World.worldcap)) {
        gamedata.World.worlds = gamedata.World.worlds.add(1)
        gamedata.World.worldcap = gamedata.World.worldcap.pow(1.05)
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
        gamedata.flameHeat = new Decimal("0")
        flameHeat()
        document.getElementById('IDd').innerHTML = gamedata.trees.toFixed(2) + " logs"
        document.getElementById('cutterbutton').innerHTML = "Buy a cutter, cost: " + gamedata.treeCutterPrice.toFixed(2) + " logs, " + " Effect: Get " + gamedata.treeCutters.div(10).toFixed(2) + " more logs per tree"
        document.getElementById('burnerbutton').innerHTML = "Buy a burner, cost: " + gamedata.BurnerCost.toFixed(2) + " logs, " + "Effect: Get " + gamedata.burnerEffect.toFixed(2) + " times more logs "
        document.getElementById('paperCount').innerHTML = gamedata.Paper.papers.toFixed(2) + " Papers"
        document.getElementById('paperEffect').innerHTML = "Currently: " + gamedata.Paper.paperEffect.toFixed(2) + " x gain"
        document.getElementById('paperCost').innerHTML = "Cost: " + gamedata.Paper.paperCost.toFixed(2) + " logs"
        document.getElementById("chairEffect").innerHTML = "Currently: " + gamedata.Chair.chairEffect.toFixed(2) + "^ More logs"
        document.getElementById('chairCount').innerHTML = gamedata.Chair.chairs.toFixed(2) + " Chairs"
        document.getElementById('chairCost').innerHTML = "Cost: " + gamedata.Chair.chairCost.toFixed(2) + " logs"
        document.getElementById('worldPageCounter').innerHTML = "You have cut all trees on " + gamedata.World.worlds.toFixed(0) + " worlds"
        document.getElementById('worldResetButton').style.display = "none"
        document.getElementById('worldCounter').innerHTML = gamedata.World.worlds.toFixed(0) + " Worlds"
    }
}

gamedata.worldmilestones = {
    one: {
        name: "1 World",
        description: "Permenantly unlock log upgrades",
        req: new Decimal("1"),
        unlocked: false,
    },
    two: {
        name: "2 Worlds",
        description: "Buy cutters, burners, papers aswell as chairs automatically",
        req: new Decimal("2"),
        unlocked: false,
    },
    three: {
        name: "5 Worlds",
        description: "log gain is boosted by the amount of worlds you have",
        req: new Decimal("5"),
        unlocked: false,
    },
    four: {
        name: "10 Worlds",
        description: "Unlock Challenges",
        req: new Decimal("10"),
        unlocked: false,
    },
    five: {
        name: "20 Worlds",
        description: "Flame Heat is boosted by the amount of Burners",
        req: new Decimal("20"),
        unlocked: false,
    },
    six: {
        name: "50 Worlds",
        description: "Unlock the World challenges",
        req: new Decimal("50"),
        unlocked: false,
    },
    break: {
        name: "100 Worlds",
        description: "basically just break reality lol",
        req: new Decimal("100"),
        unlocked: false,
    }

}

