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

function worldmilestoneCheck() {
    if (gamedata.World.worlds.gte(gamedata.worldmilestones.one.req)) {
        gamedata.worldmilestones.one.unlocked = true
        document.getElementById('Worldmilestone1').style.backgroundColor = "green"
        document.getElementById('Logupgrades').style.display = "flex"
    }
    if (gamedata.World.worlds.gte(gamedata.worldmilestones.two.req)) {
        gamedata.worldmilestones.two.unlocked = true
        document.getElementById('Worldmilestone2').style.backgroundColor = "green"
        worldmilestone2Effect()
    }
    if (gamedata.World.worlds.gte(gamedata.worldmilestones.three.req)) {
        gamedata.worldmilestones.three.unlocked = true
        document.getElementById('Worldmilestone3').style.backgroundColor = "green"
    }
    if (gamedata.World.worlds.gte(gamedata.worldmilestones.four.req)) {
        gamedata.worldmilestones.four.unlocked = true
        document.getElementById('Worldmilestone4').style.backgroundColor = "green"
    }
    if (gamedata.World.worlds.gte(gamedata.worldmilestones.five.req)) {
        gamedata.worldmilestones.five.unlocked = true
        document.getElementById('Worldmilestone5').style.backgroundColor = "green"
    }
    if (gamedata.World.worlds.gte(gamedata.worldmilestones.six.req)) {
        gamedata.worldmilestones.six.unlocked = true
        document.getElementById('Worldmilestone6').style.backgroundColor = "green"
    }
    if (gamedata.World.worlds.gte(gamedata.worldmilestones.break.req)) {
        gamedata.worldmilestones.break.unlocked = true
        document.getElementById('Worldmilestonebreak').style.backgroundColor = "green"
    }

}

function worldReset() {
    if (gamedata.trees.gte(gamedata.World.worldcap)) {
        gamedata.World.worlds = gamedata.World.worlds.add(1)
        gamedata.World.worldcap = gamedata.World.worldcap.pow(1.25)
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
        worldmilestoneCheck()
        document.getElementById('IDd').innerHTML = gamedata.trees.toFixed(2) + " logs"
        document.getElementById('cutterbutton').innerHTML = "Buy a cutter, cost: " + formatscientific(gamedata.treeCutterPrice) + " logs, " + " Effect: Get " + formatscientific(gamedata.treeCutters.div(10)) + " more logs per tree"
         document.getElementById('burnerbutton').innerHTML = "Buy a burner, Cost: " + formatscientific(gamedata.BurnerCost) + " Logs, Effect: get " + formatscientific(gamedata.burnerEffect) + " times more logs"
        document.getElementById('paperCount').innerHTML = gamedata.Paper.papers.toFixed(2) + " Papers"
        document.getElementById('paperEffect').innerHTML = "Currently: " + gamedata.Paper.paperEffect.toFixed(2) + " x gain"
        document.getElementById('paperCost').innerHTML = "Cost: " + gamedata.Paper.paperCost.toFixed(2) + " logs"
        document.getElementById("chairEffect").innerHTML = "Currently: " + gamedata.Chair.chairEffect.toFixed(2) + "^ More logs"
        document.getElementById('chairCount').innerHTML = gamedata.Chair.chairs.toFixed(2) + " Chairs"
        document.getElementById('chairCost').innerHTML = "Cost: " + gamedata.Chair.chairCost.toFixed(2) + " logs"
        document.getElementById('worldPageCounter').innerHTML = "You have cut all trees on " + gamedata.World.worlds.toFixed(0) + " worlds"
        document.getElementById('worldResetButton').style.display = "none"
        document.getElementById('worldcounter').style.display = "flex"
        document.getElementById('worldMilestone').style.display = "flex"
        document.getElementById('worldcounter').innerHTML = gamedata.World.worlds.toFixed(0) + " Worlds"
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
        description: "Unlock the last challenge",
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

function worldmilestone2Effect() {
            setInterval(() => {
    if (gamedata.worldmilestones.two.unlocked === true) {
        buyCutter()
        BuyBurner()
        Buypaper()
        buyChair()
        }
   }, 127);
}