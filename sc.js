let Mybtn = document.querySelector('.button')
let priceInput = document.querySelector('.price_input')
let priceList = document.querySelector('.priceul')

Mybtn.addEventListener('click', ()=> {
    let priceItem = document.createElement('li')
    priceItem.classList.add('item')
    priceItem.textContent = priceInput.value
    priceList.append(priceItem)
})

