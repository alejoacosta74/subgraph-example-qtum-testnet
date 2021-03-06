const Web3 = require('web3');
const { JANUS , CONTRACT , CONTRACT_ADDRESS} = require("./constants");

async function main(){
    try {
        const web3 = new Web3(JANUS);
        let accounts = await web3.eth.getAccounts();
        for (let index = 0; index < accounts.length; index++) {
            let balance = await web3.eth.getBalance(accounts[index]);
            console.log(`Account[${index}]: ${accounts[index]} - Balance: `, web3.utils.fromWei(balance, 'ether'));            
        }
        const latestBlockNumber = await web3.eth.getBlockNumber();
        console.log(`\nLatest block height: `, latestBlockNumber);
    }
    catch (e){
        console.log("Web3 script error: \n", e);
    }   
}

main();