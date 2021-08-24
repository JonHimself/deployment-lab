let tableData = [{id: "BTC", name: "Bitcoin"},
{id: "ETH", name: "Ethereum"},
{id: "ADA", name: "Cardano"},
{id: "BNB", name: "Binance Coin"},
{id: "XRP", name: "Ripple"},
{id: "DOGE", name: "Dogecoin"},
{id: "DOT", name: "Polkadot"},
{id: "SOL", name: "Solana"},
{id: "UNI", name: "Uniswap Protocol Token"},
{id: "BCH", name: "Bitcoin Cash"},
{id: "LINK", name: "ChainLink"},
{id: "LUNA", name: "Luna"},
{id: "LTC", name: "Litecoin"},
{id: "ICP", name: "Dfinity"},
{id: "MATIC", name: "Polygon"},
{id: "WBTC", name: "Wrapped Bitcoin"},
{id: "XLM", name: "Stellar"},
{id: "ETC", name: "Ethereum Classic"},
{id: "VET", name: "VeChain Thor"},
{id: "FTXTOKEN", name: "FTX Token"},
{id: "THETA", name: "Theta Token"},
{id: "FIL", name: "Filecoin"},
{id: "AVAX", name: "Avalanche"},
{id: "TRX", name: "TRON"},
{id: "ALGO", name: "Algorand"},
{id: "OKB", name: "OKEx Utility Token"},
{id: "DAI", name: "Dai"},
{id: "CETH", name: "Compound Ether"},
{id: "AAVE", name: "Aave"},
{id: "ATOM", name: "Cosmos"},
{id: "EOS", name: "EOS"},
{id: "GRT", name: "The Graph"},
{id: "CAKE", name: "PancakeSwap"},
{id: "XMR", name: "Monero"},
{id: "SHIB", name: "Shiba Inu"},
{id: "CUSDC", name: "Compound USD Coin"},
{id: "KLAY", name: "Klaytn"},
{id: "CDAI", name: "Compound Dai"},
{id: "AXS2", name: "Axie Infinity"},
{id: "NEO", name: "NEO"},
{id: "CRO", name: "Crypto.com Chain"},
{id: "MKR", name: "Maker"},
{id: "SUSHI", name: "Sushi"},
{id: "BSV", name: "Bitcoin SV"},
{id: "XTZ", name: "Tezos"},
{id: "KSM", name: "Kusama"},
{id: "IOT", name: "IOTA (MIOTA)"},
{id: "EGLD", name: "Elrond"},
{id: "BITTORRENT", name: "BitTorrent"},
{id: "STETH", name: "Liquid Staked Ether"},
{id: "AMP2", name: "AMP Token"},
{id: "LEO", name: "UNUS SED LEO"},
{id: "COMP", name: "Compound"},
{id: "CEL", name: "Celsius"},
{id: "HT", name: "Huobi Token"},
{id: "QNT", name: "Quant"},
{id: "RUNE", name: "Thorchain"},
{id: "WAVES", name: "Waves"},
{id: "DASH", name: "Dash"},
{id: "HELIUM", name: "Helium"},
{id: "DCR", name: "Decred"},
{id: "1INCH", name: "1inch"},
{id: "HBAR", name: "Hedera Hashgraph"},
{id: "UST2", name: "TerraUSD"},
{id: "XDCE", name: "XinFin Digital Contract"},
{id: "SNX", name: "Synthetix Network Token"},
{id: "HOT", name: "Holo"},
{id: "NEAR", name: "Near Protocol"},
{id: "CHZ", name: "Chiliz"},
{id: "XEM", name: "NEM"},
{id: "TFUEL", name: "Theta Fuel"}
];
const listElement = document.getElementById('list');
const paginationElement = document.getElementById('pagination');
let currentPage = 1;
let rows = 15;
// let coinText = document.createElement('span');
// Sleep Function to Throttle API
const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}

// UPDATING PRICE REALTIME TESTS
const updateListPrice = async () => {
    for(let i = 0; i < tableData.length; i ++){
    await sleep(1500)
    let symbol = tableData[i].id;   
    axios.get(`https://api.nomics.com/v1/currencies/ticker?key=9ae301e9467e3eef04cb5868e1c8ed92299dc5d3&ids=${symbol}`)
    .then(res => {
        for(let j = 0; j < res.data.length; j++) {
            let coinText = document.createElement('span');
            let coin = document.querySelector(`.${symbol}`);
            let price = (parseFloat(res.data[j].price).toFixed(3) * 1);
            if(coin.childNodes[1]) {
                coin.removeChild(coin.childNodes[1])
            }
            coinText.classList.add('priceColor')
            coinText.textContent = ` ` + ` $${price}`;
            coin.appendChild(coinText);
        }
    })}
    };
setInterval(updateListPrice, 22500)
updateListPrice();


//LIST CREATION
function displayList (items, wrapper, rowsPerPage, page){
    wrapper.innerHTML = "";
    page--;
    let start = rowsPerPage * page;
    let end = start + rowsPerPage;
    let paginatedItems = items.slice(start, end);

    for(let i = 0; i < paginatedItems.length; i++) {
        let item = paginatedItems[i];
        let itemElement = document.createElement('div')
        itemElement.classList.add('item');
        itemElement.classList.add(`${item.id}`)
        itemElement.innerText = `${item.id} - ${item.name}`;
        wrapper.appendChild(itemElement);
    }
}

function setupPagination (items, wrapper, rowsPerPage, ){
    wrapper.innerHTML= '';
    let pageCount = Math.ceil(items.length / rowsPerPage);
    //PREV BUTTON & NEXT BUTTON
    let prevButton = document.createElement('button');
    prevButton.innerText = '<'
    prevButton.addEventListener('click', function() {
        if(currentPage > 1){currentPage --};
        displayList(items, listElement, rows, currentPage);
        let currentButton = document.querySelector('.pagenumbers button.active')
        let prevUpButton = currentButton.previousSibling;
        if(prevUpButton.innerText !== "<"){
        currentButton.classList.remove('active');
        prevUpButton.classList.add('active');
        }
    })
    wrapper.appendChild(prevButton);
    //Button Append
    for(let i =1; i < pageCount + 1; i++){
        let btn = pagionationButton(i, items);
        wrapper.appendChild(btn);
    }
    let nextButton = document.createElement('button');
    nextButton.innerText = '>';
    nextButton.addEventListener('click', function(){
        if(currentPage < pageCount){currentPage ++};
        displayList(items, listElement, rows, currentPage);

        let currentButton = document.querySelector('.pagenumbers button.active')
        let nextUpButton = currentButton.nextSibling;
        if(nextUpButton.innerText !== ">"){
        currentButton.classList.remove('active');
        nextUpButton.classList.add('active')
        }});
    wrapper.appendChild(nextButton);
}

function pagionationButton(page, items){
    let button = document.createElement('button');
    button.innerText = page;
    if(currentPage === page) {
        button.classList.add('active');
    }
    button.addEventListener('click', function () {
        currentPage = page;
        displayList(items, listElement, rows, currentPage);
        let currentButton = document.querySelector('.pagenumbers button.active')
        currentButton.classList.remove('active');
        button.classList.add('active')
    })
    return button;
}

displayList(tableData, listElement, rows, currentPage);
setupPagination(tableData, paginationElement, rows)