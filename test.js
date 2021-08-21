let tableData = [{id: "BTC", name: "Bitcoin"},
{id: "ETH", name: "Ethereum"},
{id: "HEX", name: "HEX"},
{id: "ADA", name: "Cardano"},
{id: "BNB", name: "Binance Coin"},
{id: "USDT", name: "Tether"},
{id: "XRP", name: "Ripple"},
{id: "DOGE", name: "Dogecoin"},
{id: "DOT", name: "Polkadot"},
{id: "USDC", name: "USD Coin"},
{id: "SOL", name: "Solana"},
{id: "UNI", name: "Uniswap Protocol Token"},
{id: "BCH", name: "Bitcoin Cash"},
{id: "LINK", name: "ChainLink"},
{id: "BUSD", name: "Binance USD"},
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
{id: "TFUEL", name: "Theta Fuel"},
{id: "BLOCKSTACK", name: "Stacks"},
{id: "ZEC", name: "Zcash"},
{id: "ENJ", name: "Enjin Coin"},
{id: "BCHA", name: "Bitcoin Cash ABC"},
{id: "PLAY", name: "HeroCoin"},
{id: "QTUM", name: "Qtum"},
{id: "KOKO", name: "KokoSwap"},
{id: "YFI", name: "yearn.finance"},
{id: "FLOW2", name: "Flow"},
{id: "TUSD", name: "TrueUSD"},
{id: "TTT2", name: "The Transfer Token"},
{id: "RVN", name: "RavenCoin"},
{id: "ZIL", name: "Zilliqa"},
{id: "AR", name: "Arweave"},
{id: "BTG", name: "Bitcoin Gold"},
{id: "AUDIO", name: "Audius"},
{id: "FTM", name: "Fantom"},
{id: "SAFEMOON", name: "SafeMoon"},
{id: "TEL", name: "Telcoin"},
{id: "BAT", name: "Basic Attention Token"},
{id: "HARMONY", name: "Harmony"},
{id: "MANA", name: "Decentraland"},
{id: "ETHOS", name: "Voyager Token"},
{id: "NEXO", name: "Nexo"},
{id: "OGN", name: "Origin Protocol"}
];
const listElement = document.getElementById('list');
const paginationElement = document.getElementById('pagination');

let currentPage = 1;
let rows = 15;

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
        itemElement.innerText = `${item.id} - ${item.name}`;

        wrapper.appendChild(itemElement);
    }
}

function setupPagination (items, wrapper, rowsPerPage, ){
    wrapper.innerHTML= '';
    let pageCount = Math.ceil(items.length / rowsPerPage);

    //PREV BUTTON & NEXT BUTTON
    let prevButton = document.createElement('button');
    prevButton.innerText = '<<'
    prevButton.addEventListener('click', function() {
        if(currentPage > 1){currentPage --};
        displayList(items, listElement, rows, currentPage);
    })
    wrapper.appendChild(prevButton);
    for(let i =1; i < pageCount + 1; i++){
        let btn = pagionationButton(i, items);
        wrapper.appendChild(btn);
    }
    let nextButton = document.createElement('button');
    nextButton.innerText = '>>';
    nextButton.addEventListener('click', function(){
        if(currentPage < pageCount){currentPage ++};
        displayList(items, listElement, rows, currentPage);
    });

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

function previousBtn() {
    let prevButton = document.createElement('button')
    prevButton.innerText = '<<'
    prevButton.addEventListener('click', function() {
        currentPage ++;
        displayList(items, listElement, rows, currentPage);
    })
}

displayList(tableData, listElement, rows, currentPage);
setupPagination(tableData, paginationElement, rows)
previousBtn();