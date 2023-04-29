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

let electroList = [];
let emptyCar = [];
let informacionProd = [];

electroList.push({
    id: '101',
    amount: '1',
    name: 'Imusa Easy Fry Deluxe 4.2l Digital Air Fryer',
    price: '69 USD',
    description: 'The Imusa air fryer will be your ally to prepare the meals you enjoy the most in a healthier way.',
    image: 'https://www.alkosto.com/medias/3045380017528-001-750Wx750H?context=bWFzdGVyfGltYWdlc3wxODcxNjR8aW1hZ2UvanBlZ3xpbWFnZXMvaGJkL2g4Ny8xMDcwNTkxOTQ0Mjk3NC5qcGd8YjEzNjBiN2ZmNzFjMmNiY2RjOTMxYzEwZDBjNmY3MjA2MWY2YTExMWU5NTQ5YmVhZjlhYzYyMDMxNDU4NDVmMA'
})
electroList.push({
    id: '102',
    amount: '1',
    name: 'No frost refrigerator Mabe Design RMP405FYCU stainless with freezer 400L 115V',
    price: '493 USD',
    description: 'Thanks to its A energy efficiency, you will save on the economy of your home and make the most of its performance, since it has 45% consumption savings. In addition, with its water dispenser you can refresh yourself quickly without having to open it.',
    image: 'https://www.mabeglobal.com/medias/mabe-nevera-420L-inoxidable-RMP420FYCU-frente.jpg-515Wx515H?context=bWFzdGVyfGltYWdlc3w3NzU1NXxpbWFnZS9qcGVnfGltYWdlcy9oNjQvaDE0Lzg4Njc1MDY5MTMzMTAuanBnfDc5ZTcyMmViY2VmNzQxMDNmMDA1MGVhY2FhYWNiNmQ1MTFjZGE2MDc2NzNjYjc0YzMwM2ZkZTA1ZmFjMmZkMjk'
})
electroList.push({
    id: '103',
    amount: '1',
    name: 'Whirlpool WWG18BSHLA automatic washing machine gray 18kg 110 V',
    price: '452 USD',
    description: 'You only need to insert the cleaning products and choose the desired program. Unlike the semi-automatic ones, it does not require you to be present at all stages of the process, so you will have clean and scented garments without effort.',
    image: 'https://jumbocolombiaio.vtexassets.com/arquivos/ids/335249/image-c7c7fa53c3a44ae1bf78300de6abb95f.jpg?v=637845203840070000'
})
electroList.push({
    id: '104',
    amount: '1',
    name: 'Kitchenaid K150 Red Passion Blender 1.4 L - Ksb1325pa Kitc',
    price: '143 USD',
    description: 'KitchenAid K150 Blender Passion Red 1.4 L - KSB1325PA Kitchenaid Revolutionize your kitchen with the K150 Blender, you will be able to achieve the perfect flavor, texture and consistency with the function of crushing ice in less than 10 seconds. Turn the kitchen into the center of your home with its extraordinary 3-element Blending System consisting of: Powerful 0.9 HP Motor, Innovative Asymmetric Blade to crush hard ingredients and an innovative Jar Design with a unique vortex for perfect consistencies, prepare the most delicious smoothies from the best. Do not go! why the best thing will be its 5-year guarantee and its variety of warm colors, premium performance for exceptional results with KitchenAid.',
    image: 'https://www.alkosto.com/medias/883049523866-001-750Wx750H?context=bWFzdGVyfGltYWdlc3wxMTY2ODB8aW1hZ2UvanBlZ3xpbWFnZXMvaDI2L2gzYS85NTA2MzU0ODIzMTk4LmpwZ3w4YWM5NDRmYmU1NjFkNDEwMTQxOTg5NGMzZjI3Y2M2OTg2OGU0Y2ViMDcwZTg5ZDlkYzhhNDRmMzBjYjVmODIx'
})
electroList.push({
    id: '105',
    amount: '1',
    name: 'Oster 2499 White Immersion Blender 60 Hz 120 V',
    price: '27 USD',
    description: 'This Oster 2499 industrial blender is perfect for preparing large quantities of mixtures in just a few minutes. It stands out for its power and ability to process ingredients. It will allow you to speed up production and increase work efficiency, more preparations in less time!',
    image: 'https://http2.mlstatic.com/D_NQ_NP_662997-MLA47630634031_092021-O.webp'
})


