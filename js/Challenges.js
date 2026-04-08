originalValues.Challenges = {
    one: {
        currentlyEnabled: false,
        completed: new Decimal("0"),
        maxCompletions: new Decimal("7"),
        req: new Decimal("1e50")
    },
    two: {
        currentlyEnabled: false,
        completed: new Decimal("0"),
        maxCompletions: new Decimal("45"),
        req: new Decimal("1e8")
    },
    three: {
        currentlyEnabled: false,
        completed: new Decimal("0"),
        maxCompletions: new Decimal("100"),
        req: new Decimal("2e145")
    },
    four: {
        currentlyEnabled: false,
        completed: new Decimal("0"),
        maxCompletions: new Decimal("3"),
        req: new Decimal("4.34e23")
    },
    five: {
        currentlyEnabled: false,
        completed: new Decimal("0"),
        maxCompletions: new Decimal("1000"),
        req: new Decimal("5700")
    }
}

function enterChallenge(num, reset, currency, req) {
    if (num.currentlyEnabled === false) {
        num.currentlyEnabled = true
        challengefiveEffect()
        reset
        let completed = new Decimal(0)
        setInterval(() => {
            if (currency.gte(req)) {
                completed.add(1)
                req.mul(2.5)
            }
        }, 100)
    } 
    
}

function challengefiveEffect(num) {
    if (num === 'five') {
        logchallengenum.forEach = (i = 0) => {
            logchallengenum[i].currentlyEnabled = true
            i + 1
        }
    }
}

function exitChallenge(num, reset, Totalcompleted) {
        if (Totalcompleted.gt(0)) {
            num.completed = num.completed.add(Totalcompleted)
        }
        reset
}

const logchallengeids = document.querySelectorAll('logchallenge')
const logchallengenum = [gamedata.Challenges.one, gamedata.Challenges.two, gamedata.Challenges.three, gamedata.Challenges.four, gamedata.Challenges.five]

logchallengeids.forEach = (i = 0) => {
    document.getElementById(logchallengeids[i]).addEventListener('click', enterChallenge.bind([i], worldReset(), gamedata.trees, gamedata.Challenges[i].req))
    i = i + 1
}

