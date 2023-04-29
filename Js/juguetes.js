let CompraIcon = document.querySelector('.shoppingIcon');
let asideCarrito = document.querySelector('.aside-Cart');
let cerrar = document.querySelector('.to-Close');
let containerProductos = document.querySelector('.container-Products');
let carroVacioNodo = document.querySelector('.empty-Cart')
let sigueComprando = document.querySelector('.keepBuying');
let continuarCompra = document.querySelector('.continue-Shopping')
let buttonProceso = document.querySelector('.buttonProcess')
let formulario = document.querySelector('.formulario');
let userAvatar = document.querySelector('.userAvatar');
let asaideAccount = document.querySelector('.asaide-account');
let btnSwitch = document.querySelector('.switch');
let body = document.body;
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

let clothingHambur = document.querySelector('.clothingHambur')
let technologyHambur = document.querySelector('.technologyHambur')
let homeAppliancesHambur = document.querySelector('.homeAppliancesHambur')
let toysHambur = document.querySelector('.toysHambur')

let juguetesList = [];
let emptyCar = [];
let informacionProd = [];


juguetesList.push({
    id: '126',
    amount: '1',
    name: 'Hot Wheels 5 Pack',
    price: '8 USD',
    description: 'This 5-pack of Hot Wheels vehicles is perfect for starting or growing a collection. Hot Wheels 5-car packs offer five times the action and are ideal for car fans of all ages. With authentic details and eye-catching decorations, these packs make the perfect gift for kids and collectors alike. Each package is sold separately and is subject to availability. Colors and decorations may vary.',
    image: 'https://juguetelandia.co/tienda/988-tm_large_default/hw-paquete-de-5.jpg'
})
juguetesList.push({
    id: '127',
    amount: '1',
    name: 'Toy kitchen for children with lights and sound in wood',
    price: '124 USD',
    description: 'Your little one will be a chef with this wooden kitchen that comes with lights and sound. The doors are functional with a large storage space, with 2 ovens to make delicious preparations, the stove handles rotate giving the illusion of real cooking. Your child will enjoy pretending to be the chef while stimulating creativity, imagination, language skills and independent play.',
    image: 'https://cdn.shopify.com/s/files/1/0081/0149/4842/products/hape-juegos-de-roles-3-cocina-de-madera-gris-luces-y-sonido-e3166-13612016173114_1024x1024.jpg'
})
juguetesList.push({
    id: '128',
    amount: '1',
    name: 'Double Domino 12-12 Professional 91 Pieces for 12 Players',
    price: '11 USD',
    description: 'What better plan for a rainy afternoon than a board game? With Double 12 Dominoes you will create fun memories and spend unforgettable moments with your friends. Laughter is guaranteed with this entertaining pastime.',
    image: 'https://exitocol.vtexassets.com/arquivos/ids/10888731/domino-doble-12-con-91-fichas-de-colores.jpg?v=637722477492270000'
})
juguetesList.push({
    id: '129',
    amount: '1',
    name: 'Hasbro C1009 Classic Monopoly board game',
    price: '23 USD',
    description: 'A classic! Gather your friends for hours of laughter and fun as they play real estate agents with Monopoly. They will have to strategically buy, sell and exchange property to increase their fortunes, if you declare bankruptcy... you lose!',
    image: 'http://cdn.shopify.com/s/files/1/0643/8889/0845/products/moni.jpg?v=1676388225'
})
juguetesList.push({
    id: '130',
    amount: '1',
    name: 'Uno Card Game Mattel W2085',
    price: '3 USD',
    description: 'Does the king of games break friendships? Definitely the One. Enjoy afternoons full of laughter and ruthless revenge among friends. You will have to run out of cards before the others and when you only have one, do not forget to say UNO!',
    image: 'http://cdn.shopify.com/s/files/1/0643/8889/0845/products/2493.jpg?v=1660085083'
})



