let tickerValue = document.querySelector('.tickerValue');


const searchTicker = () => {
    let name = document.querySelector('#name')
    let price = document.querySelector('#price');
    let ticker = document.querySelector('.search').value;
    
    axios.get(`https://api.nomics.com/v1/currencies/ticker?key=9ae301e9467e3eef04cb5868e1c8ed92299dc5d3&ids=${ticker}`)
    .then(res => { 
        while(name.firstChild) {
            name.removeChild(name.firstChild)
        };
        while(price.firstChild) {
            price.removeChild(price.firstChild)
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
        axios.get(`https://api.nomics.com/v1/currencies/ticker?key=9ae301e9467e3eef04cb5868e1c8ed92299dc5d3&ids=${ticker}`)
        .then(res => {
            for(let i = 0; i <= res.data.length; i++) {
                let currentPrice = res.data[i].price;
                let priceHolder = document.createElement('p');
                priceHolder.classList.add('price');
                priceHolder.textContent = currentPrice;
                price.appendChild(priceHolder);
            }
        })
    })
}



// const updateId = () => {
//     let name = document.querySelector('#name')
//     while(name.firstChild) {
//         name.removeChild(name.firstChild)
//     }
//     axios.get('https://api.nomics.com/v1/currencies/ticker?key=9ae301e9467e3eef04cb5868e1c8ed92299dc5d3&ids=XMR')
//     .then(res => {
//         for(let i = 0; i <= res.data.length; i++) {
//             let currentID = res.data[i].id;
//             let idHolder = document.createElement('p');
//             idHolder.classList.add('id');
//             idHolder.textContent = currentID;
//             name.appendChild(idHolder);
//         }
//     })
// }

// const updatePrice = () => {
//     let price = document.querySelector('#price');
//     while(price.firstChild) {
//         price.removeChild(price.firstChild)
//     }
//     axios.get(`https://api.nomics.com/v1/currencies/ticker?key=9ae301e9467e3eef04cb5868e1c8ed92299dc5d3&ids=${ticker}`)
//     .then(res => {
//         for(let i = 0; i <= res.data.length; i++) {
//             let currentPrice = res.data[i].price;
//             let priceHolder = document.createElement('p');
//             priceHolder.classList.add('price');
//             priceHolder.textContent = currentPrice;
//             price.appendChild(priceHolder);
//         }
//     })
// }




tickerValue.addEventListener('click', searchTicker);
// let runId = setTimeout(updateId, 4500)
// let runPrice = setInterval(updatePrice, 4500);