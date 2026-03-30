 gamedata.logUpgrades = {
    one: {
        name: "Burn it all",
        description: "Burner multiplier is 1.2x instead of 1.15x",
        cost: new Decimal(1e15),
        bought: false,
    },
    two: {
        name: "Have you guys ever thought about like how this is actually like a horrible thing that we are ruining the enviroment and like we should stop cutting down trees? nah",
        description: "Paper effect is +0.25x instead of +0.1x",
        cost: new Decimal(1e22),
        bought: false,
    },
    three: {
        name: "Amazing public relations",
        description: "Get two cutters for the price of one",
        cost: new Decimal(5e30),
        bought: false,
    },
    four: {
        name: "How can paper turn into chairs?",
        description: "Get one extra chair for every 100 papers you have",
        cost: new Decimal(1e38),
        bought: false,
    }
}

 

function buyUpgrade(num, id) {
    if (gamedata.trees.gte(gamedata.logUpgrades.num.cost) && gamedata.logUpgrades.num.bought === false) {
        gamedata.trees = gamedata.trees.sub(gamedata.logUpgrades.num.cost)
        gamedata.logUpgrades.num.bought = true
        document.getElementById(id).style.backgroundColor = "green"
    }
}