electroList.push({
    id: '106',
    amount: '1',
    name: 'Embedded Stove Sesame Haceb 60-43 Inox Natural Gas',
    price: '82 USD',
    description: 'Built-in gas stove in stainless steel 60x43 cm. It has 4 burners in different sizes that accommodate the diameters of your pots and the weight of your preparations and 1 fast burner 35% more powerful that speeds up cooking times.',
    image: 'https://hacebco.vteximg.com.br/arquivos/ids/160150-500-500/7704353391558-1--1200x1200.jpg?v=637087326550430000'
})
electroList.push({
    id: '107',
    amount: '1',
    name: 'Electrolux Power Speed ​​Stk12 Upright Vacuum Cleaner',
    price: '29 USD',
    description: 'The Electrolux Carbon Black Power Speed ​​Corded Upright Vacuum Cleaner has 1000W of power, as well as being perfect for cleaning your home and car. Being a 2-in-1 vacuum cleaner, it is versatile and covers all the needs when it comes to doing a good cleaning at home.',
    image: 'https://i.linio.com/p/3990341a900b68820fe48e81ee7dc792-product.jpg'
})
electroList.push({
    id: '108',
    amount: '1',
    name: '3 In 1 Multifunctional Sandwich Maker',
    price: '31 USD',
    description: 'Preparing various types of recipes with a single product IS possible with our multifunctional sandwich maker!',
    image: 'https://electrobello.vtexassets.com/arquivos/ids/156953/7702561882103-3.jpg?v=637759183093700000'
})
electroList.push({
    id: '109',
    amount: '1',
    name: 'Black+Decker TO3265XSS-LA 30L Silver 120V Electric Tabletop Oven',
    price: '112 USD',
    description: 'Reduced space, optimal cooking If your kitchen is small, the tabletop oven is the best solution. You will enjoy the same advantages as with a conventional one and you will gain practicality and comfort.',
    image: 'https://http2.mlstatic.com/D_NQ_NP_923789-MCO50951186156_082022-O.jpg'
})
electroList.push({
    id: '110',
    amount: '1',
    name: 'Electrolux Easy C3 EAS31 1.8L Red 127V 60Hz Sled Vacuum Cleaner',
    price: '114 USD',
    description: 'This steam cleaner includes the following accessories: floor brush, upholstery nozzle, corner nozzle, tube.',
    image: 'https://http2.mlstatic.com/D_NQ_NP_751166-MLV49156698445_022022-O.jpg'
})


