import './App.css'
import { clusterApiUrl, Connection, PublicKey } from '@solana/web3.js';
import { Metaplex } from '@metaplex-foundation/js';

const connection = new Connection(clusterApiUrl("devnet"));
const mx = Metaplex.make(connection);

export default function App() {

  mx.nfts().findAllByOwner({ owner: new PublicKey("E7mVt4rjuqFLWajKHStebUyzkQ9Z9NBQKpP2t3V9aEZ5") }).then(r => console.log(r))

  return (
      <div>
        
      </div>
  )
}

