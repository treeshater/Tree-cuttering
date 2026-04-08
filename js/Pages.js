
const Pages = ['Mainupgrades', 'LogUpgrades', 'Flames', 'world', 'LogChallenges', 'worldmilestones', 'solarpage', 'settings'];

function Switch(activePage) {
    Pages.forEach(page => {
        const pageElement = document.getElementById(page);
        if (pageElement) {
            pageElement.style.display = "none";
        }
    });

    const activePageElement = document.getElementById(activePage);
    if (activePageElement) {
        activePageElement.style.display = "flex";
    }

    document.querySelectorAll('.tabs a').forEach(link => {
        link.classList.remove('active');
    });
    document.querySelector(`a[href="#${activePage}"]`)?.classList.add('active');
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.tabs a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const pageId = this.getAttribute('href').substring(1);
            Switch(pageId);
        });
    });

    Switch('Mainupgrades');
});

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.subtabs a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const subpageId = this.getAttribute('href').substring(1);
            Switch(subpageId);
        });
    });

    Switch('Mainupgrades');
});

window.addEventListener('hashchange', function() {
    const pageId = window.location.hash.substring(1);
    if (pageId && Pages.includes(pageId)) {
        Switch(pageId);
    }
});

const mainSubpages = document.querySelectorAll('Mainsubpages')
const flameSubpages = document.querySelectorAll('Flamessubpages')
const worldSubpages = document.querySelectorAll('Worldsubpages')