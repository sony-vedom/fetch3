import jQuery from "jquery"

window.$ = window.jQuery = jQuery;

const api = async () => {
    let promise = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1")
    return await promise.json();
}

api().then((data) => data.map(({id, symbol, name, ...props}, i) => {
    $(".root").append(() => {
        const elem = $("<tr><td>" + id + "</td>" + "<td>" + symbol + "</td>" + "<td>" + name + "</td></tr>");
        if (i < 5) {
            elem.css("background", "blue")
        }
        if (symbol === "usdt" ) {
            elem.css("background", "green")
        }
        return elem
    });
}))
