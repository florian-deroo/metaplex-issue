import { Metaplex } from '@metaplex-foundation/js';
import { clusterApiUrl, Connection, PublicKey } from '@solana/web3.js';
import { useEffect, useMemo, useState } from 'react';

export default function App() {
    const [nfts, setNfts] = useState<any[]>([]);

    const connection = new Connection(clusterApiUrl('devnet'));

    const mx = useMemo(() => {
        return Metaplex.make(connection);
    }, [connection]);

    useEffect(() => {
        (async () => {
            try {
                const results = await mx
                    .nfts()
                    .findAllByOwner({
                        owner: new PublicKey(
                            'E7mVt4rjuqFLWajKHStebUyzkQ9Z9NBQKpP2t3V9aEZ5'
                        ),
                    });
                setNfts(results);
            } catch (error) {
                console.log(error);
            }
        })();
    }, [mx]);

    useEffect(() => {
        console.log(nfts);
    }, [nfts]);

    return <div></div>;
}