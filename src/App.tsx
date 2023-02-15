import './App.css'
import { clusterApiUrl, Connection, PublicKey } from '@solana/web3.js';
import { Metaplex } from '@metaplex-foundation/js';
import { useWallet } from '@solana/wallet-adapter-react';



async function fetchNft(publicKey: PublicKey | null, mx: Metaplex) {
  if (!publicKey) return null;
  const metadatas: any[] = await mx.nfts().findAllByOwner({ owner: publicKey });

  console.log(metadatas)
}


const connection = new Connection(clusterApiUrl("devnet"));
const mx = Metaplex.make(connection);

export default function App() {
  const { publicKey, sendTransaction } = useWallet();

  fetchNft(publicKey, mx)

  return (
      <div>
        
      </div>
  )
}

