import * as Web3 from '@solana/web3.js';
import base58 from 'bs58'

async function main() {
    const decoded = base58.decode('3idVxmCgu5h6ZGK1Lm7AAnBSUjB674AeEe45ZwhPRsaiwK35bb58xEBRMYczBeUipFR98oHpo2dSdWGgJgFnxa1c')
    const keyPair = Web3.Keypair.fromSecretKey(decoded)

    const publicKeyFrom = new Web3.PublicKey('EPKkGdADirwGPxV65kgCs7QQo8ZFmq1VmB4ZdsY2RqHY');
    const publicKeyTo = new Web3.PublicKey('JcvmtbwqkFUKoMaVfzcZTU7uMNLjP54bpzzmJskuXmL');

    const instruction = Web3.SystemProgram.transfer({
        fromPubkey: publicKeyFrom,
        toPubkey: publicKeyTo,
        lamports: 1,
    });
    const transaction = new Web3.Transaction();
    transaction.add(instruction);

    const connection = new Web3.Connection(Web3.clusterApiUrl('devnet'))
    const txSignature = await Web3.sendAndConfirmTransaction(connection, transaction, [keyPair]);

    console.log('txHash', txSignature)
}

main();