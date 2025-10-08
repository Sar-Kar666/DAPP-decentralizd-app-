import { useConnection, useWallet } from "@solana/wallet-adapter-react"

export function Airdrop(){

    const walet=useWallet();    
    const {connection}=useConnection();
    

    async function sendAirdropToUser(){
        const amount=document.getElementById("publickey").value;
       await connection.requestAirdrop(walet.publicKey,amount*1000000000)
       alert("Airdrop Succesful");
    }
    return<div>
<input id="publickey" placeholder="amount"/>
<button onClick={sendAirdropToUser}>send Airdrop</button>
    </div>
}   