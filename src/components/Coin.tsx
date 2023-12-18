import Image from 'next/image';

import coin from 'public/icons/coin.png';

interface CoinProps {
    size: 'small' | 'medium' | 'large';
}

const Coin: React.FC<CoinProps> = ({ size }) => {
    let edge = 24;
    switch (size) {
        case 'small':
            edge = 16;
            break;
        case 'medium':
            edge = 24;
            break;
        case 'large':
            edge = 32;
            break;
    }

    return (
        <Image src={coin} alt="Coin" style={{ width: edge, height: edge }} />
    );
};

export default Coin;