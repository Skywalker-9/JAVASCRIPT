
/*
const jokes = require("give-me-a-joke");
const colors = require("colors");
//console.log(jokes)

jokes.getRandomDadJoke(function (joke) {
    //console.log(joke.rainbow);
    console.log(joke);
});
*/


/*
import {getCurrentData, getCurrentPrice, getHistoricalPrices} from "yahoo-stock-prices-fetch"

const yahooStockPrices = require("yahoo-stock-prices-fetch");

yahooStockPrices.getCurrentPrice('AAPL', (err,price) => {
    console.log(price);
});

const data = yahooStockPrices.getCurrentData('AAPL');
console.log(data);
*/

const yahooStockPrices = require("yahoo-stock-prices");

var start = async function () {
    const apple = await yahooStockPrices.getCurrentData('AAPL')
    console.log ("          APPLE          ");
    console.log(apple);
    const nvidia = await yahooStockPrices.getCurrentData('NVDA')
    console.log ("          NVIDIA          ");
    console.log(nvidia);
    const amd = await yahooStockPrices.getCurrentData('AMD')
    console.log ("          AMD          ");
    console.log(amd);
    const tesla = await yahooStockPrices.getCurrentData('TSLA')
    console.log ("          TESLA          ");
    console.log(tesla);
    const microsoft = await yahooStockPrices.getCurrentData('MSFT')
    console.log ("          MICROSOFT          ");
    console.log(microsoft);

}

start();
