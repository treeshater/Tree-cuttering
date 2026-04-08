 originalValues.logUpgrades = {
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
    },
    five: {
        name: "Straight heat",
        description: "The formula for the log gain multiplier from flame heat improves",
        cost: new Decimal(1e50),
        bought: false
    },
    six: {
        name: "World burning",
        description: "World amount boosts flames gain",
        cost: new Decimal(1e72),
        bought: false
    },
    seven: {
        name: "No infinity layer???",
        description: "Boost log gain by ^1.79",
        cost: new Decimal("1.79e308"),
        bought: false
    },
    eight: {
        name: "Reality bending",
        description: "Unlock the black hole",
        cost: new Decimal("e45800"),
        bought: false
    },
    nine: {
        name: "The final challenge?",
        description: "Unlock the last log challenge",
        cost: new Decimal("ee390"),
        bought: false
    },
    ten: {
        name: "placeholder",
        description: "placeholder",
        cost: new Decimal("5.35666")
    }
}

originalValues.flameUpgrades = {
    one: {
        name: "placeholder",
        description: "Placeholder",
        cost: new Decimal("2"),
        bought: false,
    }
}
 

function buyUpgrade(num, currency, id) { 
    if (currency.gte(num.cost) && num.bought === false) {
        currency = currency.sub(num.cost)
        document.getElementById('IDd').innerHTML = formatscientific(currency) + " logs"
        num.bought = true
        document.getElementById(id).style.backgroundColor = "green"
    }
}
    
const logupgradeids = document.querySelectorAll('logUpgrades')
const upgradenums = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight']

logupgradeids.forEach = (i = 0) => {
    document.getElementById(logupgradeids[i]).addEventListener('click', buyUpgrade.bind(gamedata.logUpgrades.upgradenums[i], gamedata.trees, logupgradeids[i]));
    i = i + 1 
}


