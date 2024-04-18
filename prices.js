// WIP - currently only supporting MATIC
// needs to be worked on before leaving tap3 beta

let prices = {
  MATIC: 0
}

async function refreshPrice() {
  let res = await fetch("https://api.coinpaprika.com/v1/tickers/matic-polygon")
  let json = await res.json()
  prices.MATIC = json.quotes.USD.price
  console.log('PRICE\tMATIC\t'+prices.MATIC)
}

export { prices, refreshPrice }