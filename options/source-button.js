const button_source = document.getElementsByClassName('select-button');
const source_code = document.getElementsByClassName('source-context');
const source_container = document.getElementsByClassName('source-container');

button_source[0].onclick = function() {
    source_container[0].classList.toggle('python')
    source_container[0].classList.remove('bat')
    button_source[0].classList.toggle('active')
    source_code[0].classList.toggle('active')
    button_source[1].classList.remove('active')
    source_code[1].classList.remove('active')
}
button_source[1].onclick = function() {    
    source_container[0].classList.toggle('bat')
    source_container[0].classList.remove('python')
    button_source[1].classList.toggle('active')
    button_source[0].classList.remove('active')
    source_code[0].classList.remove('active')
    source_code[1].classList.toggle('active')
}