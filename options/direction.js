const member = document.getElementById('member');
const tools = document.getElementById('tools');
const auto = document.getElementById('auto');
const source = document.getElementById('source');
const menu = document.getElementsByClassName('nav-title')[0];
const main_container = document.getElementsByClassName('main');
function clean() {
    member.classList.remove('active');
    tools.classList.remove('active');
    source.classList.remove('active');
    auto.classList.remove('active');
    for (let i = 0; i < 5;i++) {
        main_container[i].classList.remove('active');
    }
}
function upt() {
    clean();
    main_container[i].classList.add('active');
}
menu.onclick = function() {
    i = 0;
    upt();
}
member.onclick = function() {
    i = 1;
    upt();
    member.classList.add('active');
}
tools.onclick = function() {
    i = 2;    
    upt();
    tools.classList.add('active');
}
auto.onclick = function() {
    i = 3;
    upt();
    auto.classList.add('active');
}
source.onclick = function() {
    i = 4;
    upt();
    source.classList.add('active');
}
