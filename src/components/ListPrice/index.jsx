import React from 'react';
import ListPriceContainer from './style';

const ListPrice = ({price, service, key}) => {
    return (
        <ListPriceContainer key={key} className='listServices'>
            <div className='serviceList'>{service}</div>
            <div className='priceList'>{price}</div>
        </ListPriceContainer>
    );
}

export default ListPrice;