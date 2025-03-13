import axios from "axios";

const wallet = 'UQBrDyqf9-VE25X-cJZCEVVNxPAt7Zs7UNPh0Ps6euKWjed-'; // Адрес кошелька (Base64)


// export async function getTonPriceBinance() {
//     try {
//         const { data } = await axios.get('https://api.binance.com/api/v3/ticker/price?symbol=TONUSDT');
//         console.log(`Текущий курс Toncoin на Binance: ${data.price} USDT`);
//     } catch (error) {
//         console.error('Ошибка:', error.message);
//     }
// }


const tokenAdress = "EQAWpz2_G0NKxlG2VvgFbgZGPt8Y1qe0cGj-4Yw5BfmYR5iF"

export async function swapCofeeApi(){
    try {
        const { data } = await axios.get(`https://tokens.swap.coffee/api/v2/tokens/address/${tokenAdress}`)
        return data.price_usd
    } catch (error) {
        console.error(error)
    }
}

await swapCofeeApi()