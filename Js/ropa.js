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

let ropaList = [];
let emptyCar = [];
let informacionProd = [];

ropaList.push({
    id: '51',
    amount: '1',
    name: 'Men is Nike Club Hoodie Pullover Sweatshirt',
    price: '52 USD',
    description: 'A wardrobe staple, the Nike Sportswear Club Fleece Pullover Hoodie combines classic style with the soft comfort of fleece.',
    image: 'https://i.linio.com/p/5c5c683553ef5a8d633dccd0b19d92cd-product.jpg'
})
ropaList.push({
    id: '52',
    amount: '1',
    name: 'Thermal Diver For Lady With Hood Kangaroo Pocket',
    price: '15 USD',
    description: 'The thermal jumpsuit has a wide hood, large last, kangaroo pocket, spring in sleeves, the fabric is warm, it replaces a blanket, it is a practical garment that you can use over your clothes, walk comfortably around the house without dragging that blanket from your bed.',
    image: 'https://http2.mlstatic.com/D_NQ_NP_980393-MCO44762280360_012021-W.jpg'
})
ropaList.push({
    id: '53',
    amount: '1',
    name: 'Unisex Soft Non-Slip Padded Flip Flops Sandals',
    price: '12 USD',
    description: 'Super soft and comfortable design, they are made of Eva, this material allows them to be flexible and non-slip, we have several colors available, you can see availability according to your size in the color option.',
    image: 'https://http2.mlstatic.com/D_NQ_NP_686104-MCO51867832520_102022-O.jpg'
})
ropaList.push({
    id: '54',
    amount: '1',
    name: 'Safari Fisherman Hat Cloak Beach Sun Man Woman Neck',
    price: '1 USD',
    description: 'Polyester/cotton fabric',
    image: 'https://http2.mlstatic.com/D_NQ_NP_672263-MCO49127435697_022022-O.jpg'
})
ropaList.push({
    id: '55',
    amount: '1',
    name: 'Fractalis Zip Up Parka Cardigan',
    price: '22 USD',
    description: 'Our designs are 100% Colombian',
    image: 'https://http2.mlstatic.com/D_NQ_NP_789635-MCO50034820562_052022-O.jpg'
})



ropaList.push({
    id: '56',
    amount: '1',
    name: 'Lady Ankle Boots Tellenzi 1610 Womenshoeswomenshoes',
    price: '19 USD',
    description: 'The following are not reasons for the Guarantee: Tears, scrapes, rupture of materials, as well as parts that make up the shoe, such as: heels, soles, covers, zippers and other shoe accessories caused by misuse of the product. The appliqués of footwear and garments. Changes in color and tonality that are natural to the material of the shoe. Folds or roughness caused by the flexion of the instep.',
    image: 'https://http2.mlstatic.com/D_NQ_NP_885821-MCO45551927496_042021-O.jpg'
})
ropaList.push({
    id: '57',
    amount: '1',
    name: 'Shingeki No Kyojin Attack On Titan Denim Jacket',
    price: '33 USD',
    description: 'All products are shipped from a Chinese warehouse.',
    image: 'https://http2.mlstatic.com/D_NQ_NP_843723-CBT48428494642_122021-W.jpg'
})
ropaList.push({
    id: '58',
    amount: '1',
    name: 'Pink Estrela Boots For Girl Los Gummies',
    price: '17 USD',
    description: 'Ideal shoes for children that provide superior comfort and ensure that your little ones are ready to run and jump throughout the day. Made of synthetic, decorative textile appliqué on the heel, boot design with star print, tpr sole. made in China. 2 month warranty.',
    image: 'https://http2.mlstatic.com/D_NQ_NP_790853-MCO48390158938_112021-O.webp'
})
ropaList.push({
    id: '59',
    amount: '1',
    name: 'White Pearl Blouse For Women Croydon',
    price: '5 USD',
    description: 'Comfort, freshness and a lot of style in one garment. Perfect for you! Lady blouse with neckline and bolero on the shoulder, made of 65% polyester 35% cotton. 1 month warranty. Made in Colombia.',
    image: 'https://http2.mlstatic.com/D_NQ_NP_724414-MCO48207117775_112021-O.webp'
})
ropaList.push({
    id: '60',
    amount: '1',
    name: 'Tennis Van',
    price: '42 USD',
    description: 'The VANS Classic Slip-On has a low profile, elasticated sides. On the back you will find the classic "OFF THE WALL" label on the underside of the famous waffle-shaped sole.',
    image: 'https://cdn.shopify.com/s/files/1/0519/3632/9889/products/SLIPCUADROS4_2400x.png?v=1653555335'
})


