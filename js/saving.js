

function save() {
    localStorage.setItem("gamedatakey", JSON.stringify(gamedata))
}

function wipeSave() {
     gamedata = {
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
 World: {
    worlds: new Decimal("0"),
    worldcap: new Decimal("3.04e13")
 },
 logUpgrades: {
    one: {
        bought: false,
    },
    two: { 
        bought: false,
    },
    three: {
        bought: false,
    },
    four: {
        bought: false,
    },
 },
 worldmilestones: {
    one: {
        unlocked: false,
    },
    two: {
        unlocked: false,
    },
    three: {
        unlocked: false,
    },
    four: {
        unlocked: false,
    },
    five: {
        unlocked: false,
    },
    six: {
        unlocked: false,
    },
    break: {
        unlocked: false,
    },
 }
}
        save()
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
        document.getElementById('worldPageCounter').innerHTML = "You have cut all trees on " + gamedata.World.worlds.toFixed(0) + " worlds"
        document.getElementById('worldResetButton').style.display = "none"
        document.getElementById('worldcounter').style.display = "none"
        document.getElementById('worldMilestone').style.display = "none"
        document.getElementById('WorldTab').style.display = "none"
}
function load() {
    let savedata = JSON.parse(localStorage.getItem("gamedatakey"))
    if (savedata) {
        gamedata = {
            trees: new Decimal(savedata.trees),
            treeGain: new Decimal(savedata.treeGain),
            treeAutomator:  savedata.treeAutomator,
            treeAutomatorEffeciency: savedata.treeAutomatorEffeciency,
            treeCutters:  new Decimal(savedata.treeCutters),
            treeAutomatorPrice:  new Decimal(savedata.treeAutomatorPrice),
            treeCutterPrice: new Decimal(savedata.treeCutterPrice),
            BurnerCost: new Decimal(savedata.BurnerCost),
            Burners: new Decimal(savedata.Burners),
            burnerEffect: new Decimal(savedata.burnerEffect),
            flames: new Decimal(savedata.flames),
            flameThreshold: new Decimal(savedata.flameThreshold),
            flameheat: new Decimal(savedata.flameheat),
        Paper: {
            papers: new Decimal(savedata.Paper.papers),
            paperEffect: new Decimal(savedata.Paper.paperEffect),
            paperCost: new Decimal(savedata.Paper.paperCost),
        },
        Chair: {
        chairs: new Decimal(savedata.Chair.chairs),
        chairEffect: new Decimal(savedata.Chair.chairEffect),
        chairCost: new Decimal(savedata.Chair.chairCost),
          },
        World: {
            worlds: new Decimal(savedata.World.worlds),
            worldcap: new Decimal(savedata.World.worldcap),
        },
        logUpgrades: {
        one: {
            bought: savedata.logUpgrades.one.bought,
        },
        two: {
            bought: savedata.logUpgrades.two.bought,
        },
        three: {
            bought: savedata.logUpgrades.three.bought,
        },
        four: {
            bought: savedata.logUpgrades.four.bought,
        },
        },
        worldmilestones: {
            one: {
                unlocked: savedata.worldmilestones.one.unlocked,
            },
            two: {  
                unlocked: savedata.worldmilestones.two.unlocked,
            },
            three: {
                unlocked: savedata.worldmilestones.three.unlocked,
            },
            four: {
                unlocked: savedata.worldmilestones.four.unlocked,
            },
            five: {
                unlocked: savedata.worldmilestones.five.unlocked,
            },
            six: {
                unlocked: savedata.worldmilestones.six.unlocked,
            },
            break: {
                unlocked: savedata.worldmilestones.break.unlocked,
            },
        },
       
        
        }
        
    }
        formatscientific(gamedata.trees, 'IDd', '', ' logs', '', '')
        document.getElementById('cutterbutton').innerHTML = "Buy a cutter, cost: " + gamedata.treeCutterPrice.toFixed(2) + " logs, " + " Effect: Get " + gamedata.treeCutters.div(10).toFixed(2) + " more logs per tree"
        document.getElementById('burnerbutton').innerHTML = "Buy a burner, cost: " + gamedata.BurnerCost.toFixed(2) + " logs, " + "Effect: Get " + gamedata.burnerEffect.toFixed(2) + " times more logs "
        document.getElementById('flamesCounter').innerHTML = gamedata.flames.toFixed(2) + " Flames"
        document.getElementById('paperCount').innerHTML = gamedata.Paper.papers.toFixed(2) + " Papers"
        document.getElementById('paperEffect').innerHTML = "Currently: " + gamedata.Paper.paperEffect.toFixed(2) + " x gain"
        document.getElementById('paperCost').innerHTML = "Cost: " + gamedata.Paper.paperCost.toFixed(2) + " logs"
        document.getElementById("chairEffect").innerHTML = "Currently: " + gamedata.Chair.chairEffect.toFixed(2) + "^ More logs"
        document.getElementById('chairCount').innerHTML = gamedata.Chair.chairs.toFixed(2) + " Chairs"
        document.getElementById('chairCost').innerHTML = "Cost: " + gamedata.Chair.chairCost.toFixed(2) + " logs"
        document.getElementById('worldPageCounter').innerHTML = "You have cut all trees on " + gamedata.World.worlds.toFixed(0) + " worlds"
        worldmilestoneCheck()
        if (gamedata.treeAutomator === true) {
            check()
        }
        if (gamedata.flames.gt(0) || gamedata.World.worlds.gt(0)) {
            document.getElementById('flameA').style.display = "flex"
            flameHeat()
        }
        if (gamedata.World.worlds.gt(0)) {
            document.getElementById('WorldTab').style.display = "flex"
            document.getElementById('worldMilestone').style.display = "flex"
            document.getElementById('worldcounter').style.display = "flex"
            document.getElementById('worldcounter').innerHTML = gamedata.World.worlds.toFixed(0) + " Worlds"
        }
        if (gamedata.worldmilestones.two.unlocked === true) {
            worldmilestone2Effect()
        }
    }
setInterval(() => {
    save()
    console.log("we could go on and on (testing save functions)")
}, 15000);

onload = load()