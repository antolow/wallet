let Mybtn = document.querySelector('.button')
let priceInput = document.querySelector('.price_input')
let priceList = document.querySelector('.priceul')
let tovarInput = document.querySelector('.tovar_input')
let nameList = document.querySelector('.nameul')


Mybtn.addEventListener('click', () => {
    let priceItem = document.createElement('li')
    priceItem.classList.add('item--price')
    priceItem.textContent = priceInput.value
    priceList.append(priceItem)
})

Mybtn.addEventListener('click', () => {
    let tovarItem = document.createElement('li')
    tovarItem.classList.add('item--tovar')
    tovarItem.textContent = tovarInput.value
    nameList.append(tovarItem)
})

let category = form.select.options[form.select.selectedIndex]
let price = form.price_input.value
let name = form.tovar_input.value