electroList.push({
    id: '111',
    amount: '1',
    name: 'Gramera Kalley Kitchen Scale, 1g to 5kg, 2 Year Warranty',
    price: '10 USD',
    description: 'Greater accuracy in measurements because you can detect the change from gram to gram or ounce to ounce.',
    image: 'https://http2.mlstatic.com/D_NQ_NP_679434-MCO44388006795_122020-O.webp'
})
electroList.push({
    id: '112',
    amount: '1',
    name: 'Samurai 2-in-1 Turbo White 6-Blade Table/Stand Fan 14" Diameter 110V',
    price: '41 USD',
    description: 'Clean and fresh air in your environments! The Samurai 2-in-1 fan is a useful element to keep your home cool. With its optimal performance, the thermal sensation will decrease. It is a practical device, easy to assemble and install.',
    image: 'https://olimpica.vtexassets.com/arquivos/ids/173676/Ventilador-SAMURAI-Turbo-Silence-2e---12-.jpg?v=636780650311570000'
})
electroList.push({
    id: '113',
    amount: '1',
    name: 'Inverter fridge no frost Samsung RL4034SBABS/CO black stainless steel with freezer 400L 110V',
    price: '819 USD',
    description: 'Every time you open the door hot air pours in; Therefore, by having temperature control you can regulate the degrees so that your products always stay fresh. In addition, due to its inverter technology, this refrigerator cools your meals through an intelligent system with sensors that regulate the speed of the motor, maintaining the temperature evenly inside.',
    image: 'https://www.alkosto.com/medias/820Wx820H-master-hotfolder-transfer-incoming-deposit-hybris-interfaces-IN-media-product-8806090140587-001.jpg?context=bWFzdGVyfGltYWdlc3w3NjI2MHxpbWFnZS9qcGVnfGg4OS9oZTUvMTM0OTYyODMxNjg3OTgvODIwV3g4MjBIX21hc3Rlci9ob3Rmb2xkZXIvdHJhbnNmZXIvaW5jb21pbmcvZGVwb3NpdC9oeWJyaXMtaW50ZXJmYWNlcy9JTi9tZWRpYS9wcm9kdWN0Lzg4MDYwOTAxNDA1ODdfMDAxLmpwZ3xkYTViMzY5ZGVlM2RjMDUxODRiOWY1MmQyNjQyN2ZhNzAzYTc2ODY0YWNhYjBiZmEzNWMxMDJiYjBlNGE2MTVj'
})
electroList.push({
    id: '114',
    amount: '1',
    name: 'Kalley mini split inverter air conditioner 9000 BTU black 110V - 120V K-AC9IN1EW',
    price: '358 USD',
    description: 'The dehumidifier absorbs water from the air and reduces annoying humidity, creating a comfortable and quality environment. Inverter technology improves the efficiency of your equipment, enhances its cooling capacity and provides a more stable temperature.',
    image: 'https://www.kalley.com.co/medias/750Wx750H-master-hotfolder-transfer-incoming-deposit-hybris-interfaces-IN-media-product-7705946736138-002.jpg?context=bWFzdGVyfGltYWdlc3w0OTQ1NXxpbWFnZS9qcGVnfGg2Yi9oMGQvMTM2MTk0NjIzMDc4NzAvNzUwV3g3NTBIX21hc3Rlci9ob3Rmb2xkZXIvdHJhbnNmZXIvaW5jb21pbmcvZGVwb3NpdC9oeWJyaXMtaW50ZXJmYWNlcy9JTi9tZWRpYS9wcm9kdWN0Lzc3MDU5NDY3MzYxMzhfMDAyLmpwZ3w0N2E3YWMxMDRkOGEyMWU5Mzc3NmQ0MDNhYjI5NDBkNjgwZTAyNzA4ZmYzZmI1YTJkYjkxNjQ0YzY3YmJjMDcz'
})
electroList.push({
    id: '115',
    amount: '1',
    name: 'Microwave Haceb HM AZAFRAN 0.7 black 20L 120V',
    price: '74 USD',
    description: 'It offers a maximum power of 700 watts that can be regulated at different levels depending on the type of food, for example, to prevent more delicate dishes such as pasta from drying out. With its easy use, you can select and program in a practical way.',
    image: 'https://falabella.scene7.com/is/image/FalabellaCO/9073727_1?wid=800&hei=800&qlt=70'
})


electroList.push({
    id: '116',
    amount: '1',
    name: 'Mabe EMM2P black 127V water dispenser',
    price: '95 USD',
    description: 'Ideal temperature this dispenser will provide you with hot and cold water, so that you can use it in any activity of your daily life. You can enjoy a cool drink or prepare your favorite infusions in an instant.',
    image: 'https://cdn10.totalcode.net/mercacentro/product-zoom/es/dispensador-de-agua-mabe-de-mesa-para-botellon-emm2pn-negro-8.webp'
})
electroList.push({
    id: '117',
    amount: '1',
    name: 'Haceb Super Romero Ultra stove natural gas 4 burners black 120V door with viewer',
    price: '240 USD',
    description: 'With Haceb you will cook calmly and safely, thanks to the built-in thermo-security systems that prevent possible gas leaks. Easy to clean, since its manufacturing materials reduce the appearance of stains, scratches and discoloration over time. Cook like an expert, to your liking and turn your food into the best preparations.',
    image: 'https://falabella.scene7.com/is/image/FalabellaCO/7621156_1?wid=800&hei=800&qlt=70'
})
electroList.push({
    id: '118',
    amount: '1',
    name: 'Gas built-in oven with electric grill (Multigas) Haceb Masala HX 60 NE 67L black 120V',
    price: '197 USD',
    description: 'The programmable timer will help you adjust the indicated minutes. In addition, with the adjustable thermostat you can manage the right heat and achieve the right point.',
    image: 'https://http2.mlstatic.com/D_NQ_NP_856090-MCO43252536522_082020-O.jpg'
})
electroList.push({
    id: '119',
    amount: '1',
    name: 'Black+Decker FP4200 450W Black 120V Food Processor',
    price: '43 USD',
    description: 'When preparing your favorite dishes, all your needs will be easily covered with this Black+Decker food processor. Discover a new way of cooking and surprise your family with the most delicious preparations. This appliance will manage to transform food in the shortest time and will become your essential helper in the kitchen.',
    image: 'https://i.linio.com/p/78b6fbc9b3a625074a8d4797ed310886-product.jpg'
})
electroList.push({
    id: '120',
    amount: '1',
    name: 'Oster BVSTDCDR5 semi-automatic black filter coffee maker 127V',
    price: '33 USD',
    description: 'With Oster your coffee will never be the same again! The coffee makers of this brand offer the possibility of using ground or direct coffee in capsules, they are also very practical when it comes to preparing the best coffee with the smallest detail and aromas that will delight everyone.',
    image: 'https://osterco.vteximg.com.br/arquivos/ids/155973-500-500/BVSTDCDR5B-2.jpg?v=636118646895200000'
})


