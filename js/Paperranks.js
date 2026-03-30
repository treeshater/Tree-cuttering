
function paperCalc() {
    let y = new Decimal("1")
    if (gamedata.Paper.papers.gte(1)) {
        y = y.add(gamedata.Paper.papers.div(10))
    }
    gamedata.Paper.paperEffect = y
    document.getElementById('paperEffect').innerHTML = "Currently: " + y.toFixed(2) + " x gain"
}

function Buypaper() {
    if (gamedata.trees.gte(gamedata.Paper.paperCost)) {
        gamedata.trees = gamedata.trees.sub(gamedata.Paper.paperCost)
        gamedata.Paper.papers = gamedata.Paper.papers.add(1)
        paperCalc()

        gamedata.Paper.paperCost = gamedata.Paper.paperCost.mul(1.45)
        document.getElementById('paperCount').innerHTML = gamedata.Paper.papers.toFixed(2) + " Papers"
        formatscientific(gamedata.trees, 'IDd', '', ' logs', '', '')
        document.getElementById('paperCost').innerHTML = "Cost: " + gamedata.Paper.paperCost.toFixed(2) + " logs"
        formatscientific(gamedata.Paper.papers, 'paperCount', '', ' Papers', '', '')
        formatscientific(gamedata.Paper.paperCost, 'paperCost', 'Cost:', ' Logs', '', '')
    }
}

function chairCalc() {
    let x = new Decimal("1")
    if (gamedata.Chair.chairs.gte(1)) {
        x = x.add(gamedata.Chair.chairs.div(20))
    }
    gamedata.Chair.chairEffect = x
    document.getElementById("chairEffect").innerHTML = "Currently: " + x.toFixed(2) + "^ More logs"
    formatscientific(x.toFixed(2), 'chairEffect', '', '^ More logs', '', '')

}



function buyChair() {
    if (gamedata.trees.gte(gamedata.Chair.chairCost)) {
        gamedata.trees = gamedata.trees.sub(gamedata.Chair.chairCost)
        gamedata.Chair.chairs = gamedata.Chair.chairs.add(1)
        if (gamedata.logUpgrades.four.bought === true && gamedata.Paper.papers.gte(100)) {
            gamedata.Chair.chairs = gamedata.Chair.chairs.add(gamedata.Paper.papers.div(100))
        }
        chairCalc()
        gamedata.Chair.chairCost = gamedata.Chair.chairCost.pow(1.35)
        formatscientific(gamedata.Chair.chairs, 'chairCount', '', ' Chairs', '', '')
        formatscientific(gamedata.trees, 'IDd', '', ' logs', '', '')
        formatscientific(gamedata.Chair.chairCost, 'chairCost', 'Cost:', ' Logs', '', '')
    }
}