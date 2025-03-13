import axios from "axios";


await axios.get(`https://tonapi.io/v2/blockchain/accounts/${walletAddress}/transactions`).then(response => console.log(response.data)).catch(error => console.log(error))
