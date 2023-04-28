let userAvatar = document.querySelector('.userAvatar');
let asaideAccount = document.querySelector('.asaide-account');
let btnSwitch = document.querySelector('.switch');
let body = document.body;
let cuestionarioVndr = document.querySelector('.cuestionarioVndr')
let send = document.querySelector('.Send')
let avisoVnta = document.querySelector('.avisoVnta');
let accptAvs = document.querySelector('.accptAvs')
let imgLogo = document.querySelector('.imgLogo');
let nameCompany = document.querySelector('.nameCompany');
let menuHambur = document.querySelector('.menuHambur');
let asideHambur = document.querySelector('.aside-Hambur');
let promotionsHambur =document.querySelector('.promotionsHambur');
let infoActive = document.querySelector('.infoActive');
let filtroInfo = document.querySelector('.filtroInfo');
let containerSell = document.querySelector('.container-sell') 
let containerAcc = document.querySelector('.container-Acc');

userAvatar.addEventListener('click', asideCuentaActiva)

function asideCuentaActiva() {
    asaideAccount.classList.toggle('inactiveAcc')
}

btnSwitch.addEventListener('click', ()=> {
    let bodyDark = document.body.classList.toggle('dark')
    localStorage.setItem('darkBody', bodyDark)
    let btnDark = btnSwitch.classList.toggle('active');
    localStorage.setItem('darkBtn', btnDark)
}) 

menuHambur.addEventListener('click', ()=> {
    asideHambur.classList.toggle('hamburActive')
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

cuestionarioVndr.addEventListener('submit', validar)

function validar(event){
    event.preventDefault()

    let inName = document.querySelector('#inName').value
    let inLastName = document.querySelector('#inLastName').value
    let inEmail = document.querySelector('#inEmail').value
    let inAccept = document.querySelector('#inAccept').value

    if(inName === '' || inLastName === '' || inEmail === '' || inAccept === ''){
        Swal.fire({
            title: "Fill in all the blanks!",
            text: "Make sure you fill everything correctly",
            icon: "error",
            confirmButtonText: "Accept",
        })
    } else {

        avisoVnta.classList.add('avisoActive')
        cuestionarioVndr.reset()

    }
}


accptAvs.addEventListener('click', ()=>{
    avisoVnta.classList.remove('avisoActive')
})


if(nameCompany){
    nameCompany.addEventListener('click', principalIndex)
}

function principalIndex() {
    if(nameCompany){
        location.href = 'index.html'
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