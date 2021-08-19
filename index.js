let tickerValue = document.querySelector('.tickerValue');
let priceAnima = document.querySelector('.priceAni');
let body = document.querySelector('body')



let runAni;
let runPrice;

const searchTicker = () => {
clearInterval(runAni);
clearInterval(runPrice);
let runId = setTimeout(updateId, 3000);
runAni = setInterval(priceAnimation, 4000); 
runPrice = setInterval(updatePrice, 4000);
// bodyImg();
}



const updateId = () => {
    let ticker = document.querySelector('.search').value;
    let name = document.querySelector('#name')
    while(name.firstChild) {
        name.removeChild(name.firstChild)
    }
    axios.get(`https://api.nomics.com/v1/currencies/ticker?key=9ae301e9467e3eef04cb5868e1c8ed92299dc5d3&ids=${ticker}`)
    .then(res => { console.log(res.data)
        for(let i = 0; i < res.data.length; i++) {
            let currentID = res.data[i].id;
            let idHolder = document.createElement('p');
            idHolder.classList.add('id');
            idHolder.textContent = currentID;
            name.appendChild(idHolder);
        }
    })
}

// const bodyImg = () => {
//     axios.get(`https://api.nomics.com/v1/currencies/ticker?key=9ae301e9467e3eef04cb5868e1c8ed92299dc5d3&ids=${ticker}`)
//     .then(res => { console.log(res.data)
//         for(let i = 0; i < res.data.length; i++) {
//             let img = res.data[i].logo_url;
//             let imgHolder = document.createElement('p');
//             imgHolder.setAttribute('href', img)
//             body.appendChild(imgHolder);
//         }
//     })
// }

const updatePrice = () => {
    let tickerPrice = document.querySelector('#name').textContent;
    let price = document.querySelector('#price');
    
    axios.get(`https://api.nomics.com/v1/currencies/ticker?key=9ae301e9467e3eef04cb5868e1c8ed92299dc5d3&ids=${tickerPrice}`)
    .then(res => {
        for(let i = 0; i < res.data.length; i++) {
            let currentPrice = res.data[i].price;
            price.textContent = currentPrice;
        }
    })
    }


const priceAnimation = () => {
    priceAnima.classList.toggle('priceAni')
}

tickerValue.addEventListener('click', searchTicker);