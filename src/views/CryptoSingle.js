import { useContext } from 'react';
import './CryptoSingle.css';
import { DataContext } from '../contexts/DataProvider'


const CryptoSingle = ({
  name,
  price,
  symbol,
  marketcap,
  volume,
  image,
  priceChange
}) => {
  const {addCrypto} = useContext(DataContext)
  return (
    <div className='coin-container'>
      <div className='coin-row'>
        <div className='coin'>
          <img src={image} alt='crypto' />
          <h1>{name}</h1>
          <p className='coin-symbol'>{symbol}</p>
        </div>
        <div className='coin-data'>
          <p className='coin-price'>${price}</p>
          <p className='coin-volume'>${volume.toLocaleString()}</p>

          {priceChange < 0 ? (
            <p className='coin-percent red'>{priceChange.toFixed(2)}%</p>
          ) : (
            <p className='coin-percent green'>{priceChange.toFixed(2)}%</p>
          )}

          <button className='add-btn' onClick={() => addCrypto({
            name,
            price,
            symbol,
            marketcap,
            volume,
            image,
            priceChange
          })}>Add crypto to collection</button>

          <p className='coin-marketcap'>
            Mkt Cap: ${marketcap.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CryptoSingle;