juguetesList.push({
    id: '131',
    amount: '1',
    name: 'Board game Risk Hasbro B7404',
    price: '43 USD',
    description: 'Committed to making the world a better place, Hasbro develops pastimes that aim to create unforgettable experiences for all users. With Risk, hours of shared fun and entertainment are guaranteed.',
    image: 'https://http2.mlstatic.com/D_NQ_NP_810688-MLA46521723275_062021-O.jpg'
})
juguetesList.push({
    id: '132',
    amount: '1',
    name: 'Barbie Mega House Dolls Dreams 70 Mansion Dreamhouse 2019!',
    price: '416 USD',
    description: 'In the Barbie® Dreamhouse™, the pink double doors are always open for family and friends to stay and play. Beat all kinds of stories with three floors, eight rooms, an outdoor area, a rooftop pool and slide, a working elevator, and over 70 accessories! The garage is big enough to park any of your vehicles, even the RV! The first floor has a dining room and kitchen with appliances that play real sounds: the stove sizzles, the oven ticks and the kettle whistles. The second floor has a bathroom and a living room that is also perfect for a sleepover (the couch turns into a bunk bed and the coffee table turns into Kelly is bed). The third floor has Barbie® doll is master bedroom with the closet of her dreams and a room that transforms into an office. Slide Barbie® doll down the slide and relax in the rooftop pool. In the Barbie® Dreamhouse™, the outdoors is just as fun as the indoors! Flip the dollhouse around for an outside view and play out even more play possibilities: BBQ on the patio, keep warm at the fire pit, or visit the garden Moveable kitchen cabinets even transform into outdoor furniture! There is so much to do in the Barbie® Dreamhouse™ with new transformation features and 360-degree play!',
    image: 'https://http2.mlstatic.com/D_NQ_NP_859138-MCO31559249740_072019-O.webp'
})
juguetesList.push({
    id: '133',
    amount: '1',
    name: 'Barbie Bike Ride Mattel FTV96',
    price: '33 USD',
    description: 'unforgettable characters With Barbie, the experiences of the little ones will be incredible! Its design encourages creativity and imagination.',
    image: 'https://www.ansaldo.cl/wp-content/uploads/2020/05/20653-300x300.jpg'
})
juguetesList.push({
    id: '134',
    amount: '1',
    name: 'Max Steel Basic Figure',
    price: '4 USD',
    description: 'Good quality',
    image: 'https://http2.mlstatic.com/D_NQ_NP_875363-MCO43822855052_102020-O.jpg'
})
juguetesList.push({
    id: '135',
    amount: '1',
    name: 'Max Factory Arpeggio De Blue Steel Ars Nova Yotaroh Figma Fi',
    price: '55 USD',
    description: 'this suits you. Please enter your model number to make sure this will fit. A Max Factory import from the hit anime series Smooth yet poseable joints Includes two face plates Includes stand for articulated figma',
    image: 'https://mykombini-ab5a.kxcdn.com/15722-large/arpeggio-of-blue-steel-ars-nova-kirikumas-kirishima-phat-company.jpg'
})


