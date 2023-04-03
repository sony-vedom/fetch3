import jQuery from "jquery"

window.$ = window.jQuery = jQuery;

const api = async () => {
    let promise = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1")
    let response = await promise.json();

    for (let i = 0; i < response; i++) {
        cardComponent().appendTo($("#root-cards"))
    }

}