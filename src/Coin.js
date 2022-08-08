import React from 'react'
import './Coin.css'

const Coin = ({name, image, symbol, price, volume, priceChange, marketcap}) => {
  return (
    <div className='coin-container'>
        <div className='coin-row'>
            <div className='coin'>
                <img src={image} alt='crypto'></img>
                <h1>{name}</h1>
                <p className='coin-symbol'>{symbol}</p>
            </div>
            <div className='coin-data'>
                <p className='coin-price'>${price}</p>
                {/* toLocaleString is used to arrange comas eg. 1,23,000 */}
                <p className='coin-volume'>${volume.toLocaleString()}</p>
                {priceChange<0 ? (
                    <p className='coin-percent red'>{priceChange.toFixed(2)}%</p>
                ) : (
                    <p className='coin-percent green'>+{priceChange.toFixed(2)}%</p>
                )}
                <p className='coin-marketcap'>
                    Mky Cap: ${marketcap.toLocaleString()}
                </p>
            </div>
        </div>
    </div>
  )
}

export default Coin