let prodName = '';
let price = '';


document.querySelectorAll('.buy').forEach(buy => {
    buy.addEventListener('click', () => {
        prodName =  buy.parentNode.textContent;
        // price = document.querySelector('p').textContent
        document.querySelector('.product-history').innerHTML = prodName
        // document.querySelector('.counter').innerHTML=price

    })

})

// });