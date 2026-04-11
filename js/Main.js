const originalValues = {
 trees: new Decimal("0"),
 actualTrees: new Decimal("0"),
 treeGain:   new Decimal("0"),
 treeAutomator: false,
 treeAutomatorEffeciency: new Decimal(101),
 treeCutters:  new Decimal("0"),
 treeAutomatorPrice:  new Decimal(1000),
 treeCutterPrice: new Decimal("2.5"),
 BurnerCost: new Decimal("12.5"),
 Burners: new Decimal("0"),
 burnerEffect: new Decimal("1"),
 flames: new Decimal("0"),
 flameThreshold: new Decimal("5e6"),
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
}

let gamedata = originalValues

function treegainCalculate() {
    let x = new Decimal("0.10")
    if (gamedata.treeCutters.gte(1)) {
        x = x.add(gamedata.treeCutters.div(5))
    } 
    x = x.mul(gamedata.burnerEffect)
    if (gamedata.Challenges.three.currentlyEnabled === false) {
        if (gamedata.flameheat.gt("0")) {
            if (gamedata.logUpgrades.five.bought === true) {
                x = (x.mul(gamedata.flameheat.mul(4)).pow(1.35))
            }
            else {
                x = x.mul(gamedata.flameheat.pow(1.35))
            }
        }
    }
    else {

    }
    if (gamedata.Challenges.four.currentlyEnabled === true) {
        if (gamedata.flameheat.gt("0")) {
                x = x.div(gamedata.flameheat.pow(1.35))
        }
    }
    x = x.mul(gamedata.Paper.paperEffect)
    x = x.pow(gamedata.Chair.chairEffect)
    if (gamedata.worldmilestones.three.unlocked === true) {
        x = x.mul(gamedata.World.worlds.add(1).pow(1.75))
    }
    if (gamedata.Challenges.one.currentlyEnabled === true) {
        x = x.pow(0.7)
    }
    if (gamedata.Challenges.two.currentlyEnabled === true) {
        x = x.pow(0.05)
    }
     gamedata.treeGain = x
}

function buymax(data, rate, price, amount, operation, currencyName) {
    let currency = data[currencyName]; 
    if (currency.lt(data.price)) return;

    let n = new Decimal(0);
    let totalCost = new Decimal(0);
    const r = new Decimal(rate);

    if (operation === 'mul') {
        let constant = currency.mul(r.sub(1)).div(data[price]).add(1);
        n = constant.log(r).floor();
        
        totalCost = data[price].mul(Decimal.pow(r, n).sub(1)).div(r.sub(1));
    } 
    else if (operation === 'pow') {
        let logPriceCurr = currency.log(data.price);
        if (logPriceCurr.lt(1)) return;

        n = logPriceCurr.log(r).floor().add(1);
        totalCost = data[price].pow(Decimal.pow(r, n.sub(1)));
    }

    if (n.gt(0) && currency.gte(totalCost)) {
        data[amount] = data[amount].add(n);
        data[currencyName] = currency.sub(totalCost); 
        
        if (operation === 'mul') {
            data[price] = data[price].mul(Decimal.pow(rate, n));
        } else {
            data[price] = data[price].pow(Decimal.pow(rate, n));
        }
        
        if (typeof updateUI === "function") updateUI();
        treegainCalculate()
        burnercalc()
    }
}

function Treecut() {
    treegainCalculate()
    gamedata.trees = gamedata.trees.add(gamedata.treeGain)
    actualTreeCalc()
    flameFormula()
    flameHeatCalc()
    worldcheck()
    updateUI()
}

function check() {
     setInterval (() => {
    if (gamedata.treeAutomator === true) {
          Treecut()
          updateUI()
        }
    }, gamedata.treeAutomatorEffeciency)
}

function buyCutter() {
    if (gamedata.trees.gte(gamedata.treeCutterPrice)) {
        gamedata.trees = gamedata.trees.sub(gamedata.treeCutterPrice)
        if (gamedata.logUpgrades.three.bought === true) {
            gamedata.treeCutters = gamedata.treeCutters.add(2)
        }
        else {
            gamedata.treeCutters = gamedata.treeCutters.add(1)
        }
        gamedata.treeCutterPrice = gamedata.treeCutterPrice.mul(1.25)
        updateUI()
    }
}

let treeAutomator =  false;


function BuyAutomator() {
    if (gamedata.trees.gte(gamedata.treeAutomatorPrice)) 
        { 
                if (gamedata.treeAutomator === false) {
                    check()
                }
                gamedata.treeAutomator = true
                gamedata.trees = gamedata.trees.sub(gamedata.treeAutomatorPrice)

                gamedata.treeAutomatorPrice = gamedata.treeAutomatorPrice.mul(2.5)
                gamedata.treeAutomatorEffeciency = gamedata.treeAutomatorEffeciency.div(1.01)
                updateUI()
                   
              }

}
              

               
    
function burnercalc() {
    let a = new Decimal("1")
    
    for (let i = 1; i <= gamedata.Burners; i++) {
        if (gamedata.logUpgrades.one.bought === true) {
                    a = a.mul(1.2)
        }
        else {
            a = a.mul(1.15)
        }

    }
    gamedata.burnerEffect = a
}



function BuyBurner() {
    if (gamedata.trees.gte(gamedata.BurnerCost)) {
        gamedata.Burners = gamedata.Burners.add(1)
        gamedata.trees = gamedata.trees.sub(gamedata.BurnerCost)
        gamedata.BurnerCost = gamedata.BurnerCost.mul(1.35)
        burnercalc()
        updateUI()
       
        


    }
}

function actualTreeCalc() {
    gamedata.actualTrees = gamedata.trees.div(10)
    updateUI()
}

