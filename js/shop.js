document.getElementById('calculate-btn').addEventListener('click', function () {
    window.location.href = 'http://127.0.0.1:5501/cart.html'
})


function shopNow(element) {
    const shoppingCardField = document.getElementById(element);
    const shoppingCard = parseInt(shoppingCardField.innerText);
    return shoppingCard;
}

function getElement(getId, num) {
    const getText = document.getElementById(getId);
    getText.innerText = num;
}

// woman dress 

document.getElementById('dress1').addEventListener('click', function () {
    const shopButton1 = shopNow('calculate-btn');
    const p = shopButton1 + 1

    getElement('calculate-btn', p)
})

document.getElementById('dress2').addEventListener('click', function () {
    const shopButton1 = shopNow('calculate-btn');
    const p = shopButton1 + 1

    getElement('calculate-btn', p)
})

document.getElementById('dress3').addEventListener('click', function () {
    const shopButton1 = shopNow('calculate-btn');
    const p = shopButton1 + 1

    getElement('calculate-btn', p)
})

// man dress 

document.getElementById('shirt1').addEventListener('click', function () {
    const shopButton1 = shopNow('calculate-btn');
    const p = shopButton1 + 1

    getElement('calculate-btn', p)
})
document.getElementById('shirt2').addEventListener('click', function () {
    const shopButton1 = shopNow('calculate-btn');
    const p = shopButton1 + 1

    getElement('calculate-btn', p)
})
document.getElementById('shirt3').addEventListener('click', function () {
    const shopButton1 = shopNow('calculate-btn');
    const p = shopButton1 + 1

    getElement('calculate-btn', p)
})

// man pant 

document.getElementById('pent1').addEventListener('click', function () {
    const shopButton1 = shopNow('calculate-btn');
    const p = shopButton1 + 1

    getElement('calculate-btn', p)
})

document.getElementById('pent2').addEventListener('click', function () {
    const shopButton1 = shopNow('calculate-btn');
    const p = shopButton1 + 1

    getElement('calculate-btn', p)
})
document.getElementById('pent3').addEventListener('click', function () {
    const shopButton1 = shopNow('calculate-btn');
    const p = shopButton1 + 1

    getElement('calculate-btn', p)
})