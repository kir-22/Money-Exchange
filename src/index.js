// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    var result={};
    if(currency>10000){
        return {error: "You are rich, my friend! We don't have so much coins for exchange"};

    }else if(currency==0||currency==undefined||currency<0){
        return {};
    }else { //var result={};

        result["H"] = Math.floor(currency / 50);
        currency = currency - (50*Math.floor(currency / 50));
        if(result["H"]===0){delete result["H"];}

        result["Q"] = Math.floor(currency / 25);
        currency = currency - (25*Math.floor(currency / 25));
        if(result["Q"]===0){delete result["Q"];}

        result["D"] = Math.floor(currency / 10);
        currency = currency - (10*Math.floor(currency / 10));
        if(result["D"]===0){delete result["D"];}

        result["N"] = Math.floor(currency / 5);
        currency = currency - (5 * Math.floor(currency / 5));
        result["P"] = Math.floor(currency / 1);
        if (result["N"] === 0) {
           delete result["N"];
          }
        if (result["P"] === 0) {
           delete result["P"];
         }
    }

    return result;
}