juguetesList.push({
    id: '136',
    amount: '1',
    name: 'Funko Pop Shanks - One Piece (939)',
    price: '150 USD',
    description: 'The American company Funko maintains that "everyone is a fan of something." Therefore, it is dedicated to creating collectible figures to bring happiness to fans of all ages.',
    image: 'https://http2.mlstatic.com/D_NQ_NP_2X_800695-MCO49684473768_042022-V.webp'
})
juguetesList.push({
    id: '137',
    amount: '1',
    name: '40cm Anime Chainsaw Man Pochita Cospla Plush Toy',
    price: '32 USD',
    description: '40cm Packing: opp bag Uses',
    image: 'https://http2.mlstatic.com/D_NQ_NP_874615-CBT49071601267_022022-O.jpg'
})
juguetesList.push({
    id: '138',
    amount: '1',
    name: 'Imaginext Jurassic World Indominus Rex',
    price: '45 USD',
    description: 'attel, since 1945, has pursued fun and the manufacture of toys as a horizon to follow. It is the largest toy company in the world and one of the most popular, present in a large number of homes.',
    image: 'https://exitocol.vtexassets.com/arquivos/ids/15306968-800-auto?v=638030094483870000&width=800&height=auto&aspect=true'
})
juguetesList.push({
    id: '139',
    amount: '1',
    name: 'DC Super Pets Krypto And Superman Mattel',
    price: '24 USD',
    description: 'Toy sold by Mattel Colombia.',
    image: 'https://jumbocolombiaio.vtexassets.com/arquivos/ids/386829-800-600?v=637932356188200000&width=800&height=600&aspect=true'
})
juguetesList.push({
    id: '140',
    amount: '1',
    name: 'Fisher-price My First Rocki Toy 6 Months and Up',
    price: '29 USD',
    description: 'Your baby is favorite friend is back and ready for learning fun at home or on the go. My First Rocki is plush and adorable, his tummy is full of music, sounds and phrases that teach your little one the alphabet, numbers, shapes and much more! Just press his tummy to see My First Rocki light up with colors and fun, educational melodies. Where development comes into play.',
    image: 'https://http2.mlstatic.com/D_NQ_NP_603126-MLM49059247259_022022-O.webp'
})


juguetesList.push({
    id: '141',
    amount: '1',
    name: 'Funko Pop Harry Potter (132) Harry Potter Wizarding World',
    price: '16 USD',
    description: 'The store did not include a product description',
    image: 'https://exitocol.vtexassets.com/arquivos/ids/11521485/funko-pop-harry-potter-132.jpg?v=637771007650070000'
})
juguetesList.push({
    id: '142',
    amount: '1',
    name: 'Hasbro Legends Series Marvel Doctor Strange: No Way Home Build-A-Figure: Marvel is Armadillo F3023 Action Figure',
    price: '30 USD',
    description: 'The action figures are made of plastic, which ensures that they are nice and soft to the touch, differentiating the different textures and reliefs of the characters bodies.',
    image: 'https://http2.mlstatic.com/D_NQ_NP_790909-MLA52223472628_102022-O.webp'
})
juguetesList.push({
    id: '143',
    amount: '1',
    name: 'Figure Avengers Titan Hero Series Captain America 30cm',
    price: '14 USD',
    description: 'The action figures are made of plastic, which ensures that they are nice and soft to the touch, differentiating the different textures and reliefs of the characters bodies.',
    image: 'https://pepeganga.vtexassets.com/arquivos/ids/771160/100490750-3.jpg?v=637901367215300000'
})
juguetesList.push({
    id: '144',
    amount: '1',
    name: 'Interactive Woody Figure With Phrases In Spanish Mattel',
    price: '35 USD',
    description: 'Mattel, since 1945, has pursued fun and the manufacture of toys as a horizon to follow. It is the largest toy company in the world and one of the most popular, present in a large number of homes.',
    image: 'http://cdn.shopify.com/s/files/1/0612/7563/5954/products/igjexucunenpustkknvi.jpg?v=1663106875'
})
juguetesList.push({
    id: '145',
    amount: '1',
    name: 'Collection Of Figures Anime Demon Slayer X 5 Of Cm 7 Rengoku',
    price: '3 USD',
    description: 'With Tanjiro and Nezuko Kamado, Zenitsu Agatsuma, Inosuke Hashibira, Kyjur Rengoku from Kimetsu No Yaiba from DEMON SLAYER hours of fun are guaranteed. You can play with them following their stories or collect them for as long as you want.',
    image: 'https://http2.mlstatic.com/D_NQ_NP_960634-MCO50023631468_052022-O.webp'
})



