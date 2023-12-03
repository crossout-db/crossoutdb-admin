import React from 'react';
import rarityStyles from '~/lib/rarityStyles';
import Link from 'next/link';
import ImageFallback from './ImageFallback';

interface ItemProps {
    id: number;
    name: string;
    type?: string;
    rarityId: number;
    size: 'small' | 'medium' | 'large';
}

const Item: React.FC<ItemProps> = ({ id, name, type, rarityId, size }) => {
    let edge = 0;
    switch (size) {
        case 'small':
            edge = 32;
            break;
        case 'medium':
            edge = 48;
            break;
        case 'large':
            edge = 64;
            break;
    }

    const textColor = rarityStyles(rarityId).textColor;

    return (
        <Link href={'/item/' + id}>
            <div
                className="text-left relative w-full flex"
                style={{ height: edge - 2, width: edge - 2 }}>
                <ImageFallback
                    src={'https://crossoutdb.com/img/items/' + id + '.png'}
                    fallbackSrc='/icons/crossoutdb.svg'
                    alt={name}
                    className="block absolute"
                    width={edge}
                    height={edge}
                />
                <div
                    className="p-2 flex flex-col relative justify-center"
                    style={{ left: edge }}>
                    <span
                        className={
                            textColor + ' whitespace-nowrap leading-none'
                        }>
                        {name}
                    </span>
                    {size !== 'small' && type ? (
                        <span className="text-gray-400 whitespace-nowrap leading-snug">
                            {type}
                        </span>
                    ) : (
                        ''
                    )}
                </div>
            </div>
        </Link>
    );
};

export default Item;
