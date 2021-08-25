let tableData = [{id: "BTC", name: "Bitcoin", searchToken: 'BTCUSDT'},
{id: "ETH", name: "Ethereum", searchToken: "ETHUSDT"},
{id: "ADA", name: "Cardano", searchToken: 'ADAUSDT'},
{id: "BNB", name: "Binance Coin", searchToken: 'BNBUSDT'},
{id: "XRP", name: "Ripple", searchToken: 'XRPUSDT'},
{id: "DOGE", name: "Dogecoin", searchToken: 'DOGEUSDT'},
{id: "DOT", name: "Polkadot", searchToken: 'DOTUSDT'},
{id: "SOL", name: "Solana", searchToken: 'SOLUSDT'},
{id: "UNI", name: "Uniswap Protocol Token", searchToken: 'UNIUSDT'},
{id: "BCH", name: "Bitcoin Cash", searchToken: 'BCHUSDT'},
{id: "LINK", name: "ChainLink", searchToken: 'LINKUSDT'},
{id: "LUNA", name: "Luna", searchToken: 'LUNAUSDT'},
{id: "LTC", name: "Litecoin", searchToken: 'LTCUSDT'},
{id: "ICP", name: "Dfinity", searchToken: 'ICPUSDT'},
{id: "MATIC", name: "Polygon", searchToken: 'MATICUSDT'},
{id: "XLM", name: "Stellar", searchToken: 'XLMUSDT'},
{id: "ETC", name: "Ethereum Classic", searchToken: 'ETCUSDT'},
{id: "VET", name: "VeChain Thor", searchToken: 'VETUSDT'},
{id: "FTXTOKEN", name: "FTX Token", searchToken: 'FTTUSDT'},
{id: "THETA", name: "Theta Token", searchToken: 'THETAUSDT'},
{id: "FIL", name: "Filecoin", searchToken: 'FILUSDT'},
{id: "AVAX", name: "Avalanche", searchToken: 'AVAXUSDT'},
{id: "TRX", name: "TRON", searchToken: 'TRXUSDT'},
{id: "ALGO", name: "Algorand", searchToken: 'ALGOUSDT'},
{id: "CETH", name: "Compound Ether", searchToken: 'CETHUSDT'},
{id: "AAVE", name: "Aave", searchToken: 'AAVEUSDT'},
{id: "ATOM", name: "Cosmos", searchToken: 'ATOMUSDT'},
{id: "EOS", name: "EOS", searchToken: 'EOSUSDT'},
{id: "GRT", name: "The Graph", searchToken: 'GRTUSDT'},
{id: "CAKE", name: "PancakeSwap", searchToken: 'CAKEUSDT'},
{id: "XMR", name: "Monero", searchToken: 'XMRUSDT'},
{id: "SHIB", name: "Shiba Inu", searchToken: 'sHIBUSDT'},
{id: "CUSDC", name: "Compound USD Coin", searchToken: 'CUSDCUSDT'},
{id: "KLAY", name: "Klaytn", searchToken: 'KLAYUSDT'},
{id: "CDAI", name: "Compound Dai", searchToken: 'CDAIUSDT'},
{id: "AXS2", name: "Axie Infinity", searchToken: 'AXS2USDT'},
{id: "NEO", name: "NEO", searchToken: 'NEOUSDT'},
{id: "CRO", name: "Crypto.com Chain", searchToken: 'CROUSDT'},
{id: "MKR", name: "Maker", searchToken: 'MKRUSDT'},
{id: "SUSHI", name: "Sushi", searchToken: 'SUSHIUSDT'},
{id: "BSV", name: "Bitcoin SV", searchToken: 'BSVUSDT'},
{id: "XTZ", name: "Tezos", searchToken: 'XTZUSDT'},
{id: "KSM", name: "Kusama", searchToken: 'KSMUSDT'},
{id: "IOT", name: "IOTA (MIOTA)", searchToken: 'IOTUSDT'},
{id: "EGLD", name: "Elrond", searchToken: 'EGLDUSDT'},
{id: "BTT", name: "BitTorrent", searchToken: 'BTTUSDT'},
{id: "STETH", name: "Liquid Staked Ether", searchToken: 'STETHUSDT'},
{id: "AMP2", name: "AMP Token", searchToken: 'AMP2USDT'},
{id: "LEO", name: "UNUS SED LEO", searchToken: 'LEOUSDT'},
{id: "COMP", name: "Compound", searchToken: 'COMPUSDT'},
{id: "CEL", name: "Celsius", searchToken: 'CELUSDT'},
{id: "HT", name: "Huobi Token", searchToken: 'HTUSDT'},
{id: "QNT", name: "Quant", searchToken: 'QNTUSDT'},
{id: "RUNE", name: "Thorchain", searchToken: 'RUNEUSDT'},
{id: "WAVES", name: "Waves", searchToken: 'WAVESUSDT'},
{id: "DASH", name: "Dash", searchToken: 'DASHUSDT'},
{id: "HELIUM", name: "Helium", searchToken: 'HELIUMUSDT'},
{id: "DCR", name: "Decred", searchToken: 'DCRUSDT'},
{id: "1INCH", name: "1inch", searchToken: '1INCHUSDT'},
{id: "HBAR", name: "Hedera Hashgraph", searchToken: 'HBARUSDT'},
{id: "UST2", name: "TerraUSD", searchToken: 'UST2USDT'},
{id: "XDCE", name: "XinFin Digital Contract", searchToken: 'XDCEUSDT'},
{id: "SNX", name: "Synthetix Network Token", searchToken: 'SNXUSDT'},
{id: "HOT", name: "Holo", searchToken: 'HOTUSDT'},
{id: "NEAR", name: "Near Protocol", searchToken: 'NEARUSDT'},
{id: "CHZ", name: "Chiliz", searchToken: 'CHZUSDT'},
{id: "XEM", name: "NEM", searchToken: 'XEMUSDT'},
{id: "TFUEL", name: "Theta Fuel", searchToken: 'TFUELUSDT'}
];

