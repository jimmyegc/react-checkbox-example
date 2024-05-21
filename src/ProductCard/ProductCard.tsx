import './ProductCard.css';
import { ReactNode } from 'react';
import * as React from 'react';
import ProductCardContext from './ProductCardContext';
import { Product } from '../types';
import ProductImage from './ProductImage';
import ProductButton from './ProductButton';
import ProductTitle from './ProductTitle';
import ProductInfo from './ProductInfo';
import ProductCategory from './ProductCategory';
import ProductRating from './ProductRating';
import ProductPrice from './ProductPrice';

type Props = {
  product: Product;
  image?: ReactNode;
  info?: ReactNode;
  action?: ReactNode;
};

function ProductCard({ image, info, action, product }: Props) {
  return (
    <ProductCardContext.Provider value={{ product }}>
      <div className="product-card">
        {image}
        <div className="product-card-bottom">
          {info}
          {action}
        </div>
      </div>
    </ProductCardContext.Provider>
  );
}

ProductCard.Image = ProductImage;
ProductCard.Button = ProductButton;
ProductCard.Title = ProductTitle;
ProductCard.Info = ProductInfo;
ProductCard.Category = ProductCategory;
ProductCard.Rating = ProductRating;
ProductCard.Price = ProductPrice;

export default ProductCard;
