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


let tecnologiaList = [];
let emptyCar = [];
let informacionProd = [];


tecnologiaList.push({
    id: '76',
    amount: '1',
    name: 'AirPods (3rd Generation)',
    price: '200 USD',
    description: 'The sound reaches you from all sides. Live an immersive experience when you listen to music or watch a movie or a series. AirPods gyroscopes and accelerometers follow the movement of your head so you feel like you are always in the middle of the action.1',
    image: 'https://falabella.scene7.com/is/image/FalabellaCO/20853099_1?wid=800&hei=800&qlt=70'
})
tecnologiaList.push({
    id: '77',
    amount: '1',
    name: 'Samsung Galaxy S23 Ultra Dual SIM 512 GB phantom black 12 GB RAM',
    price: '1308 USD',
    description: 'With its powerful processor and 12 GB RAM memory, your device will achieve high performance with a high speed of content transmission and will run multiple applications at the same time without delays.',
    image: 'https://http2.mlstatic.com/D_NQ_NP_2X_679726-MLA53452158591_012023-V.webp'
})
tecnologiaList.push({
    id: '78',
    amount: '1',
    name: 'Apple iPhone 13 (128GB) - Stellar White',
    price: '1080 USD',
    description: 'iPhone 13. The most advanced two-camera system in an iPhone. The super-fast A15 Bionic chip. A huge jump in battery life. A resistant design. And a brighter Super Retina XDR display.',
    image: 'https://http2.mlstatic.com/D_NQ_NP_793813-MLA47781882791_102021-O.jpg'
})
tecnologiaList.push({
    id: '79',
    amount: '1',
    name: 'Macbook Pro 14 Chip M1 Pro 512gb - Space Gray',
    price: '2515 USD',
    description: '79 keys, including 12 standard height function and 4 arrow keys arranged in an inverted T shape',
    image: 'https://m.media-amazon.com/images/I/31jA5LDJdoL.jpg'
})
tecnologiaList.push({
    id: '80',
    amount: '1',
    name: 'Gamer keyboard T-Dagger Bora T-TGK315 QWERTY T-Dagger Blue Spanish black color with RGB light',
    price: '40 USD',
    description: 'This high-performance T-Dagger keyboard allows you to enjoy unlimited hours of gaming. It is specially designed so that you can express both your skills and your style. You will be able to improve your gaming experience, whether you are an amateur or an expert, and take your plays to another level.',
    image: 'https://www.internacionaldetecnologia.com.co/wp-content/uploads/2022/03/T-TGK315-BL-1.jpg'
})


tecnologiaList.push({
    id: '81',
    amount: '1',
    name: 'Logitech G Series G502 Hero Black Gaming Mouse',
    price: '53 USD',
    description: 'Logitech designs products and experiences that have an everyday place in people is lives, with a focus on innovation and quality. Their goal is to create truly unique and meaningful moments for their users. Logitech mice conform to the shape of your hand for hours of comfort. With no need to move your arm to slide the cursor, your hand will be less fatigued. They are ideal for any workspace and for those who have a table full of various objects.',
    image: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/017/593/products/910-005566-31-decf98f1757117f60015982974205597-480-0.webp'
})
tecnologiaList.push({
    id: '82',
    amount: '1',
    name: 'Gaming laptop Asus TUF Gaming FX506LH black 15.6", Intel Core i5 10300H 8GB RAM 512GB SSD, NVIDIA GeForce GTX 1650 144 Hz 1920x1080px Windows 10',
    price: '729 USD',
    description: 'Enjoy the perfect combination of performance and design with this Asus TUF Gaming FX506LH computer. You will find in it an excellent tool for your daily work and for your moments of entertainment. Take advantage of the extraordinary experience that the brand has to offer you and optimize the quality of your images and videos.',
    image: 'https://static-media.laptopoutlet.co.uk/catalog/product/T/U/TUFA17-FA706IH-H7012T-1_1_1.jpg?store=default&image-type=image'
})
tecnologiaList.push({
    id: '83',
    amount: '1',
    name: 'i7S TWS wireless in-ear headphones white',
    price: '4 USD',
    description: 'Unlike other connectivities, this device is made with TWS (True Wireless Stereo) technology. It allows a total wireless connection and works without a single cable between pairs. With it you can enjoy the sound environment without having to be aware of physical connections.',
    image: 'https://apollo-virginia.akamaized.net/v1/files/8zlhtpn7evda3-CO/image;s=850x0'
})
tecnologiaList.push({
    id: '84',
    amount: '1',
    name: 'Nintendo Switch OLED 64GB Standard color neon red, neon blue and black',
    price: '368 USD',
    description: 'Switch became one of the most versatile consoles on the market thanks to its portable and desktop use. Nintendo developed this model with the aim of having all the comforts of elite technology in a portable device with which you can play and enjoy various online content.',
    image: 'https://falabella.scene7.com/is/image/FalabellaCO/20527882_1?wid=800&hei=800&qlt=70'
})
tecnologiaList.push({
    id: '85',
    amount: '1',
    name: 'GoPro Hero11 black 5.3K NTSC/PAL camera black',
    price: '489 USD',
    description: 'GoPro inspires you to reach your goals while enjoying the road. Their cameras are designed to help you capture every experience the way you want. With more than 26 million GoPros sold worldwide, this international company seeks to harness the creativity of its customers and fuel their passion through increasingly distinctive and innovative products.',
    image: 'https://http2.mlstatic.com/D_Q_NP_682818-MLA53005199567_122022-O.webp'
})