juguetesList.push({
    id: '146',
    amount: '1',
    name: 'Figure Sasuke Uchiha Naruto Anime Collection + Gift',
    price: '14 USD',
    description: 'Excellent details and great quality, 100% real images of the product.',
    image: 'https://http2.mlstatic.com/D_NQ_NP_776021-MLA48054842483_102021-O.jpg'
})
juguetesList.push({
    id: '147',
    amount: '1',
    name: 'Uno Stacko Board Game To Play With Family And Friends',
    price: '18 USD',
    description: 'What better plan for a rainy afternoon than a board game? With the UNO Stacko Clásica you will create fun memories and spend unforgettable moments with your friends. Laughter is guaranteed with this entertaining pastime.',
    image: 'https://http2.mlstatic.com/D_NQ_NP_720883-MLU44470859333_012021-O.webp'
})
juguetesList.push({
    id: '148',
    amount: '1',
    name: 'Children is House Little Tikes Tan',
    price: '233 USD',
    description: 'If your kids love imaginative role-play, then look no further than Little Tikes Cape Cottage Playhouse. Both you and your children will love this stylish and modern playhouse with its working doors, windows and shutters. Your kids will love the fun role-play elements like a working mail slot and a flag holder that will spark their imaginations. It is easy to set up and take down with minimal hassle, and the lightweight design makes it easy to move, transport, or store, too. Little Tikes Cape Cottage Playhouse can be used indoors or out, so there is no limit to what your kids can imagine as they play.',
    image: 'https://http2.mlstatic.com/D_NQ_NP_613835-MCO44838649263_022021-O.jpg'
})
juguetesList.push({
    id: '149',
    amount: '1',
    name: 'M416 Gel Ball Blaster Splatter Ball, Battery Operated',
    price: '36 USD',
    description: 'infinite gel balls For unlimited fun, we ve added 20,000 rounds to the original 1,000 rounds of gel balls. 200 times the amount will give you 20 times the happiness. So you do not have to worry about not having enough gel balls so that you can waste your happiness. THEBEST CHOICE FOR OUTDOOR PLAY - The gel ball launcher is a great toy for kids and adults alike. Courtyards, jungles, hills and flat terrain. Some safe abandoned factories are also ideal places. It involves physical exercise, aiming skills, observation, and stamina. It is a great way to entertain yourself, especially group games, where the family can play outdoor shooting games together and have fun. Shooting games involve a lot of physical movement, which is good for the child is health and stamina.',
    image: 'https://http2.mlstatic.com/D_NQ_NP_779914-CBT50924225147_072022-O.jpg'
})
juguetesList.push({
    id: '150',
    amount: '1',
    name: 'Lionel Santa Fe Electric Train Set, With Remote Control',
    price: '493 USD',
    description: 'Product: Lionel Santa Fe Electric Train Set, With Remote Control',
    image: 'https://m.media-amazon.com/images/I/715-EQFq9VL.jpg'
})


userAvatar.addEventListener('click', asideCuentaActiva)

function asideCuentaActiva() {
    let cuentaActiva = asaideAccount.classList.toggle('inactiveAcc')

    if (cuentaActiva == true){
        asideCarrito.classList.add('inactive');
    }
}

if(CompraIcon){
    CompraIcon.addEventListener('click', asideCartActive);
}
    
    function asideCartActive() {
        let carritoActivo = asideCarrito.classList.remove('inactive');

        if (carritoActivo == asideCarrito.classList.remove('inactive')){
            asaideAccount.classList.add('inactiveAcc')
        }
    }
    
if(CompraIcon){
    cerrar.addEventListener('click', asideCartInactive);
}
    
    function asideCartInactive() {
        asideCarrito.classList.add('inactive');

    }

menuHambur.addEventListener('click', ()=> {
    asideHambur.classList.toggle('hamburActive')
})


if(containerProductos){
juguetesList.forEach((product) => {
    const {name, price, image, id} = product

    containerProductos.innerHTML += `
    <div class="productOne">
        <img src="${image}" alt="" class="imgProduct" onclick='mostrarProd(${id})'>
            <div class="infoProduct">
                <p class="priceProduct">${price}</p>
                <p class="nameProduct">${name}</p>
            
            </div>
            <div class="addBtn">
                <button type="button" class="addProduct" onclick='cartAddPdt(${id})'><img src="/image/addProducto.svg" alt=""></button>
            </div>
            
    </div>
    `
})
}


