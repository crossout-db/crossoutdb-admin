import React from 'react';
import Coin from './Coin';

interface PriceProps {
    value: number;
    className?: string;
}

const Price: React.FC<PriceProps> = ({ value, className }) => {
    const priceString = (value / 100).toFixed(2);

    return (
        <span className={'flex space-x-1 my-auto ' + className}><span>{priceString}</span><Coin size='medium' /></span>
    );
};

export default Price;