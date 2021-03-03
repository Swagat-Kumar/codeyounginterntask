import React from 'react'

const Answer = ({currency,target,amount,exchangeRates}) => {
    return (
        <div>
            {target.map(t=>(<p key={t} style={{fontWeight:'600',color:'white'}}>{t} <br/><p style={{color:'greenyellow',fontWeight:'500'}}>   {(amount*(1/exchangeRates['rates'][currency])*(exchangeRates['rates'][t])).toFixed(2)}</p></p>))}
        </div>
    )
}

export default Answer
