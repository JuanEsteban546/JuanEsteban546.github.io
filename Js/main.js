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


let productList = [];
let emptyCar = [];
let informacionProd = [];

productList.push({
    id: '1',
    amount: '1',
    name: 'Shaggy Carpet Mat 150*200 Cm Living Room - Various Colors',
    price: '21 USD',
    description: 'The seller did not include a product description',
    image: 'https://http2.mlstatic.com/D_NQ_NP_985168-MCO48504931557_122021-O.jpg'
})
productList.push({
    id: '2',
    amount: '1',
    name: 'Professional Folding Massage Table Spa Tatto',
    price: '108 USD',
    description: 'The best Portable Massage Bed has been crafted with the highest quality components and materials. With proper use and care, providing a long life of reliable operation, it also has a leather-like vinyl lining.',
    image: 'https://i.linio.com/p/2529b744d0bb2d9e8befaf74875f28bb-product.jpg'
})
productList.push({
    id: '3',
    amount: '1',
    name: 'Xiaomi Redmi Note 11S Dual SIM 128 GB Sunset Blue 6 GB RAM',
    price: '205 USD',
    description: 'Professional photography in your pocket, discover infinite possibilities for your photos with the 4 main cameras of your team. Put your creativity to the test and play with the lighting, different planes and effects to obtain great results.',
    image: 'https://www.alkosto.com/medias/6934177769306-001-750Wx750H?context=bWFzdGVyfGltYWdlc3wxODg4Mzd8aW1hZ2UvanBlZ3xpbWFnZXMvaDc3L2gxZi8xMjQxNjAxMTEwODM4Mi5qcGd8MTQzMWI2MzMyZmJhMzEwNDMxMjg0ZjQ0N2E3NjM1YmY1YmU3NmUzNjIzNDczYjBlMTM5MjY1YTlmNTg3NjY1ZA'
})
productList.push({
    id: '4',
    amount: '1',
    name: 'Ergonomus Delphi desk chair 1 base nylon castors nylon arms 1D black with fabric upholstery',
    price: '107 USD',
    description: 'The selection of a suitable chair is very important to prevent future injuries. With this Ergonomus chair, you will have the comfort and well-being you need throughout your day. In addition, you can place it in any part of your home or office since its design adapts to multiple environments. Give your spaces a more modern touch!',
    image: 'https://http2.mlstatic.com/D_Q_NP_925650-MLA49826982530_052022-O.webp'
})
productList.push({
    id: '5',
    amount: '1',
    name: 'Nintendo Switch OLED 64GB Standard color neon red, neon blue and black',
    price: '400 USD',
    description: 'Switch became one of the most versatile consoles on the market thanks to its portable and desktop use. Nintendo developed this model with the aim of having all the comforts of elite technology in a portable device with which you can play and enjoy various online content.',
    image: 'https://http2.mlstatic.com/D_NQ_NP_980407-MLA47920420600_102021-O.jpg'
})
productList.push({
    id: '6',
    amount: '1',
    name: 'Black+Decker Durapro BLBD210G 1.24 L Black Blender with Glass Jar 120V',
    price: '34 USD',
    description: 'An essential appliance in your home. The Black+Decker BLBD210G blender will help you achieve incredible results in everything you prepare, whether you want to enjoy a very cold drink, sauces and soups, or delicious desserts. Always have it at hand!',
    image: 'https://almacen.do/wp-content/uploads/2021/07/Licuadora-BlackDecker-DuraPro-10-Velocidades-BLBD210P-Negra-Turn-300x300.jpg'
})
productList.push({
    id: '7',
    amount: '1',
    name: 'Exercise Bike Spinning Gym',
    price: '122 USD',
    description: 'Spinning is an effective method to strengthen the muscles and lose weight. The spinning bike is one of the most used gym machines because of how much fun it can be and the large number of calories that we can burn.',
    image: 'https://http2.mlstatic.com/D_NQ_NP_647801-MCO51933950851_102022-O.jpg'
})
productList.push({
    id: '8',
    amount: '1',
    name: 'Laptop Lenovo Ryzen 5 5500u Ram 16gb Ssd 256gb V14',
    price: '383 USD',
    description: 'Whether you re running a spreadsheet, participating in a web conference, managing files, or tackling other jobs, the Lenovo 14" V14 will handle your needs efficiently. A reliable everyday business partner, designed for keep you productive and your data safe. Plus, its slimmer, smaller design with narrower bezels gives your business a sleek, professional look. Color, lid texture, and some ports may vary and may be optional depending on the model.',
    image: 'https://i.linio.com/p/c87e61c8fc535aa2b8380b4c12ef242e-product.jpg'
})
productList.push({
    id: '9',
    amount: '1',
    name: 'Gold Standard 100% Isolate 3 Lb + Free Shipping',
    price: '68 USD',
    description: 'To create GOLD STANDARD 100% ISOLATE, we begin by selecting only the highest quality whey protein that undergoes a series of sophisticated filtration processes to "isolate" excess fat, cholesterol, and sugar. A portion of this whey protein isolate is then hydrolyzed, broken down into small chains of amino acids, for easier digestion. The final product is a rapidly digestible complete protein containing no more than 1 gram of carbohydrate, less than 1 gram of fat, and more than 80% pure protein per serving. We work hard to ensure superior quality, so you can focus on achieving ambitious performance goals.',
    image: 'https://zonafit.co/wp-content/uploads/2020/12/isolate-5-lb.jpg'
})
productList.push({
    id: '10',
    amount: '1',
    name: 'Electrolux Essential Care automatic washing machine EWIF11D3CGSG gray 11.5kg 127 V',
    price: '298 USD',
    description: 'Electrolux has modern designs that adapt to each type of home and each need. It offers excellent options for those who prioritize durable technology and innovation in garment care.',
    image: 'https://http2.mlstatic.com/D_NQ_NP_748619-MLA45638372856_042021-O.jpg'
})
productList.push({
    id: '11',
    amount: '1',
    name: 'Ceiling Fan Kdk Original M56 Free Shipping',
    price: '61 USD',
    description: 'Three-month warranty for factory defects, Maintenance and original spare parts',
    image: 'https://http2.mlstatic.com/D_NQ_NP_723837-MCO31047633954_062019-O.jpg'
})
productList.push({
    id: '12',
    amount: '1',
    name: 'Automatic Rechargeable Bottle Water Dispenser',
    price: '3 USD',
    description: 'Getting the water out of the bottle has never been so easy! With this dispenser you can easily serve the water from the bottle.',
    image: 'https://http2.mlstatic.com/D_NQ_NP_626189-MCO44275208437_122020-O.jpg'
})
productList.push({
    id: '13',
    amount: '1',
    name: 'Set Of 2 Led Lights Kit For Photography And Video Tripod Light',
    price: '55 USD',
    description: 'Diversification shooting effects: Desktop LED video lighting with a tripod is equipped with 2 filters of 5 colors (red, orange, white, blue, yellow), which can meet a variety of photography and visual effects requirements, and suitable for YouTube videos, product photography, video conferences, online courses, etc.',
    image: 'https://http2.mlstatic.com/D_NQ_NP_980619-MCO45229829118_032021-O.jpg'
})
productList.push({
    id: '14',
    amount: '1',
    name: 'Microwave Electrolux EMDO25S3GSLU silver 25L 110V/220V',
    price: '95 USD',
    description: '100 years of experience, meeting the expectations and highest demands of professional chefs, guarantee the excellence of Electrolux. Its products stand out for their design and ease of use. Whether it is cooking up tender vegetables, defrosting a delicious stew or reheating midday leftovers, an Electrolux microwave is the most convenient way to do it.',
    image: 'https://electroluxco.vtexassets.com/arquivos/ids/158954/Microwave_EMDO20S3GSLUG_Front_Electrolux_Spanish.jpg?v=637583500997530000'
})
productList.push({
    id: '15',
    amount: '1',
    name: 'Lionel Messi T-shirt What do you look at Bobo Anda Pa Allá Ink',
    price: '7 USD',
    description: 'Full color print on mixed fabric that is soft to the touch. The availability of these garments is limited, do not miss your chance!',
    image: 'https://http2.mlstatic.com/D_NQ_NP_949758-MCO52889559312_122022-O.jpg'
})
productList.push({
    id: '16',
    amount: '1',
    name: 'Olaplex Bond Maintenance shampoo in a 250mL bottle for 1 unit',
    price: '24 USD',
    description: 'Fresh, more vital and manageable hair in just a few steps, thanks to Olaplex.',
    image: 'https://http2.mlstatic.com/D_NQ_NP_754244-MLA50161941811_062022-O.webp'
})
productList.push({
    id: '17',
    amount: '1',
    name: 'LOréal Professionnel Serie Expert Absolut Repair Mascara 250mL',
    price: '1 USD',
    description: 'El camino hacia un cabello perfecto requiere de un cuidado especial, y hoy puedes lograr ese cambio de la mano de LOréal Professionnel.',
    image: 'https://http2.mlstatic.com/D_NQ_NP_626761-MLA50180810949_062022-O.jpg'
})
productList.push({
    id: '18',
    amount: '1',
    name: 'Invisible Adhesive Breast Lift Tape Push Up',
    price: '3 USD',
    description: '°°° 100% GUARANTEED ORIGINAL PRODUCT, DO NOT BUY IMITATIONS NUMBER 1 IN SALES NATIONWIDE°°°',
    image: 'https://cdn.shopify.com/s/files/1/0603/8929/4264/products/cinta-levanta-busto-senos-adhesiva-invisible-push-up-393683_300x.jpg?v=1669443377'
})
productList.push({
    id: '19',
    amount: '1',
    name: '3 Medium Plastic Toys',
    price: '3 USD',
    description: 'Set of 3 assorted Medium Plastic Toys with whistle. These shaped plastic toys are ideal to bite, thanks to their size and flexibility they provide entertainment and fun for the master and their pet while strengthening teeth and jaws.',
    image: 'https://http2.mlstatic.com/D_NQ_NP_874754-MCO48941016716_012022-O.webp'
})
productList.push({
    id: '20',
    amount: '1',
    name: 'Diana Arroba Rice 25 Pounds - kg',
    price: '12 USD',
    description: 'This is the ideal rice for your most special dishes in your home, it is an excellent quality product known throughout the country for the good manufacturing practices used throughout the production and packaging process, Colombian Industry, harvested and packaged by DIANA CORPORACION S.A.S Sanitary Registry No. RSAT10I1302.',
    image: 'https://http2.mlstatic.com/D_NQ_NP_610190-MCO45196810530_032021-O.jpg'
})
productList.push({
    id: '21',
    amount: '1',
    name: 'T-shirt Rock Nirvana Nirvana Kot Cobain Goku Dragon Ball Pu',
    price: '50 USD',
    description: 'The seller did not include a product description',
    image: 'https://http2.mlstatic.com/D_NQ_NP_630701-CBT46732962455_072021-W.jpg'
})
productList.push({
    id: '22',
    amount: '1',
    name: 'High Quality Usb Port Waterproof Anti-theft Suitcase',
    price: '13 USD',
    description: 'With this suitcase you will feel more secure thanks to its invisible zipper. It also has a charging port so you can put a power bank on it and you can charge your cell phone comfortably while you are moving.',
    image: 'https://http2.mlstatic.com/D_NQ_NP_723716-MCO51601567862_092022-W.jpg'
})
productList.push({
    id: '23',
    amount: '1',
    name: 'Electrolux ERSO52B3HUS gray inverter fridge no frost with freezer 528L 110V - 120V',
    price: '804 USD',
    description: 'Freshness in your food every time you open the door hot air pours in; Therefore, by having temperature control you can regulate the degrees so that your products always stay fresh. In addition, due to its inverter technology, this refrigerator cools your meals through an intelligent system with sensors that regulate the speed of the motor, maintaining the temperature evenly inside.',
    image: 'https://falabella.scene7.com/is/image/FalabellaCO/12051168_6?wid=800&hei=800&qlt=70'
})
productList.push({
    id: '24',
    amount: '1',
    name: 'Cupboard Della 90 Rta White + Wengue',
    price: '121 USD',
    description: 'Cupboard with one drawer and six folding doors, ample storage spaces, metal handles and legs, with measurements of: HEIGHT 169 WIDTH 90 DEPTH 35',
    image: 'https://ebani.com.co/wp-content/uploads/2022/07/KLW-3369-Kitchen-90-Blanco-Wengue-cerrado-scaled.jpg'
})
productList.push({
    id: '25',
    amount: '1',
    name: 'Curved gamer monitor Samsung C27R500FHL led 27" dark blue gray 100V/240V',
    price: '177 USD',
    description: 'Samsung is faithfully committed to providing quality products that contribute to creating a better future for people. As a leading company in the technology industry, one of its main objectives is to develop advanced and innovative solutions. That is why with this monitor you will have and enjoy a great visual experience at all times.',
    image: 'https://clonesyperifericos.com/wp-content/uploads/2020/10/12-1.png'
})
// productList.push({
//     id: '',
//     amount: '',
//     name: '',
//     price: '',
//     description: '',
//     image: ''
// })

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
productList.forEach((product) => {
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
    let letter = productList.find((product)=> product.id == id)
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
        let productFil = productList.find((pdt) => pdt.id == id)
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
