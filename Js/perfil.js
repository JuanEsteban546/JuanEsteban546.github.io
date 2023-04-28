let userAvatar = document.querySelector('.userAvatar')
let asaideAccount = document.querySelector('.asaide-account')
let btnSwitch = document.querySelector('.switch')
let body = document.body;
let actualizarPerfil = document.querySelector('.actualizarPerfil')
let arrow = document.querySelector('.arrow')
let imgLogo = document.querySelector('.imgLogo');
let nameCompany = document.querySelector('.nameCompany');
let menuHambur = document.querySelector('.menuHambur');
let asideHambur = document.querySelector('.aside-Hambur');
let promotionsHambur =document.querySelector('.promotionsHambur');
let infoActive = document.querySelector('.infoActive');
let filtroInfo = document.querySelector('.filtroInfo');
let containerSell = document.querySelector('.container-sell') 
let containerAcc = document.querySelector('.container-Acc');


let promotions = document.querySelector('.promotions');
let clothing = document.querySelector('.clothing');
let technology = document.querySelector('.technology');
let homeAppliances = document.querySelector('.homeAppliances')
let toys = document.querySelector('.toys');

userAvatar.addEventListener('click', asideCuentaActiva)

function asideCuentaActiva() {
    let cuentaActiva = asaideAccount.classList.toggle('inactiveAcc')
}

btnSwitch.addEventListener('click', ()=> {
    let bodyDark = document.body.classList.toggle('dark')
    localStorage.setItem('darkBody', bodyDark)
    let btnDark = btnSwitch.classList.toggle('active');
    localStorage.setItem('darkBtn', btnDark)
}) 

let valorBtn = localStorage.getItem('darkBtn')
let valorBody = localStorage.getItem('darkBody')

if(valorBtn == 'true'){
    btnSwitch.classList.add('active');
} else if (valorBtn == 'false') {
    btnSwitch.classList.remove('active');
}

if(valorBody == 'true'){
    body.classList.add('dark')
} else{
    body.classList.remove('dark')
}

menuHambur.addEventListener('click', ()=> {
    asideHambur.classList.toggle('hamburActive')
})

arrow.addEventListener('click', mostrarMenu)

let menuCambiado = 'arrow1'

function mostrarMenu(){
    switch (menuCambiado) {
        case 'arrow1': 
            actualizarPerfil.classList.add('actiualizarActv')
            menuCambiado = 'arrow2'
            break;
        case 'arrow2':
            actualizarPerfil.classList.remove('actiualizarActv')
            menuCambiado = 'arrow1'
            break;
    }
}

actualizarPerfil.addEventListener('submit', validar)

function validar(event) {
    event.preventDefault()
}


// Navegacion

if(promotions){
    promotions.addEventListener('click', promotionsSeccion)
}

function promotionsSeccion() {
    if(promotionsSeccion){
        location.href = 'promociones.html'
    }
}

if(imgLogo){
    imgLogo.addEventListener('click', indexPrincipal)
}

function indexPrincipal() {
    if(imgLogo){
        location.href = 'index.html'
    }
}

if(nameCompany){
    nameCompany.addEventListener('click', principalIndex)
}

function principalIndex() {
    if(nameCompany){
        location.href = 'index.html'
    }
}


if(clothing){
    clothing.addEventListener('click', ()=>{
        location.href = 'ropa.html'
    })
}


if(technology){
    technology.addEventListener('click', ()=>{
        location.href = 'tecnologia.html'
    })
}

if(homeAppliances){
    homeAppliances.addEventListener('click', ()=>{
        location.href = 'electroDomesticos.html'
    })
}

if(toys){
    toys.addEventListener('click', ()=>{
        location.href = 'juguetes.html'
    })
}


if(containerSell){
    containerSell.addEventListener('click', ()=>{
        location.href = 'permisoVndr.html'
    })
}

// Perfil

if(containerAcc){
    containerAcc.addEventListener('click', ()=>{
        location.href = 'perfil.html'
    })
}


// Movil

if(promotionsHambur){
    promotionsHambur.addEventListener('click', ()=>{
        if(nameCompany){
            location.href = 'promociones.html'
        }
    })
}