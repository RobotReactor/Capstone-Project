let mBtn = document.querySelectorAll('.closeModalBtn');
let modalL = document.getElementById('langModal');
let modalQ = document.getElementById('quoteModal');
let modalN = document.getElementById('notifModal');

window.addEventListener('click', outsideClick);

function outsideClick(e) {
    if (e.target == modalL) {
        modalL.style.display = 'none';
    }
    if (e.target == modalQ) {
        modalQ.style.display = 'none';
    }
    if (e.target == modalN) {
        modalN.style.display = 'none';
    }
}

for (i of mBtn) {
    i.addEventListener('click', function() {
        if (this.getAttribute('id') == 'closeModalBtnL') {
            let modalz = this.parentNode.parentNode;
            modalz.style.display = 'none';
        } else if (this.getAttribute('id') == 'closeModalBtnQ') {
            let modalz = this.parentNode.parentNode;
            modalz.style.display = 'none';
        } else if (this.getAttribute('id') == 'closeModalBtnN') {
            let modalz = this.parentNode.parentNode;
            modalz.style.display = 'none';
        }
    });
}

const list = document.querySelectorAll('.list-item');

function activeLink() {
    let toggle = document.querySelector('.btn-toggle');
    list.forEach((item) =>
        item.classList.remove('active'));
    this.classList.add('active');
    if (toggle.classList.contains('active')) {
        openSidebar();
    }

}
list.forEach((item) =>
    item.addEventListener('click', activeLink));

function toggleDark() {
    let btnB = document.querySelector('.btn-toggle-dark-mode');
    let togSun = document.querySelector('#toggle-sun');
    let togMoon = document.querySelector('#toggle-moon');
    btnB.classList.toggle('active');
    togSun.classList.toggle('active');
    togMoon.classList.toggle('active');
}

function toggleUnit() {
    let btnU = document.querySelector('.btn-units');
    btnU.classList.toggle('active');
}

function langSelect() {
    langModal = document.getElementById('langModal');
    let btn = document.querySelector('.btn-language');
    langModal.style.display = 'block';
}

function showQuote() {
    let btn = document.querySelector('.btn-quote');
    quoteModal.style.display = 'block';
}

function toggleNotifs() {
    let btn = document.querySelector('.btn-notify');
    notifModal.style.display = 'block';
}

function toggleCalendar() {
    let btn = document.querySelector('.btn-toggle-all-time');
    let calMonth = document.querySelector('#cal-month');
    let calWeek = document.querySelector('#cal-week');
    calWeek.classList.toggle('active');
    calMonth.classList.toggle('active');
    btn.classList.toggle('active');
}

function openInfo() {
    let btn = document.querySelector('.drop-down');
    let info1 = document.querySelector('.top-container');
    let info2 = document.querySelector('.top-page-info');
    let togUp = document.querySelector('#tog-up');
    let togDwn = document.querySelector('#tog-dwn');
    info1.classList.toggle('active');
    info2.classList.toggle('active');
    btn.classList.toggle('active');
}

function openSidebar() {
    let toggle = document.querySelector('.btn-toggle');
    let sidebar = document.querySelector('.sidebar');
    let mainScreen = document.querySelector('.main-screen');
    let navBar = document.querySelector('.top-dock');
    let togSammich = document.querySelector('#tog-sammy');
    let togX = document.querySelector('#tog-x');
    toggle.classList.toggle('active');
    sidebar.classList.toggle('active');
    mainScreen.classList.toggle('active');
    navBar.classList.toggle('active');
    togSammich.classList.toggle('active');
    togX.classList.toggle('active');
}