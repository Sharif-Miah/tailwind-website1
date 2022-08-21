
document.getElementById('page-btn').addEventListener('click', function () {
    window.location.href = 'http://127.0.0.1:5501/cart.html'
})



/****** function start *******/

function shopNow(element) {
    const shoppingCardField = document.getElementById(element);
    const shoppingCard = parseInt(shoppingCardField.innerText);
    return shoppingCard;
}

function getElement(getId, num) {
    const getText = document.getElementById(getId);
    getText.innerText = num;
}

/****** function end *******/

/****** Next Page start *******/

document.getElementById('next-page').addEventListener('click', function () {
    window.location.href = 'http://127.0.0.1:5501/shop.html';
})

/****** Next Page  end *******/

document.getElementById('jecket1').addEventListener('click', function () {
    const shopButton1 = shopNow('page-btn');
    const p = shopButton1 + 1

    getElement('page-btn', p)
})

document.getElementById('jecket2').addEventListener('click', function () {
    const shopButton1 = shopNow('page-btn');
    const p = shopButton1 + 1

    getElement('page-btn', p)
})

document.getElementById('jecket3').addEventListener('click', function () {
    const shopButton1 = shopNow('page-btn');
    const p = shopButton1 + 1

    getElement('page-btn', p)
})
document.getElementById('jecket4').addEventListener('click', function () {
    const shopButton1 = shopNow('page-btn');
    const p = shopButton1 + 1

    getElement('page-btn', p)
})
document.getElementById('jecket5').addEventListener('click', function () {
    const shopButton1 = shopNow('page-btn');
    const p = shopButton1 + 1

    getElement('page-btn', p)
})
document.getElementById('jecket6').addEventListener('click', function () {
    const shopButton1 = shopNow('page-btn');
    const p = shopButton1 + 1

    getElement('page-btn', p)
})