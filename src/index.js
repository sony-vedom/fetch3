import jQuery from "jquery"

window.$ = window.jQuery = jQuery;

const api = async () => {
    let promise = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1")
    return await promise.json();
}

api().then((data) => data.map((el, i) => {
    const elem = "<tr><td>" + el.id + "</td>" + "<td>" + el.symbol + "</td>" + "<td>" + el.name + "</td></tr>"
    $(".root").append(elem);
    if (i < 5) {
        $(elem).css("background", "blue")
    }
}))



// Показываем на экране таблицу с полями "id", "symbol", "name".

// $(".root").append($('<td>', {id: index, alt: 'nft'}).clone())

