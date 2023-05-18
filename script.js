const burgerBtn = document.querySelector('.burger-button');
const burgerMenu = document.getElementsByClassName('burger-menu')[0];
const contactForm = document.getElementsByClassName('contact-form')[0];
const closeBtns = Array.from(document.getElementsByClassName('close-btn'));
const getStartedBtns = Array.from(document.getElementsByClassName('start'));

burgerBtn.addEventListener('click', () => {
    document.getElementsByClassName('burger-menu')[0].classList.toggle('open');
})

closeBtns.forEach(function(element){
    element.addEventListener('click', function(e){
        if(e.target.classList.contains('close-btn') || e.target.parentNode.classList.contains('close-btn')){
            element.parentNode.classList.remove('open');
        }
    })
})

getStartedBtns.forEach(function(element){
    element.addEventListener('click', function() {
        contactForm.classList.add('open');
    })
})

// Show text

const textBlock = document.getElementsByClassName('info-text_block')[0];
const beforeElem = document.querySelector('.pseudo');
textBlock.onclick = function(){
    beforeElem.classList.toggle('hide-curtain');
    textBlock.classList.toggle('unlimited-height'); 
};

// Tab indicator

let tabList = document.getElementsByClassName('setting-up-tabs')[0];
let tabs = tabList.getElementsByTagName('LI');
let tabText = document.getElementsByClassName('setting_up-text')[0];
let tabIndicator = document.getElementById('indicator');
let gap = parseFloat(window.getComputedStyle(tabList).getPropertyValue('gap'));
let position = 0;

function getPosition(index){
    if(index == 0) return position;
    position += gap + parseFloat(window.getComputedStyle(tabs[index]).getPropertyValue('width'));
    return getPosition(index-1);
}

for(let i = 0; i < tabs.length; i++){
    tabs[i].addEventListener('click', function(){
        tabList.getElementsByClassName('active-tab')[0].classList.remove('active-tab');
        tabs[i].classList.add('active-tab');
        tabText.getElementsByClassName('active-text')[0].classList.remove('active-text');
        tabText.getElementsByTagName('P')[i].classList.add('active-text');
        position = 0;
        if(i != 0){
            tabIndicator.style.left = `${getPosition(i)}px`;
        }else{
            tabIndicator.style.left = '0';
        }
        let indWidth = window.getComputedStyle(tabs[i]).getPropertyValue('width');
        tabIndicator.style.width = indWidth;
    })
}

// FORM VERIFY 

const form = document.getElementById('contact-form');
form.addEventListener('submit', checkForm);
function checkForm(event){
    event.preventDefault();
    let nameError = document.getElementById('name-error');
    let emailError = document.getElementById('email-error');
    
    if(form.name.value.length < 3) {
        form.name.classList.add('error');
        nameError.innerText = 'It sould be 3 or more characters';
        return;
    }
    form.name.classList.remove('error');
    nameError.innerText = '';

    const mailRegExp = new RegExp(/^[\w.%+-]+@[\w.-]+\.[a-zA-Z]{2,}$/);
    if(!mailRegExp.test(form.email.value)){
        form.email.classList.add('error');
        emailError.innerText = `This doesn't look like an email, please enter a valid email`;
        return;
    }
    form.email.classList.remove('error');
    emailError.innerText = '';
    form.submit();
    window.location.href = 'thank-you.html';
}

// const form = document.getElementById('contact-form');
// form.addEventListener('submit', checkForm);
// console.log(form);
// function checkForm(event) {
//     event.preventDefault();
//     serializeForm(form);
// }
// function serializeForm(formNode){
//     const {elements} = formNode;
//     const data = new FormData();
//     Array.from(elements)
//         .filter((item) => !!item.name)
//         .map((element) =>{
//         const {name, value} = element;
        
//         data.append(name, value);
//     }) 
//     return data;
// }