tecnologiaList.push({
    id: '86',
    amount: '1',
    name: 'Magsafe Magnetic Hard Case for iPhone',
    price: '6 USD',
    description: '*** DOES NOT INCLUDE CHARGER OR MAGNETIC BASE ***',
    image: 'https://exitocol.vtexassets.com/arquivos/ids/15499244/funda-estuche-rigido-magnetico-magsafe-para-iphone-13-pro-max.jpg?v=638042134098800000'
})
tecnologiaList.push({
    id: '87',
    amount: '1',
    name: 'Smart TV Samsung Series 7 UN58AU7000KXZL LED 4K 58" 100V/240V',
    price: '438 USD',
    description: 'Samsung is recognized worldwide as a leading company in the technology industry. All its products are designed with superior quality and designed to contribute to a better future. Therefore, it will make you enjoy an incomparable experience.',
    image: 'https://exitocol.vtexassets.com/arquivos/ids/10432747/televisor-samsung-uhd-58-pulgadas-smart-tv-4k-un58au7000k.jpg?v=637693075319970000'
})
tecnologiaList.push({
    id: '88',
    amount: '1',
    name: 'Alesis V49 Midi Controller Keyboard',
    price: '153 USD',
    description: 'Music unites and creates unique moments, that is why with this Alesis controller you can give your own touch to the songs you like the most and play like a professional DJ.',
    image: 'https://prosoundaltacalidad.com.co/2673-large_default/controlador-alesis-v25-.jpg'
})
tecnologiaList.push({
    id: '89',
    amount: '1',
    name: 'Tablet Samsung Galaxy Tab A A8 SM-X200 10.5" 128GB dark gray and 4GB of RAM',
    price: '183 USD',
    description: 'This Samsung tablet is the ideal companion, with plenty of capacity for each of your activities. The slim, compact and portable design, easy to hold in one hand, makes it a perfect combination of performance and versatility.',
    image: 'https://electronicapanamericana.com/wp-content/uploads/SM-X200NZALGTO-4-1030x1030.jpg'
})
tecnologiaList.push({
    id: '90',
    amount: '1',
    name: 'Sony PlayStation 5 825GB God of War Ragnarok Bundle black and white color',
    price: '714 USD',
    description: 'PlayStation renewed the expectations of the virtual world with this new console and its great performance. It has a faster and easier to navigate user interface than previous models. In addition, you will be able to play for hours challenging millions of opponents around the world who are waiting for new challenges.',
    image: 'https://i.linio.com/p/10d6faaaf007e81d0611c4a03d4725fe-product.jpg'
})


tecnologiaList.push({
    id: '91',
    amount: '1',
    name: 'Microsoft Xbox Series X 1TB Standard Color Black',
    price: '649 USD',
    description: 'With your Xbox Series console you will have guaranteed entertainment every day. Its technology was created to put new challenges to both beginners and expert players.',
    image: 'https://http2.mlstatic.com/D_NQ_NP_962057-MCO44773036949_022021-V.jpg'
})
tecnologiaList.push({
    id: '92',
    amount: '1',
    name: 'DJI Mavic Mini 2 DRDJI018 Fly More Combo mini drone with 4K camera light gray 3 batteries',
    price: '679 USD',
    description: 'DJI drones are characterized by the best technology at the service of each type of user and shooting scenario. If you are looking for a drone for beginners, a professional drone or you just want to be updated with the latest innovations, it is time to choose this brand.',
    image: 'https://http2.mlstatic.com/D_NQ_NP_600163-MLA47979316272_102021-O.jpg'
})
tecnologiaList.push({
    id: '93',
    amount: '1',
    name: 'Western Digital WD Green WDS480G2G0A 480GB Green Internal SSD Solid Drive',
    price: '31 USD',
    description: 'Western Digital es una marca de renombre mundial en almacenamiento de datos con la cual puedes crear, experimentar y guardar contenidos a través de una amplia gama de dispositivos. La alta seguridad y rendimiento que brindan sus unidades la convierten en una de las empresas más elegidas del mercado. El WD Green WDS480G2G0A está adaptado para que puedas acceder de forma rápida a tus documentos digitales gracias a su tecnología en estado sólido.',
    image: 'https://http2.mlstatic.com/D_NQ_NP_635206-MLA45260714629_032021-O.jpg'
})
tecnologiaList.push({
    id: '94',
    amount: '1',
    name: 'Laptop Asus Tuf Onceava I5 11300h Ram 16gb Ssd 512gb Rtx3050',
    price: '1256 USD',
    description: 'Efficiency at your fingertips, its Intel Core i5 s processor, is designed for those who generate and consume content. With this central unit, the machine will carry out various processes simultaneously, from video editing to photo retouching with professional programs.',
    image: 'https://i.linio.com/p/9cdfcc7025db4ddd69f637729fd42f9e-product.jpg'
})
tecnologiaList.push({
    id: '95',
    amount: '1',
    name: 'Xiaomi Redmi Note 11S Dual SIM 128 GB Graphite Gray 8 GB RAM',
    price: '203 USD',
    description: 'amazing viewing experience Watch your favorite series and movies in the best definition through its 6.43" AMOLED screen. Enjoy brilliant colors and precise details in all your content.',
    image: 'https://exitocol.vtexassets.com/arquivos/ids/15853776/Celular-XIAOMI-Xiaomi-Redmi-Note-11S-128GB-Gris-128-GB-Gris-3191544_a.jpg?v=638055980031430000'
})


