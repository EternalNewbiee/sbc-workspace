import * as Web3 from '@solana/web3.js';

async function main(){
    const publicKey = new Web3.PublicKey('EPKkGdADirwGPxV65kgCs7QQo8ZFmq1VmB4ZdsY2RqHY');
    const connection = new Web3.Connection(Web3.clusterApiUrl('devnet'));
    const balance = await connection.getBalance(publicKey);
    console.log('balance',balance);
}

main()