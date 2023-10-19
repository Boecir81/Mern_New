import React, { useState } from "react";


const CoinGenerator = () => {

    //State variable that will save the array of coins
    let [coinList, setCoinList] = useState([])


    const getCoinsFromApi = () => {
        console.log("Makin Sure button is working")

        //Use fetch() to make and API call
        fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en")
            .then((response) => {
                //Convert our data to json so that javascript can understand it
                return response.json()
            })
            .then((response) => {
                console.log("got the data")
                console.log(response)
                setCoinList(response)
            })
            .catch((error) => {
                console.log("error/something wrong", error)
            })
    }

    return (
        <>
            <button onClick={getCoinsFromApi} className="btn btn-success">Click for Coin </button>

            {
                coinList.map((coinObj, indexNum) => {
                    return (
                        <div key={indexNum} className="mt-5">
                            <p><img src={coinObj.image} alt="" /></p>
                            <h1>{coinObj.name}</h1>
                            <h6>${coinObj.current_price}</h6>
                            <hr />
                        </div>
                    )
                })
            }
        </>



    )
}

export default CoinGenerator;