function mostrarProd(id) {
    let letter = juguetesList.find((product)=> product.id == id)
    if(informacionProd){
    informacionProd.push(letter)
    }
    filtroInfo.classList.add('asideInfoAct')
    mostarInfo()
}

let mostarInfo = () => {
    let filtroInfo = document.querySelector('.filtroInfo')


    if(informacionProd){
    informacionProd.forEach((product) => {
        const {name, price, image, id, description} = product
        
        filtroInfo.innerHTML = `
            <div class="productImfo">
                <img src="/image/x.svg" alt="" class="salirInfo">

                <div class="basicInfo">
                    <figure class="image">
                        <img src="${image}" alt="product" class="imgInfo">
                    </figure>

                    <section class="Name-Price">
                        <strong><p class="nameInfo">${name}</p></strong>
                        <strong><p class="priceInfo">$ ${price}</p></strong>

                        <p class="cuotas">You can pay up to 48 installments with:</p>

                        <figure class="tarjetas"> 
                            <img src="/image/masterCard.svg" class="masterCard">
                            <img src="/image/visa.svg" class="visa">
                            <img src="/image/paypal.svg" class="paypal">
                        </figure>

                        <div class="envio">
                            <img src="/image/envio.svg">
                            <p>Free shipping to your house</p>
                        </div>
                        <div class="envioInfo">
                            <p>We ship to more than 180 countries, totally free, and with an additional cost for Argentina, Turkey, Venezuela and Central Africa.</p>
                        </div>

                        <div class="devolucion">
                            <img src="/image/devolucion.svg">
                            <p>Free return</p>
                        </div>
                        <div class="devolucionInfo">
                            <p>You have 30 business days to make your return. Free if you go to our physical points, or a small additional cost if we go to your house for your returned product.</p>
                        </div>

                    </section>
                </div>

                <article class="Descrip">
                    <p class="paDescrip">Description:</p>
                    <p class="descripInfo">${description}</p>
                </article>
            
            </div>
            `
        })
    }
    let salirInfo = document.querySelector('.salirInfo')

    salirInfo.addEventListener('click', ()=>{
    filtroInfo.classList.remove('asideInfoAct')
    })
}






function cartAddPdt(id) {

    let sameProduct = emptyCar.some(prdt => prdt.id == id)

    if(sameProduct){
        let igual = emptyCar.map(igual => {
            if(igual.id == id){
                igual.amount++
            }
        })
    } else {
        let productFil = juguetesList.find((pdt) => pdt.id == id)
        emptyCar.push(productFil)
    }
    accumulatedCart()
}


let contadorProducts = document.querySelector('.contadorProducts')

let resultEnd = document.querySelector('.resultEnd');

let  accumulatedCart = () => {
    let productsInCart = document.querySelector('.products-in-cart');
    
    if(productsInCart){
    productsInCart.innerHTML = ''
    }
    emptyCar.forEach((pdt) => {
        const {name, priceNatural, price, discount, image, id, amount} = pdt;

        if(productsInCart){
        productsInCart.innerHTML += `
        <div class="storageProduct">
            <div>
                <img src="${image}" alt="" class="imgCart">
            </div>
            <div class="infoProduct-Cart">
                <span class="priceCart">${price}</span>
                <h4 class="nameCart">${name}</h4>
                <strong><span class="amountCart">Amount:${amount}</span></strong>
            
            </div>
            <div class="addBtn">
                <button type="button" class="removeProduct" onclick='cartRemovePdt(${id})'><span class="material-icons">delete</span></button>
            </div>
            
        </div>
        `
    }
})

    if(emptyCar.length === 0) {
        productsInCart.innerHTML = `
        <h6 class='notProducts'>¡You haven't added anything yet!</h6>
        `
    } 

    if(contadorProducts){
        contadorProducts.textContent = emptyCar.length
    }

    if(resultEnd){
    resultEnd.innerText = emptyCar.reduce((acc, product) => acc + parseInt(product.amount) * parseInt(product.price),0)
    }

    saveProduct()
}

