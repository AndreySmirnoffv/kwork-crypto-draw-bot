import TonWeb from 'tonweb'
import axios from 'axios';

const tonWeb = new TonWeb()

const wallet = 'UQBrDyqf9-VE25X-cJZCEVVNxPAt7Zs7UNPh0Ps6euKWjed-';

export async function checkTransaction(){
    const history = await tonWeb.getTransactions(wallet)
    console.log(history)
    if (history.length === 0){
        return console.log("history empty")
    }
}

await checkTransaction()

export async function getBalance(){
    const balance = await tonWeb.getBalance(wallet);
    console.log(balance)
    tonWeb.Address
}

await getBalance()

const jettonMaster = '1LfMn89PQAdZv1ZfxqNTqeDjBuM8Q7URjo';

async function getJettonBalance(walletAddress, jettonMaster) {
    const url = `https://tonapi.io/v2/accounts/${walletAddress}/jettons`;
    
    try {
        const { data } = await axios.get(url);
        const jettons = data.balances;
        
        const jetton = jettons.find(j => j.jetton_address === jettonMaster);
        return jetton ? jetton.balance / 1e9 : 0;
    } catch (error) {
        return console.error('Ошибка получения баланса Jetton:', error.response?.data || error.message);
    }
}


await getJettonBalance(wallet, jettonMaster).then(balance => console.log(`Баланс Jetton: ${balance}`));
