let CompraIcon = document.querySelector('.shoppingIcon');
let asideCarrito = document.querySelector('.aside-Cart');
let cerrar = document.querySelector('.to-Close')
let containerProductos = document.querySelector('.container-Products');
let carroVacioNodo = document.querySelector('.empty-Cart')
let sigueComprando = document.querySelector('.keepBuying');
let continuarCompra = document.querySelector('.continue-Shopping')
let buttonProceso = document.querySelector('.buttonProcess')
let formulario = document.querySelector('.formulario');
let userAvatar = document.querySelector('.userAvatar')
let asaideAccount = document.querySelector('.asaide-account')
let btnSwitch = document.querySelector('.switch')
let body = document.body;
let imgLogo = document.querySelector('.imgLogo');
let nameCompany = document.querySelector('.nameCompany')
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

let promotionsList = [];
let emptyCar = [];
let informacionProd = [];

promotionsList.push({
    id: '26',
    amount: '1',
    name: 'Gamer Chair Swivel Ergonomic Reclining Office Chair',
    priceNatural: '149 USD',
    price: '131 USD',
    discount: '11% OFF',
    description: 'The selection of a suitable chair is very important to prevent future injuries. With this Gamer chair, you will have the comfort and well-being you need throughout your day. In addition, you can place it in any part of your home or office since its design adapts to multiple environments. Give your spaces a more modern touch!',
    image: 'https://zerilanka.com/wp-content/uploads/2021/08/93b5f9913d2e4316cd6e541c67b9aed0-2.jpg'
})
promotionsList.push({
    id: '27',
    amount: '1',
    name: 'Smart Watch D20 Pro Smartwatch+ Wireless Headphones',
    priceNatural: '16 USD',
    price: '15 USD',
    discount: '5% OFF',
    description: 'Use a 1.3-inch larger screen, bigger, clearer words, high-sensitivity touch, the screen can achieve various operations such as: incoming call notification, social media message notification, text messages, remote shutter via Bluetooth camera, step counter, calories, distance traveled, GPS, sleep monitoring, heart rate, quick view various functions, and the large color screen touch button operation is smoother. Y68',
    image: 'https://http2.mlstatic.com/D_NQ_NP_875971-MCO47533309254_092021-O.jpg'
})
promotionsList.push({
    id: '28',
    amount: '1',
    name: 'UrbanFit Pro Gold 8000 110V Black Electric Treadmill',
    priceNatural: '491 USD',
    price: '309 USD',
    discount: '37% OFF',
    description: 'UrbanFit Pro treadmills are ideal for those who want to run comfortably every day thanks to their wide running surface. Compatible with wireless technologies that will allow you to enjoy personalized and 100% functional training.',
    image: 'https://http2.mlstatic.com/D_NQ_NP_2X_994940-MLA43916044345_102020-V.webp'
})
promotionsList.push({
    id: '29',
    amount: '1',
    name: 'Cell phone Tecno Camon 18p 128gb / 8 Ram / 48mp',
    priceNatural: '256 USD',
    price: '160 USD',
    discount: '37% OFF',
    description: 'Helium G96. Extreme performance.',
    image: 'https://www.korolos.com.co/wp-content/uploads/2022/08/CAMON-18P-KOROLOS.jpg'
})
promotionsList.push({
    id: '30',
    amount: '1',
    name: 'Fusion Water Sunscreen Spf50+ - Isdin Isdin',
    priceNatural: '22 USD',
    price: '17 USD',
    discount: '20% OFF',
    description: 'Aqueous phase facial photoprotector with different shades of color and ultra-light texture, intense hydration and immediate absorption that guarantees high protection against UV radiation to enjoy the sun in a protected way during outdoor activities.',
    image: 'https://piel.net.co/img/cms/thumbnail_fw_mx_01_render_0_1.jpg'
})
promotionsList.push({
    id: '31',
    amount: '1',
    name: '26 Cm Led Light Ring With Cell Phone Holder And Tripod 2.10',
    priceNatural: '10 USD',
    price: '8 USD',
    discount: '10% OFF',
    description: '26cm Ring Light That Comes With Cell Phone Holder, To Help You When You Need Extra Light For Makeup, Taking Photos, Making Videos, Reading Books And Live Streaming. The brightness is adjustable with 3 lighting modes: white, warm yellow and warm white.',
    image: 'https://http2.mlstatic.com/D_NQ_NP_600915-MCO49077781171_022022-O.jpg'
})
promotionsList.push({
    id: '32',
    amount: '1',
    name: 'Microsoft Xbox Series S 512GB Standard white color',
    priceNatural: '384 USD',
    price: '341 USD',
    discount: '341 USD',
    description: 'The new generation of consoles is led by the Xbox Series that came to the market to surprise everyone. Its power and high performance will allow you to reduce the hours of downloading games and content considerably compared to other consoles. In addition, you will be able to play for hours while having fun with players from all over the world.',
    image: 'https://m.media-amazon.com/images/I/61Xtx4mXvvL._AC_SL1200_.jpg'
})
promotionsList.push({
    id: '33',
    amount: '1',
    name: 'Femmto Submersible Pump Deep Well 55m 1hp 6500l/h',
    priceNatural: '208 USD',
    price: '106 USD',
    discount: '48% OFF',
    description: 'Submersible Water Pump Bullet Pen For Well Femmto 4 Inches - 1 HP - 55 Meters- 6500 Liters Per Hour',
    image: 'https://http2.mlstatic.com/D_NQ_NP_760014-MCO53282880453_012023-O.jpg'
})
promotionsList.push({
    id: '34',
    amount: '1',
    name: 'Tramontina Knife Set X9 Pieces',
    priceNatural: '19 USD',
    price: '18 USD',
    discount: '5% OFF',
    description: 'Recommendations for use: Before first use, wash the piece well and dry it. Sharp and piercing product, be careful when handling it and keep it out of the reach of children.',
    image: 'https://http2.mlstatic.com/D_NQ_NP_632680-MCO43962266015_102020-O.jpg'
})
promotionsList.push({
    id: '35',
    amount: '1',
    name: 'New Lightweight Folding Standard Wheelchair',
    priceNatural: '123 USD',
    price: '112 USD',
    discount: '8% OFF',
    description: 'Its folding frame makes it easy to transport and store. Its star-type rim tire is ideal for wet environments. It has a hammered steel structure which allows greater durability. It has removable armrests and footrests for user comfort. Its handbrakes are ergonomic and easy to operate. Its handbrakes are ergonomic and easy to operate. Easy to clean thanks to its cordovan upholstery. Thanks to its removable parts it is easy to store and transport.',
    image: 'https://http2.mlstatic.com/D_NQ_NP_761726-MCO52012395625_102022-O.webp'
})
promotionsList.push({
    id: '36',
    amount: '1',
    name: 'Epson L3210 Multifunctional Printer 3 In 1 Ecotank Scanner',
    priceNatural: '182 USD',
    price: '159 USD',
    discount: '12% OFF',
    description: 'The EcoTank L3210 offers total reliability thanks to Epson Is Heat-Free technology, plus an easy, clean and error-free refilling experience with EcoFitTM technology. Designed to blend into your lifestyle, it Is fully connected with mobile printing capabilities via the intuitive new Epson Smart Panel app and features a super-compact front tank design that takes up little space and makes it easy to check ink levels .',
    image: 'https://falabella.scene7.com/is/image/FalabellaCO/19828123_1?wid=800&hei=800&qlt=70'
})
promotionsList.push({
    id: '37',
    amount: '1',
    name: 'Iron 9 In 1 Sublimation Iron For Stamping Combo',
    priceNatural: '466 USD',
    price: '385 USD',
    discount: '17% OFF',
    description: '9 In 1 Combo Sublimation Plate Heat Transfer Press. Double LED screen. Keep track of temperature and time, defending your safety with smart design Fahrenheit and Celsius convertible. teflon coated element. Teflon coated to make it non-stick surface All nuts, bolts, solder, etc. they snap right into place. Non-slip yellow handle. Made of rubber provides a comfortable hand feeling. spring press plate',
    image: 'https://http2.mlstatic.com/D_NQ_NP_840950-MCO50164276380_062022-O.jpg'
})
promotionsList.push({
    id: '38',
    amount: '1',
    name: 'Gamer keyboard Redragon Kumara K552 QWERTY Outemu Red Spanish Spain black color with rainbow light',
    priceNatural: '64 USD',
    price: '46 USD',
    discount: '26% OFF',
    description: 'The high quality of the Redragon Kumara K552, and its affordable price make it an ideal attraction for you to have fun in front of the screen. Its ergonomics, its non-slip base and its fast response time allow your favorite games to feel closer than ever, at your fingertips.',
    image: 'https://http2.mlstatic.com/D_NQ_NP_636746-MLA52350707355_112022-O.webp'
})
promotionsList.push({
    id: '39',
    amount: '1',
    name: 'Nokia 110 4G 128MB black 48MB RAM',
    priceNatural: '46 USD',
    price: '39 USD',
    discount: '15% OFF',
    description: 'If you are looking for a device that allows you to always be in touch, this 110 4G phone is an excellent option. You will be able to communicate immediately with friends, or with the people of your family. And also, if you are working, you will achieve greater collaboration with your team.',
    image: 'https://i.linio.com/p/c6b4acc3e365bdb486c9d1295f7369d2-product.jpg'
})
promotionsList.push({
    id: '40',
    amount: '1',
    name: 'Under Armor Valsetz Microg Boot',
    priceNatural: '96 USD',
    price: '69 USD',
    discount: '27% OFF',
    description: 'Lightweight synthetic leather and durable, breathable fabric upper. Welded forefoot reinforcement and molded TPU toe cap for added protection. Pull tabs at heel and tongue for easy on and off. Insite® Contoura® molded, antimicrobial and anti-fatigue support insoles with shock-absorbing foam',
    image: 'https://underarmourcol.vtexassets.com/arquivos/ids/426825-800-800?v=637660230431000000&width=800&height=800&aspect=true'
})
promotionsList.push({
    id: '41',
    amount: '1',
    name: 'Sofa Protector, Lining, Furniture, Double Face 3 Seats',
    priceNatural: '17 USD',
    price: '14 USD',
    discount: '10% OFF',
    description: 'COMFORTABLE: The beautiful quilted chair covers are made of polyester (MICROFIBER) material, have a much higher thread count for an extra soft feel compared to other slipcovers,. And the padding in the middle offers a cozy and comfortable SOFA PROTECTOR. This PROTECTOR FORRO FUNDA is super soft to the touch, making it a perfect sofa LINING for dogs and children.',
    image: 'https://http2.mlstatic.com/D_NQ_NP_826288-MCO46159937391_052021-O.jpg'
})
promotionsList.push({
    id: '42',
    amount: '1',
    name: 'Board game Monopoly Super electronic banking Hasbro E897',
    priceNatural: '32 USD',
    price: '27 USD',
    discount: '13% OFF',
    description: 'Committed to making the world a better place, Hasbro develops pastimes that aim to create unforgettable experiences for all users. With Monopoly Super electronic banking, hours of shared fun and entertainment are guaranteed.',
    image: 'https://planetachildrens.com/wp-content/uploads/2021/03/E8978.jpg'
})
promotionsList.push({
    id: '43',
    amount: '1',
    name: 'Omari Bathroom Cabinet 47.3 X 50 Rta White Color',
    priceNatural: '35 USD',
    price: '27 USD',
    discount: '22% OFF',
    description: 'bathroom cabinet with modern design, three shelves to locate multiple objects, easy to assemble, with measurements of: HEIGHT 47.3 WIDTH 50 DEPTH 12.2',
    image: 'https://http2.mlstatic.com/gabinete-de-bano-omari-473-x-50-rta-color-blanco-D_NP_2X_954017-MCO47755757898_102021-E.webp'
})
promotionsList.push({
    id: '44',
    amount: '1',
    name: 'Shuffler Automatic Card Shuffler Games Poker Playing Cards',
    priceNatural: '11 USD',
    price: '9 USD',
    discount: '8% OFF',
    description: 'Material: Plástico. Tamaño Aprox. Producto: 9,2 x 20,5 x 11 cm. Alimentación: 4 baterías AAA 1.5V (NO incluidas). Peso: 356 g.',
    image: 'https://www.apreciosderemate.com/53771-medium_default/maquina-para-barajar-4-decks-de-cartas-mezclador-barajador-automatico.jpg'
})
promotionsList.push({
    id: '45',
    amount: '1',
    name: 'Single Inflatable Mattress With Electric Pump 191 X 99 X30cm',
    priceNatural: '44 USD',
    price: '38 USD',
    discount: '15% OFF',
    description: 'Kind. simple mattresses. Measures. 99 x 191cm',
    image: 'https://http2.mlstatic.com/D_NQ_NP_846457-MCO49554086732_042022-O.jpg'
})
promotionsList.push({
    id: '46',
    amount: '1',
    name: 'Xiaomi Mi Band 7 + Replacement Bracelet + 3 Protectors',
    priceNatural: '53 USD',
    price: '50 USD',
    discount: '5% OFF',
    description: 'The look of the Mi Band 7 is still as recognizable as it has been in recent years. This year we have an increase in the diagonal of the screen, but without having an excessive impact on the design. We went from 1.56" to 1.62 inches of AMOLED screen. This adjustment causes it to be slightly thicker and less elongated.',
    image: 'https://http2.mlstatic.com/D_NQ_NP_816303-MCO50869464962_072022-O.jpg'
})
promotionsList.push({
    id: '47',
    amount: '1',
    name: 'Neoprene Exercise Dumbbell Kit Pair 2lb 3lb 5lb Rack',
    priceNatural: '48 USD',
    price: '37 USD',
    discount: '21% OFF',
    description: 'Set Kit Dumbbells Weights For Exercise 20 Pounds Gym Multicolor. Take your home workout routine to the next level with these premium quality dumbbells, ranging from 2 to 5 LB, in neutral colors that encourage you to lift them. Whatever you do, do it intensely! Comfort and ease of use, the Premium Neoprene coating withstands daily use while still looking good, plus they are less slippery so you can handle them even when you are sweating.',
    image: 'https://m.media-amazon.com/images/I/61PYz8-ppoL._AC_SL1500_.jpg'
})
promotionsList.push({
    id: '48',
    amount: '1',
    name: 'Bluetooth Headband With Ears Design Extra Bass Hd Girl',
    priceNatural: '19 USD',
    price: '16 USD',
    discount: '15% OFF',
    description: 'Updated model 2020 Designed to be an effective volume limiter to protect our little ones hearing, with a durable and comfortable fit for their little heads.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCZC3bCxvnRxKa_MEE7RjVhluQXXM3CeA8GB8Y1k4owzAy-yjq0PRkR8njQ3piOnNfYog&usqp=CAU'
})
promotionsList.push({
    id: '49',
    amount: '1',
    name: 'Tower Cpu Gamer Ryzen 5 5600g Vega 7 1tb 16gb Led 22 Pc',
    priceNatural: '801 USD',
    price: '544 USD',
    discount: '32% OFF',
    description: 'TOWER AX-6 (OR X15) GAMER, REAL SOURCE 300W, BOARD AMD A320M, PROCESSOR AMD RYZEN 5 5600G, INTEGRATED GRAPHICS AMD RADEON VEGA 7, RAM DDR4 16GB SHIELDED 3200MHZ 1X16GB (OR 2X8GB), HARD DISK 1TB (OR SSD 240GB) , 22" FHD LED MONITOR, GAMER KEYBOARD AND MOUSE',
    image: 'https://http2.mlstatic.com/D_NQ_NP_639060-MCO52147506871_102022-O.jpg'
})
promotionsList.push({
    id: '50',
    amount: '1',
    name: 'Travel Suitcase 21 Inches Cabin Flight Inter Bin Ht-081 White',
    priceNatural: '42 USD',
    price: '38 USD',
    discount: '7% OFF',
    description: 'Travel suitcases: 21”. Material. External: ABS 100%. Internal Material: 100% Polyester. Color White',
    image: 'https://i.linio.com/p/5d596b25227c8c850718cf09acef6ab2-product.jpg'
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
    promotionsList.forEach((product) => {
    const {name, priceNatural, price, discount, image, id} = product

    containerProductos.innerHTML += `
    <div class="productOne">
        <img src="${image}" alt="" class="imgProduct" onclick='mostrarProd(${id})'>
            <div class="infoProduct">
                <p class="priceDiscount">${priceNatural}</p>

                <div class="discount-price">
                    <p class="priceProduct">${price}</p>
                    <div>
                        <p class="discount">${discount}</p>
                    </div>
                </div>
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
    let letter = promotionsList.find((product)=> product.id == id)
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
        const {name, price, image, id, description, discount, priceNatural} = product
        
        filtroInfo.innerHTML = `
            <div class="productImfo">
                <img src="/image/x.svg" alt="" class="salirInfo">

                <div class="basicInfo">
                    <figure class="image">
                        <img src="${image}" alt="product" class="imgInfo">
                    </figure>

                    <section class="Name-Price">
                        <strong><p class="nameInfo">${name}</p></strong>
                        <strong><p class="priceNatural">${priceNatural}</p></strong>
                        
                        <div class="Price-Discount">
                            <strong><p class="priceInfoPromo">$ ${price}</p></strong>
                            <strong><p class="discountInfo">${discount}</p></strong>
                        </div>

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
        let productFil = promotionsList.find((pdt) => pdt.id == id)
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