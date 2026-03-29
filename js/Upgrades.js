let logUpgrades = {
    1: {
        name: "Burn it all",
        description: "Burner multiplier is 1.45x instead of 1.3x",
        cost: new Decimal(1e10),
        bought: false,
    },
    2: {
        name: "MORE PAPER",
        description: "Paper effect is +0.25x instead of +0.1x",
        cost: new Decimal(1e13),
        bought: false,
    }
}

function buyUpgrade(num) {
    if (gamedata.trees.gte(gamedata.logUpgrades.num.cost)) {
        gamedata.trees = gamedata.trees.sub(gamedata.logUpgrades.num.cost)
        gamedata.logUpgrades.num.bought = true
    }
}