ropaList.push({
    id: '61',
    amount: '1',
    name: 'Jeans Tyt Palazzo Sara Brand Tyt',
    price: '21 USD',
    description: 'Jean Palazzo, sculptor, high rise, flared boot, Medium blue, medium heavy indigo cloth, 2 buttons. Tweezers for enhancement, detail on the front. TYT Brand',
    image: 'https://mujeron.cl/wp-content/uploads/2023/01/22367-H-2.jpg'
})
ropaList.push({
    id: '62',
    amount: '1',
    name: 'Comfortable Elegant Natural Jute Sandal Ref: P16_00',
    price: '21 USD',
    description: 'We welcome you to our virtual store MF quality and style at your feet we offer you good quality and attention and punctuality in our deliveries. We are committed to our objectives to fulfill you fully. We are a CUCUTA Company. COLOMBIA where we manufacture all kinds of footwear. We have varieties, and we work with excellent quality synthetic materials',
    image: 'https://http2.mlstatic.com/D_NQ_NP_647240-MCO51570595997_092022-O.webp'
})
ropaList.push({
    id: '63',
    amount: '1',
    name: 'Boy Is Short Sleeve Shirt- Fisher Price',
    price: '4 USD',
    description: 'Short sleeve t-shirt for boy. It has a nice print and bright colors for the man of the house. It is also made of knitted fabric and 100% cotton.',
    image: 'https://http2.mlstatic.com/D_NQ_NP_786907-MCO31825687201_082019-O.webp'
})
ropaList.push({
    id: '64',
    amount: '1',
    name: 'Stockings Characters SpongeBob X5',
    price: '14 USD',
    description: 'Material: Polyester cotton',
    image: 'https://http2.mlstatic.com/D_NQ_NP_719919-MCO52671879370_112022-O.webp'
})
ropaList.push({
    id: '65',
    amount: '1',
    name: 'Classic Golf Cap For Men',
    price: '6 USD',
    description: 'Classic Golf Cap for men',
    image: 'https://http2.mlstatic.com/D_NQ_NP_941168-MCO52859680766_122022-W.jpg'
})



ropaList.push({
    id: '66',
    amount: '1',
    name: 'Hat Cap With Movable Ears',
    price: '14 USD',
    description: 'Delicate Product, the pump system can be damaged and not move the ears if it is pulled or used with great force.',
    image: 'https://http2.mlstatic.com/D_NQ_NP_696345-MCO53272889757_012023-O.webp'
})
ropaList.push({
    id: '67',
    amount: '1',
    name: 'Men Is Classic Denim Pants X3 Units',
    price: '34 USD',
    description: 'Type of Garment: Men Is Rigid Classic Denim Pants Composition: 100% cotton',
    image: 'https://http2.mlstatic.com/D_NQ_NP_746483-MCO53059142294_122022-O.jpg'
})
ropaList.push({
    id: '68',
    amount: '1',
    name: 'Thermal Pajamas For Women Rabbit Fur',
    price: '8 USD',
    description: 'PRODUCT AVAILABILITY: Good',
    image: 'https://http2.mlstatic.com/D_NQ_NP_836625-MCO45375530735_032021-O.jpg'
})
ropaList.push({
    id: '69',
    amount: '1',
    name: 'Shemagh Arab Hatta Military Scarf',
    price: '2 USD',
    description: 'DO NOT MISS THIS FANTASTIC OPPORTUNITY!!',
    image: 'https://http2.mlstatic.com/D_NQ_NP_742495-MCO44054636838_112020-O.jpg'
})
ropaList.push({
    id: '70',
    amount: '1',
    name: 'Tennis Boot Converse Original In Box',
    price: '34 USD',
    description: 'The seller did not include a product description',
    image: 'https://http2.mlstatic.com/D_NQ_NP_656446-MCO45868087191_052021-O.jpg'
})


ropaList.push({
    id: '71',
    amount: '1',
    name: 'Elastic Shoelaces Tennis Shoes No More Knots',
    price: '2 USD',
    description: 'Material: elastic cotton, best quality metal clasp',
    image: 'https://http2.mlstatic.com/D_NQ_NP_906662-MCO53091310300_122022-O.jpg'
})
ropaList.push({
    id: '72',
    amount: '1',
    name: 'Skeleton Training Shirt Gym Technology Vapor Fit',
    price: '6 USD',
    description: 'Made of polyester with Vapor fit technology',
    image: 'https://http2.mlstatic.com/D_NQ_NP_629914-MCO46250593529_062021-W.jpg'
})
ropaList.push({
    id: '73',
    amount: '1',
    name: 'Men Is Polo Nike Atlético Nacional 2022 - Polo',
    price: '30 USD',
    description: 'Men Is Polo Nike Atlético Nacional 2022 - Polo Nike brand',
    image: 'https://i.linio.com/p/26c605df5e63717833e4b30b8bef848e-product.jpg'
})
ropaList.push({
    id: '74',
    amount: '1',
    name: 'Pack X3 Original Ripple Sports Shorts 2 Pockets',
    price: '23 USD',
    description: 'High Performance Polyester Spandex, Made in Pat Primo Fabrics',
    image: 'https://http2.mlstatic.com/D_NQ_NP_667372-MCO53552625185_012023-O.jpg'
})
ropaList.push({
    id: '75',
    amount: '1',
    name: 'Lycra Short Butt Lift Push Up Sports Textured Short',
    price: '7 USD',
    description: 'Spectacular Butt Lift Short Push Up Technology Textured Fabric',
    image: 'https://http2.mlstatic.com/D_NQ_NP_888770-MCO48054809187_102021-O.jpg'
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
ropaList.forEach((product) => {
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
    let letter = ropaList.find((product)=> product.id == id)
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
        let productFil = ropaList.find((pdt) => pdt.id == id)
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
