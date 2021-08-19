let tickerValue = document.querySelector('.tickerValue');
let priceAnima = document.querySelector('.priceAni');



const searchTicker = () => {
let runId = setTimeout(updateId, 3500)
let runAni = setInterval(priceAnimation, 3500);
let runPrice = setInterval(updatePrice, 3500);
}



const updateId = () => {
    let ticker = document.querySelector('.search').value;
    let name = document.querySelector('#name')
    while(name.firstChild) {
        name.removeChild(name.firstChild)
    }
    axios.get(`https://api.nomics.com/v1/currencies/ticker?key=9ae301e9467e3eef04cb5868e1c8ed92299dc5d3&ids=${ticker}`)
    .then(res => {
        for(let i = 0; i <= res.data.length; i++) {
            let currentID = res.data[i].id;
            let idHolder = document.createElement('p');
            idHolder.classList.add('id');
            idHolder.textContent = currentID;
            name.appendChild(idHolder);
        }
    })
}

const updatePrice = () => {
    let ticker = document.querySelector('.search').value;
    let price = document.querySelector('#price');
    axios.get(`https://api.nomics.com/v1/currencies/ticker?key=9ae301e9467e3eef04cb5868e1c8ed92299dc5d3&ids=${ticker}`)
    .then(res => {
        for(let i = 0; i <= res.data.length; i++) {
            let currentPrice = res.data[i].price;
            price.textContent = currentPrice;
        }
    })
}


const priceAnimation = () => {
    priceAnima.classList.toggle('priceAni')
}


tickerValue.addEventListener('click', searchTicker);