electroList.push({
    id: '121',
    amount: '1',
    name: 'Kalley K-VM8N02 black table and wall fan with 3 polypropylene blades, 7" diameter 110',
    price: '22 USD',
    description: 'Clean and fresh air in your environments! The Kalley K-VM8N02 fan is a useful element to provide freshness at home. With its optimal performance, the thermal sensation will decrease. It is a practical device, easy to assemble and install.',
    image: 'https://www.imtecnologia.co/wp-content/uploads/2021/08/76001022.png'
})
electroList.push({
    id: '122',
    amount: '1',
    name: 'Kalley 2 Place Toaster',
    price: '22 USD',
    description: 'Do you remember the classic smell of freshly made toast at grandma Is house? How about a big breakfast of toast and scrambled eggs? With the Kalley K-MTP750SS toaster you will ensure an even and crunchy result. Preparing snacks will be a simple and practical task. Do it with your favorite ingredients! In addition, its elegant and functional design will stand out in your kitchen.',
    image: 'https://exitocol.vtexassets.com/arquivos/ids/14742124/tostadora-de-pan-kalley-k-mtp750ss-750w-negro.jpg?v=637992208793800000'
})
electroList.push({
    id: '123',
    amount: '1',
    name: 'Elite Gourmet Edb-302bf Electric Stove, Double, 1500 Watts',
    price: '64 USD',
    description: 'Compact and Portable: The compact size of the burner makes it an easily accessible item to take with you wherever an additional cooking device is needed, at school, the office, camping trips or at home.',
    image: 'https://simaro.co/media/catalog/product/L/a/La-Cocina-de-lite-Elctrico-de-Doble-Fundido-Quemador-Caliente-de-la-Placa-de-EDB-302BF-Negro_3.jpeg'
})
electroList.push({
    id: '124',
    amount: '1',
    name: '220v 5.5kw Instantaneous Small Electric Water Heater',
    price: '94 USD',
    description: '20v 5.5kw mini hot water heater without gallbladder shower hot water system kitchen gold This is a lightweight electric water heater, the inherent quality and classic appearance of the perfect match for the multiple needs of different families.',
    image: 'https://http2.mlstatic.com/D_NQ_NP_706565-CBT45180379906_032021-O.jpg'
})
electroList.push({
    id: '125',
    amount: '1',
    name: 'Vvinrc Food Dehydrator, 1000w, 10 Trays',
    price: '361 USD',
    description: 'Large Capacity, Low Energy Consumption: 10 trays and 1 drip tray, our 304 stainless steel food dehydrator provides enough space to dry all kinds of vegetables, fruits, herbs, meat, fish, shrimp, bread, mushrooms and others quickly. and easily. It can lock the minerals and vitamins in food, keep it more nutritious.',
    image: 'https://m.media-amazon.com/images/I/71QfosJZLWL.jpg'
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
    electroList.forEach((product) => {
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
    let letter = electroList.find((product)=> product.id == id)
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
        let productFil = electroList.find((pdt) => pdt.id == id)
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
