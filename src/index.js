import jQuery from "jquery"

window.$ = window.jQuery = jQuery;

const api = async () => {
    let promise = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1")
    return await promise.json();
}

api().then((data) => data.map(({id, symbol, name, ...props}, i) => {
    $(".root").append(() => {
        return "<tr><td>" + id + "</td>" + "<td>" + symbol + "</td>" + "<td>" + name + "</td></tr>";
    });
    if (i < 5) {
        $("td").css("background", "blue")
    }

    if (symbol === "usdt" ) {
        $("td").css("background", "blue")
    }
}))



// Показываем на экране таблицу с полями "id", "symbol", "name".

// $(".root").append($('<td>', {id: index, alt: 'nft'}).clone())