function cartRemovePdt(id) {
    let productRem = id
    emptyCar = emptyCar.filter((pdt)=> pdt.id != productRem);
    accumulatedCart();
}


if(carroVacioNodo){
    carroVacioNodo.addEventListener('click', () => {
    emptyCar.length = [];
    accumulatedCart()
})
}

function saveProduct() {
    localStorage.setItem('emptyCar', JSON.stringify(emptyCar));
}

document.addEventListener('DOMContentLoaded', () => {
    emptyCar = JSON.parse(localStorage.getItem('emptyCar')) || [] 
    accumulatedCart()

    if(buttonProceso){
    document.querySelector('.buttonProcess').click(processPurchase)
    }
})


if(continuarCompra){
    continuarCompra.addEventListener('click', sigueCart)
}

function sigueCart () {
    if(emptyCar.length == 0) {
                Swal.fire({
                    title: '¡Your cart is empty!',
                    text: 'Buy something to continue shopping',
                    icon: 'error',
                    confirmButtonText: 'Accept',
            })
        } else {
            location.href = 'compraFinal.html';
        }
}


if(buttonProceso) {

    buttonProceso.addEventListener('click', processPurchase)

}



function processPurchase(){

    emptyCar.forEach((product) => {
        let resultOne = document.querySelector('.resultOne')
        let totalOne = document.querySelector('.totalOne')

        let {id, name, image, price, amount} = product

        let tr = document.createElement('tr');

        tr.innerHTML += `
            <td><img src="${image}"</td>
            <td>${name}</td>
            <td>${price}</td>
            <td>${amount}</td>
        `

        resultOne.appendChild(tr)

        totalOne.innerHTML = `
        <strong><p>Total: ${emptyCar.reduce((acc, product) => acc + parseInt(product.amount) * parseInt(product.price),0)}</p><strong>
        `
    })
}

if(sigueComprando){
    sigueComprando.addEventListener('click', retroceso)
}

function retroceso() {
    if(sigueComprando){
        location.href = 'index.html'
    }
}


if(formulario){
    formulario.addEventListener('submit', sendPurchase);
}

function sendPurchase(e){
    e.preventDefault()
    let usuario = document.querySelector('#usuario').value
    let mailForm = document.querySelector('#mailForm').value

    if(usuario === '' || mailForm === ''){
        Swal.fire({
          title: "You must fill in all the fields!",
          text: "fill the form",
          icon: "error",
          confirmButtonText: "Accept",
      })
    } else {
        const btn = document.getElementsByClassName('checkout');


        let load = document.querySelector('.load') 
        load.classList.add('load')
        load.classList.remove('load-none')

        setTimeout(() => {
            load.classList.remove('load')
            load.classList.add('load-none')
            formulario.reset()
        }, 5000);

        // document.getElementById('form')
        // .addEventListener('submit', function(event) {
        // event.preventDefault();

        btn.value = 'Sending...';

        const serviceID = 'default_service';
        const templateID = 'template_yf61kkp';

        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                btn.value = 'Send Email';
                alert('Sent!');
                }, (err) => {
                btn.value = 'Send Email';
                alert(JSON.stringify(err));
            });
    };
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

// Navegacion ambur

if(clothingHambur){
    clothingHambur.addEventListener('click', ()=>{
        location.href = 'ropa.html'
    })
}

if(technologyHambur){
    technologyHambur.addEventListener('click', ()=>{
        location.href = 'tecnologia.html'
    })
}

if(homeAppliancesHambur){
    homeAppliancesHambur.addEventListener('click', ()=>{
        location.href = 'electroDomesticos.html'
    })
}

if(toysHambur){
    toysHambur.addEventListener('click', ()=>{
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
