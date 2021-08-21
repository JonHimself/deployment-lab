//initial pagination attempt

let tickerContainer = document.querySelector('#list-body')
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

const rankData = () => {
    axios.get(`https://api.nomics.com/v1/currencies/ticker?key=9ae301e9467e3eef04cb5868e1c8ed92299dc5d3&rank&per-page=100&page=1`)
    .then(res => {
                for(let i = 0; i < res.data.length; i++) {
                    let obj = {};
                    obj['id'] = res.data[i].id;
                    obj['name'] = res.data[i].name;
                    tableData.push(obj)
                }
                
            })
            console.log(tableData)
        }

let state = {
    querySet: tableData,
    page: 1,
    rows: 25,
}

const pagination = (querySet, page, rows) => {
    let trimStart = (page - 1) * rows; 
    let trimEnd = trimStart + rows;

    let trimmedData = querySet.slice(trimStart, trimEnd);

    let pages = Math.ceil(querySet.length / rows)

    return {
        querySet: trimmedData,
        pages: pages
    }
}

const buildTable = () => {
    let data = pagination(state.querySet, state.page, state.rows);
    let myList = data.querySet;
    for (let i = 0; i < myList.length; i++) {
        let cell = document.createElement('li')
        cell.textContent = myList[i].id + ' - ' + myList[i].name
        tickerContainer.append(cell)
    }

}


rankData();
buildTable();

