import { useContext } from 'react'
import { DataContext } from '../contexts/DataProvider'
import CryptoSingle from './CryptoSingle'
export default function UserCollection() {
    const {cryptos} = useContext(DataContext)
    return (
        <div className='coin-app'>
            
            {cryptos.map(coin => {
                return (
                    <CryptoSingle
                        key={coin.id}
                        name={coin.name}
                        price={coin.price}
                        symbol={coin.symbol}
                        marketcap={coin.volume}
                        volume={coin.marketcap}
                        image={coin.image}
                        priceChange={coin.priceChange}
                    />
                );
            })}
        </div>
    );
}