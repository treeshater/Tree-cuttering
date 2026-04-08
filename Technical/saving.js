const pause = ms => new Promise(resolve => setTimeout(resolve, ms))

async function save() {
   localStorage.setItem("gamedatakey", btoa(JSON.stringify(gamedata)))
   const UIelement = document.createElement('div')
   UIelement.classList.add('alert')
   UIelement.textContent = "Saved"
   UIelement.style.webkitTextFillColor = 'White'
   UIelement.style.fontSize = '25px'
   UIelement.style.textAlign = 'center'
   document.body.append(UIelement)
   await pause(7000)
   UIelement.remove()
}

function exportsaveclipboard() {
    save()
    const str = localStorage.getItem("gamedatakey");
    navigator.clipboard.writeText(str);
} 

function exportsavetofile() {
    save()
    const str = localStorage.getItem("gamedatakey");
    const blob = new Blob ([str], {type: 'text/plain'});
    const url = URL.createObjectURL(blob)
    const link = document.createElement("a")
    link.href = url
    link.download = "Tree cuttering save"

    document.body.append(link);
    link.click();

    document.body.removeChild(link);
    URL.revokeObjectURL(url);
}

function importingFile() {
    const id = document.getElementById('importText')
    const text = id.value 
    localStorage.setItem('importkey', text)
    load('importkey')
    localStorage.removeItem('importkey')
    popupclose('inputsave')
}



function wipeSave() {
    gamedata = originalValues
        save()
        updateUI()
        document.getElementById('worldResetButton').style.display = "none"
        document.getElementById('worldcounter').style.display = "none"
        document.getElementById('worldMilestone').style.display = "none"
        document.getElementById('WorldTab').style.display = "none"
        document.getElementById('flameA').style.display = "none"
}
function load(key) {
    const gamedatakey = localStorage.getItem(key)
    const savedata = atob(gamedatakey)
    const gamedatastring = JSON.parse(savedata) 

function decimalload(obj) {
    if (obj === null || obj === undefined) return obj;

    if (typeof obj === 'boolean') return obj;

    if (typeof obj === 'number') return obj;

    if (Array.isArray(obj)) {
        return obj.map(item => decimalload(item));
    }

    if (typeof obj === 'object') {
        return Object.fromEntries(
            Object.entries(obj).map(([k, v]) => [k, decimalload(v)])
        );
    }

    return new Decimal(obj);
}


gamedata = decimalload(gamedatastring);
        updateUI()
        paperCalc()
        worldcheck()
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
}, 15000);

onload = load("gamedatakey")


