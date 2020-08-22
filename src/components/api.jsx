import React from 'react'

const Api = () => {

  // Application ID 431342
  // Application Name Music
  // Secret Key c0cb8a6b50cee3c7b9bfc114b284cd52
  // let a = null
  // useEffect( () => {
  //   fetch("https://free-nba.p.rapidapi.com/teams?page=0", {
  //     "method": "GET",
  //     "headers": {
  //       "x-rapidapi-host": "free-nba.p.rapidapi.com",
  //       "x-rapidapi-key": "2889b8fa8dmsh46097b845b98979p1ab11cjsn92fef2ea6fe6"
  //     }
  //   })
  //   .then(response => response.json() )
  //   .then( resp => console.log( resp ) )
  //   .catch(err => console.log(err))

    fetch("https://free-nba.p.rapidapi.com/players?page=0&per_page=25", {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "free-nba.p.rapidapi.com",
        "x-rapidapi-key": "2889b8fa8dmsh46097b845b98979p1ab11cjsn92fef2ea6fe6"
      }
    })
    .then(response => response.json() )
    .then( resp => console.log( resp ) )
    .catch(err => console.log(err) )

  //   fetch("https://free-nba.p.rapidapi.com/stats?page=0&per_page=25", {
  //     "method": "GET",
  //     "headers": {
  //       "x-rapidapi-host": "free-nba.p.rapidapi.com",
  //       "x-rapidapi-key": "2889b8fa8dmsh46097b845b98979p1ab11cjsn92fef2ea6fe6"
  //     }
  //   })
  //   .then(response => response.json())
  //   .then( resp => console.log( resp ))
  //   .catch(err => console.log(err))

  // }, [] )
    // fetch('https://v1.nocodeapi.com/myevenway/nba/MQkVKpvosQWmKcuu/teams')
    //   .then( response => response.json() )
    //   .then( response => console.log( response ))
    //   .catch( err => console.log( err ))
  

  return (
    <div>
      Hello Api
    </div>
  )
}

export default Api