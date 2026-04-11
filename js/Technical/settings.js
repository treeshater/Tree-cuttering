const pause = ms => new Promise(resolve => setTimeout(resolve, ms))

function popup(id) {
    document.getElementById(id).style.display = "flex"
}


function popupclose(id) {
    document.getElementById(id).style.display = "none"
}

async function createAlert(text, color, bgcolor) {
   const UIelement = document.createElement('div')
   UIelement.classList.add('alert')
   UIelement.textContent = text
   UIelement.style.webkitTextFillColor = color
   UIelement.style.backgroundColor = bgcolor
   UIelement.style.fontSize = '25px'
   UIelement.style.textAlign = 'center'
   document.body.append(UIelement)
   await pause(4000)
   UIelement.remove()
}

function updateUI() {
        document.getElementById('IDd').innerHTML = formatscientific(gamedata.trees) + " logs"
        document.getElementById('cutterbutton').innerHTML = "Buy a cutter, cost: " + formatscientific(gamedata.treeCutterPrice) + " logs, " + " Effect: Get " + formatscientific(gamedata.treeCutters.div(10)) + " more logs per tree"
        document.getElementById('burnerbutton').innerHTML = "Buy a burner, Cost: " + formatscientific(gamedata.BurnerCost) + " Logs, Effect: get " + formatscientific(gamedata.burnerEffect) + " times more logs"
        document.getElementById('flamesCounter').innerHTML = formatscientific(gamedata.flames) + " Flames"
        if (gamedata.worldmilestones.three.unlocked === true) {
            document.getElementById('automatorbutton').innerHTML = "Make the automator faster, cost: " + gamedata.treeAutomatorPrice.toFixed(2) + " logs, " + " Effect: Cut 1 tree every " + (gamedata.treeAutomatorEffeciency / 1000).toFixed(2) + " seconds"
        }
        else {
            document.getElementById('automatorbutton').innerHTML = "Automate the trees, cost: " + gamedata.treeAutomatorPrice.toFixed(2) + " logs, " + " Effect: Cut 1 tree every " + (gamedata.treeAutomatorEffeciency / 1000).toFixed(2) + " seconds"
        }
        
        document.getElementById('paperCount').innerHTML = formatscientific(gamedata.Paper.papers) + " Papers"
        document.getElementById('paperEffect').innerHTML = "Currently: " + formatscientific(gamedata.Paper.paperEffect) + " x gain"
        document.getElementById('paperCost').innerHTML = "Cost: " + formatscientific(gamedata.Paper.paperCost) + " logs"
        document.getElementById("chairEffect").innerHTML = "Currently: " + formatscientific(gamedata.Chair.chairEffect) + "^ More logs"
        document.getElementById('chairCount').innerHTML = formatscientific(gamedata.Chair.chairs) + " Chairs"
        document.getElementById('chairCost').innerHTML = "Cost: " + formatscientific(gamedata.Chair.chairCost) + " logs"
        document.getElementById('worldPageCounter').innerHTML = "You have cut all trees on " + gamedata.World.worlds.toFixed(0) + " worlds"
        document.getElementById('worldcounter').innerHTML = gamedata.World.worlds.toFixed(0) + " Worlds"
        document.getElementById('treecounter').innerHTML = "You have cut down " + formatscientific(gamedata.actualTrees) + " trees on your journey"
}

function formatscientific(num) {
    if (num.gte("1e6")) {
        return num.toExponential(2)
    }
    else {
        return num.toFixed(2)
    } 
}

let currentFont = 'share-tech'

function fontChange(font) {
    currentFont = font
    document.querySelectorAll('*').style.font = currentFont
}



