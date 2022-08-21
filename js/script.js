
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