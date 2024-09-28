import React from 'react';

import { IoStarSharp } from 'react-icons/io5';
import CardTitle from '../elements/CardTitle';
import Author from '../elements/Author';
import Price from '../elements/Price';

const ProductCard = ({ title, author, rating, price, oldPrice, image }: { title: string, author: string, rating: number, price: number, oldPrice: number, image: string }) => {
   console.log(title, author, rating, price, oldPrice, image);
   
    return (
        <div className="relative z-10 py-10">
            <img src={image} alt={title} className="w-full" />
            <CardTitle title={title} />
            <Author name={author} />
            <div className="flex gap-3">
                <span className="font-bold">{rating}</span>
                <div className="flex gap-1 items-center">
                    {[...Array(rating)].map((_, i) => (
                        <IoStarSharp key={i} className="text-yellow-500" />
                    ))}
                </div>
                <span>(5k)</span>
            </div>
            <div className="flex gap-3">
                <Price amount={price} />
                <Price amount={oldPrice} className="line-through" />
            </div>
        </div>
    );
};

export default ProductCard;