///LIVE PRICE UPDATE
let wsTEN = new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@trade/ethusdt@trade/maticusdt@trade/adausdt@trade/bnbusdt@trade/xrpusdt@trade/dogeusdt@trade/dotusdt@trade/solusdt@trade/uniusdt@trade/bchusdt@trade/linkusdt@trade/lunausdt@trade/ltcusdt@trade/icpusdt@trade/algousdt@trade/trxusdt@trade/avaxusdt@trade/xlmusdt@trade/etcusdt@trade/vetusdt@trade/thetausdt@trade/filusdt@trade/cethusdt@trade/aaveusdt@trade/atomusdt@trade');
let lastPrice = null;
wsTEN.onmessage = (e) => {
    let cryptoObjectThree = JSON.parse(e.data);
    let price = parseFloat(cryptoObjectThree.p).toFixed(2) * 1;
    for(let i = 0; i <tableData.length; i++){
        let symbol = tableData[i].searchToken;
            if(cryptoObjectThree.s === symbol){  
            let priceElement = document.createElement('span');
            priceElement.textContent = price;
            priceElement.style.color = !lastPrice || lastPrice === price ? 'green' : lastPrice < price ? 'red' : 'green';
            let cryptoElement = document.querySelector(`.${symbol}`);
            //Clears Price
            if(cryptoElement.childNodes[1]){
                cryptoElement.removeChild(cryptoElement.childNodes[1])
            }
            //Append New Price
            cryptoElement.appendChild(priceElement);
            lastPrice = price;
            }
        }}
        
const listElement = document.getElementById('list');
const paginationElement = document.getElementById('pagination');
let currentPage = 1;
let rows = 15;

// let coinText = document.createElement('span');
// Sleep Function to Throttle API
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
        itemElement.classList.add(`${item.searchToken}`)
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