tecnologiaList.push({
    id: '96',
    amount: '1',
    name: 'Smart TV Samsung The Frame QN65LS03BAKXZL QLED 4K 65" 100V/240V',
    price: '739 USD',
    description: 'With the Smart TV QN65LS03BAK you will access different content through the applications. In addition, you will be able to surf the Internet, interact on social networks and have fun with video games.',
    image: 'https://i.blogs.es/d28ec0/frame-portada/1366_2000.jpg'
})
tecnologiaList.push({
    id: '97',
    amount: '1',
    name: 'Pc Computer Gamer Amd Ryzen 7 5700g Ssd 240 Hdd 1tb Ram 16',
    price: '792 USD',
    description: 'MONITOR INCLUDED: 22 INCH LED FULL HD RESOLUTION WITH HDMI & VGA',
    image: 'https://http2.mlstatic.com/D_862652-MCO47807316125_102021-O.jpg'
})
tecnologiaList.push({
    id: '98',
    amount: '1',
    name: 'Jvc Dla-nx7 D-ila Project',
    price: '19941 USD',
    description: 'JVC DLA-NX7 D-ILA projector is wrapped in a whole new design, which is packed with the latest projection features. For instance with the new 0. 69-inch native 4K D-ILA device, the projector can produce high-definition native 4K resolution (4096 x 2160) images from its all-glass 65 mm diameter lens system. HDR10 content can be projected at optimum quality with Auto Tone Mapping function, which automatically adjusts settings based on the mastering information. bining brightness of 1, 900 lm, dynamic contrast ratio of 800, 000: 1, and wide color gamut covering beyond the DCI-P3 range, the projector reproduces life like images for latest contents like HDR10 and Hybrid Log Gamma. Original motion control technology Clear Motion Drive is renewed, and together with Motion Enhance which optimizes the driving of D-ILA device according to the motion of the image, motion blur is reduced significantly pared to conventional projectors.',
    image: 'https://images-na.ssl-images-amazon.com/images/I/31IODaboqUL._AC_UL600_SR600,600_.jpg'
})
tecnologiaList.push({
    id: '99',
    amount: '1',
    name: 'Apple iPhone 12 Pro (128 Gb) - Gold Refurbished (Refurbished)',
    price: '616 USD',
    description: 'Estos dispositivos son sometidos a un diagnostico riguroso y cualquier parte o pieza defectuosa o dañada es sustituida por una nueva y 100% funcional. Por ende, debes tener en cuenta que puede tener leves marcas de uso o rayones mínimos en la pantalla o carcasa del equipo que en ningún caso afectan su desempeño funcional. Este equipo cuenta con 3 meses de garantía.',
    image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/refurb-iphone-12-pro-gold-2020?wid=2000&hei=1897&fmt=jpeg&qlt=95&.v=1635202844000'
})
tecnologiaList.push({
    id: '100',
    amount: '1',
    name: 'JBL Go 3 portable speaker with bluetooth waterproof black',
    price: '41 USD',
    description: 'JBL Go 3 delivers natural sound, with great clarity and precision, that is evenly dispersed. A speaker that ensures power and quality equally in the reproduction of multimedia content.',
    image: 'https://http2.mlstatic.com/D_NQ_NP_2X_754237-MLA44715287415_012021-V.webp'
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
tecnologiaList.forEach((product) => {
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
    let letter = tecnologiaList.find((product)=> product.id == id)
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
        let productFil = tecnologiaList.find((pdt) => pdt.id == id)
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


// Movil

if(promotionsHambur){
    promotionsHambur.addEventListener('click', ()=>{
        if(nameCompany){
            location.href = 'promociones.html'
        }
    })
}